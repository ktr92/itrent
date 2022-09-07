<template>
  <div>
    <div class="border-b pb-4">
      <h2
        class="font-semibold leading-6 md:leading-8 text-xl md:text-2xl text-black text-opacity-85 mb-2 md:mb-1"
      >
        Поиск арендаторов для сдачи недвижимости в аренду
      </h2>
      <div class="leading-normal text-2sm text-black text-opacity-45">
        Вводите параметры расчета и делитесь предложением с клиентом.
      </div>
    </div>

    <FeAlert
      v-if="message && message.block === 'Calculator'"
      class="mt-4 alert"
      :type="message.type"
      :title="message.title"
      :description="message.description"
    />

    <ValidationObserver ref="form">
      <template v-if="getDefaultOptions.length">
        <div v-for="defaultOption in getDefaultOptions" :key="defaultOption.alias">
          <div v-if="defaultOption.items" class="grid grid-cols-2 gap-4 py-4">
            <ValidationProvider
              v-slot="{ errors }"
              :rules="defaultOption.rules"
              :name="defaultOption.name"
              :class="{ 'col-span-2 md:col-span-1': defaultOption.smallSize, 'col-span-2': !defaultOption.smallSize}"
            >
              <FeSelect
                v-if="showLocation"
                v-model="location"
                :options="defaultOption.items"
                :errors="errors.concat(apiErrors.location)"
                :placeholder="defaultOption.name"
                :default="defaultOption.default"
                :limit="defaultOption.limit"
                class="calculator__select-region"
                @change="onInput"
              />
            </ValidationProvider>
          </div>
        </div>
      </template>

      <div v-if="optionsReady">
        <div
          v-if="getDynamicMerged.length"
          class="grid grid-cols-2 gap-4 pb-4"
        >
          <div
            v-for="(dynamicOption) in sortedDynamicOptions"
            :key="dynamicOption.alias"
            :class="[{ 'col-span-2 md:col-span-1 pt-2': dynamicOption.smallSize, 'col-span-2 pt-2': !dynamicOption.smallSize, 'border-t pt-4': dynamicOption.bordered}, {}]"
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
                  :id="dynamicOption.alias"
                  v-model="dynamicModel[dynamicOption.alias]"
                  :options="dynamicOption.items"
                  :errors="errors.concat(apiErrors[dynamicOption.alias])"
                  :placeholder="dynamicOption.name"
                  :default="dynamicOption.default"
                  @change="onInput"
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
                  :id="dynamicOption.alias"
                  v-model="dynamicModel[dynamicOption.alias]"
                  class="fe-rangeiput"
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
import FeAlert from '@/components/Fe/Alert.vue'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    FeAlert
  },
  props: {
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
      previousLocation: null,
      optionsReady: false
    }
  },
  computed: {
    ...mapState('result', ['productsIsReady']),
    ...mapGetters('calculator', ['getRealEstateRegions', 'getDefaultOptions', 'getDynamicMerged', 'getForm', 'getFormDynamic']),
    ...mapGetters(['message']),
    sortedDefaultOptions () {
      // сортируем массив опций по полю sort
      return orderBy(this.getDefaultOptions, 'sort')
    },
    sortedDynamicOptions () {
      // сортируем массив опций по полю sort
      return orderBy(this.getDynamicMerged, 'sort')
    },
    location: {
      get () {
        return this.getForm.location
          ? this.getForm.location.val
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
    if (Object.keys(this.getFormDynamic).length === 0) {
      await this.init()
    } else {
      this.load()
    }
    if (!this.productsIsReady) { this.submit() }

    /* this.$nuxt.$on('fieldChanged', () => {
      this.onInput()
    }) */
  },
  /*  beforeDestroy () {
    this.$nuxt.$off('fieldChanged')
  }, */
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
      // инициализация свойств по умолчанию
      this.$store.dispatch('calculator/initDefault')
      // инициализация динамических свойств
      await this.$store.dispatch('calculator/initDynamic')

      this.checkReady()
    },
    load () {
      this.checkReady()
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
    checkReady () {
      this.getDynamicMerged.length > 0 ? this.optionsReady = true : this.optionsReady = false
    }

  }
}
</script>
