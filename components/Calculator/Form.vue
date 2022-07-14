<template>
  <div>
    <div class="border-b pb-4">
      <h2
        class="font-semibold leading-8 text-2xl text-black text-opacity-85 mb-1"
      >
        Поиск помещения по введенным данным от арендодателей
      </h2>
      <div class="leading-normal text-2sm text-black text-opacity-45">
        Вводите параметры расчета и делитесь предложениям с клиентом.
      </div>
    </div>

    <LazyFeAlert
      v-if="message"
      class="mt-4"
      :type="message.type"
      :title="message.title"
      :description="message.description"
    />

    <ValidationObserver ref="form">
      <template v-if="defaultOptions && defaultOptions.length">
        <div v-for="defaultOption in sortedDefaultOptions" :key="defaultOption.alias">
          <div class="grid grid-cols-2 gap-4 py-4">
            <ValidationProvider
              v-slot="{ errors }"
              :rules="defaultOption.rules"
              :name="defaultOption.name"
              :class="{ 'col-span-1': defaultOption.smallSize, 'col-span-2': !defaultOption.smallSize}"
            >
              <component
                :is="defaultOption.type"
                v-if="showLocation"
                v-model="location"
                :options="defaultOption.items"
                :errors="errors.concat(apiErrors.location)"
                :placeholder="defaultOption.name"
                :default="defaultOption.default"
                :limit="defaultOption.limit"
                class="calculator__select-region"
                @change="handleSelectChange"
              />
            </ValidationProvider>
          </div>
        </div>
      </template>

      <div v-if="optionsReady">
        <div
          v-if="sortedDynamicOptions && sortedDynamicOptions.length"
          class="grid grid-cols-2 gap-4 pb-4 border-b"
        >
          <div
            v-for="(dynamicOption) in sortedDynamicOptions"
            :key="dynamicOption.alias"
            :class="[{ 'col-span-1': dynamicOption.smallSize, 'col-span-2 pt-4 border-t': !dynamicOption.smallSize}, {}]"
          >
            <template
              v-if="dynamicOption.type === 'FeSelect'"
            >
              <ValidationProvider
                v-slot="{ errors }"
                :rules="dynamicOption.rules"
                :name="dynamicOption.name"
              >
                <FeSelect
                  v-model="dynamicModel[dynamicOption.alias]"
                  :options="dynamicOption.items"
                  :errors="errors.concat(apiErrors[dynamicOption.alias])"
                  :placeholder="dynamicOption.name"
                  :default="dynamicOption.default"
                  @change="handleSelectChange"
                />
              </ValidationProvider>
            </template>
            <template
              v-if="dynamicOption.type === 'FeRangeInput'"
            >
              <ValidationProvider
                v-slot="{ errors }"
                :rules="dynamicOption.rules"
                :name="dynamicOption.name"
              >
                <FeRangeInput
                  v-model="dynamicModel[dynamicOption.alias]"
                  :label="dynamicOption.name"
                  :min="dynamicOption.min"
                  :max="dynamicOption.max"
                  :step="1"
                  :offers="dynamicOption.offers"
                  :errors="errors.concat(apiErrors[dynamicOption.alias])"
                  :placeholder="dynamicOption.name"
                  :caption="dynamicOption.caption"
                  :readonly="!allowToChange"
                  @input="onInput"
                />
              </ValidationProvider>
            </template>
            <template v-if="dynamicOption.type === 'FeSwitch'">
              <ValidationProvider>
                <div
                  class="w-full flex items-center leading-normal text-2sm text-black text-opacity-85 mr-auto justify-between"
                >
                  {{ dynamicOption.name }}

                  <FeSwitch
                    v-model="dynamicModel[dynamicOption.alias]"
                    :readonly="!allowToChange"
                  />
                </div>
              </ValidationProvider>
            </template>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          v-for="index in 5"
          :key="index"
          class="mt-2 last:mb-0 last:pb-0 last:border-b-0"
        >
          <CalculatorSkeleton class="animate-pulse" />
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { orderBy } from 'lodash'
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    enrollment: {
      type: Object,
      default: () => null
    },
    allowToChange: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      timeout: null,
      showLocation: true,
      apiErrors: {},
      defaultOptions: [],
      dynamicOptions: [],
      previousLocation: null,
      optionsReady: false
    }
  },
  computed: {
    ...mapState('result', ['productsIsReady']),
    ...mapGetters('calculator', ['getRealEstateRegions', 'getDefaultOptions', 'getDynamicMerged', 'getForm', 'message']),
    sortedDefaultOptions () {
      // сортируем массив опций по полю sort
      return orderBy(this.defaultOptions, 'sort')
    },
    sortedDynamicOptions () {
      // сортируем массив опций по полю sort
      return orderBy(this.dynamicOptions, 'sort')
    },
    location: {
      get () {
        return this.$store.state.calculator.form.location
          ? this.$store.state.calculator.form.location.val
          : {}
      },
      set (value) {
        if (!this.allowToChange) {
          return
        }
        const currentLocation = this.getRealEstateRegions.find(
          item => item.val === (value || this.previousLocation)
        )
        this.$store.commit('calculator/updateLocation', currentLocation)
        if (!value) {
          this.showLocation = false
          this.$nextTick(() => {
            this.showLocation = true
          })
        }
        this.previousLocation = value || this.previousLocation
      }
    },
    dynamicModel () {
      return this.$store.getters['calculator/getFormDynamic']
    }
  },
  watch: {
    location: {
      immediate: true,
      handler (val, oldVal) {
        if (val || oldVal) {
          this.previousLocation = val || oldVal
        }
      }
    }
  },
  async mounted () {
    await this.init()
    if (!this.productsIsReady) { this.submit() }

    this.$nuxt.$on('fieldChanged', () => {
      this.onInput()
    })
  },
  methods: {
    ...mapActions('result', ['getProducts']),
    onInput () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.submit()
      }, 500)
    },
    async init () {
      this.defaultOptions = []
      this.dynamicOptions = []
      // получаем параметры для свойств по умолчанию
      this.defaultOptions.push(this.$store.getters['calculator/getDefaultOptions'])
      // формируем массив значений свойств по умолчанию, объединенных с параметрами
      this.$store.commit('calculator/mergeOptions', this.getRealEstateRegions)

      // инициализация свойсв
      await this.$store.dispatch('calculator/setFormOptions')
      // инициализация селектов
      await this.$store.dispatch('calculator/setFormSelect')
      // формируем массив динамических значений свойств, объединенных с параметрами
      // this.$store.commit('calculator/mergeDynamicOptions')
      // инициализация начальных данных формы динамических свойств
      this.$store.commit('calculator/setDynamicForm')
      // получаем параметры для динамических свойств
      this.dynamicOptions = this.$store.getters['calculator/getDynamicMerged']
      this.dynamicOptions.length > 0 ? this.optionsReady = true : this.optionsReady = false
    },
    submit () {
      if (this.$refs.form != null) {
        this.$refs.form.validate().then((success) => {
          if (success) {
            this.$store.commit('calculator/updateDynamic', this.$store.getters['calculator/getFormDynamic'])
            this.getProducts()
              .then(() => {})
              .catch((e) => {
                this.apiErrors = e
              })
          }
        })
      }
    },
    handleSelectChange (value) {

    }

  }
}
</script>
