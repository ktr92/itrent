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
    <div v-if="defaultOptions && defaultOptions.length">
      <ValidationObserver ref="form">
        <!-- <div class="grid grid-cols-2 gap-4 py-4 border-b">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            class="col-span-2"
            name="Регион недвижимости"
          >
            <FeSelect
              v-if="showLocation"
              v-model="location"
              :options="getRealEstateRegions"
              :errors="errors.concat(apiErrors.location)"
              placeholder="Регион недвижимости"
              :default="false"
              :limit="5"
              class="calculator__select-region"
            />
          </ValidationProvider>
        </div> -->
        <div v-for="defaultOption in sortedDefaultOptions" :key="defaultOption.alias">
          <div class="grid grid-cols-2 gap-4 py-4 border-b">
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
                @change="handleLocationChange"
              />
            </ValidationProvider>
          </div>
        </div>
        <div v-for="(dynamicOption) in sortedDynamicOptions" :key="dynamicOption.alias">
          <div
            v-if="dynamicOption.type === 'FeRangeInput'"
            class="grid grid-cols-2 gap-4 py-4 border-b"
          >
            <ValidationProvider
              v-slot="{ errors }"
              :rules="dynamicOption.rules"
              :name="dynamicOption.name"
              :class="{ 'col-span-1': dynamicOption.smallSize, 'col-span-2': !dynamicOption.smallSize}"
            >
              <component
                :is="dynamicOption.type"
                v-model="dynamicModel[dynamicOption.alias]"
                :label="dynamicOption.name"
                :min="dynamicOption.min"
                :max="dynamicOption.max"
                :step="1"
                :offers="dynamicOption.offers"
                :errors="errors.concat(apiErrors.objectArea)"
                :placeholder="dynamicOption.name"
                :caption="dynamicOption.caption"
                :readonly="!allowToChange"
                @input="onInput"
              />
            </ValidationProvider>
          </div>
          <div v-if="dynamicOption.type === 'FeSwitch'" class="col-span-2 flex items-center gap-4 py-4 border-b">
            <div
              class="
              flex
              items-center
              leading-normal
              text-2sm text-black text-opacity-85
              mr-auto
            "
            >
              {{ dynamicOption.name }}
            </div>
            <ValidationProvider>
              <component
                :is="dynamicOption.type"
                v-model="dynamicModel[dynamicOption.alias]"
                :readonly="!allowToChange"
              />
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
    </div>

    <div v-if="defaultReady">
      Динамические свойства
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
      defaultReady: false,
      showLocation: true,
      apiErrors: {},
      defaultOptions: [],
      dynamicOptions: [],
      previousLocation: null
    }
  },
  fetch () {
    this.defaultOptions = []
    this.dynamicOptions = []
    // получаем параметры для свойств по умолчанию
    this.defaultOptions.push(this.$store.getters['calculator/getDefaultOptions'])
    // формируем массив значений свойств по умолчанию, объединенных с параметрами
    this.$store.commit('calculator/mergeOptions', this.getRealEstateRegions)
    // формируем массив динамических значений свойств, объединенных с параметрами
    this.$store.commit('calculator/mergeDynamicOptions')
    // инициализация начальных данных формы динамических свойств
    this.$store.commit('calculator/setDynamicForm')
    // получаем параметры для динамических свойств
    this.dynamicOptions = [...this.$store.getters['calculator/getDynamicMerged']]
  },

  computed: {
    ...mapState('result', ['productsIsReady']),
    ...mapGetters('calculator', ['getRealEstateRegions', 'getDefaultOptions', 'getDynamicMerged', 'getObjectAreaOffers', 'getObjectRoofHOffers', 'getForm']),
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
    objectFloor: {
      get () {
        return this.$store.state.calculator.form.objectFloor
      },
      set (value) {
        if (!this.allowToChange) {
          return
        }
        this.$store.commit('calculator/updateObjectFloor', value)
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
  mounted () {
    // await this.setFormOptions()
    // this.initEnrollment()
    if (!this.productsIsReady) { this.submit() }

    this.$nuxt.$on('fieldChanged', () => {
      this.onInput()
    })
  },
  methods: {
    ...mapActions('result', ['getResultList']),
    onInput () {
      this.submit()
    },
    submit () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      if (this.$refs.form != null) {
        this.$refs.form.validate().then((success) => {
          if (success) {
            this.$store.commit('calculator/updateDynamic', this.$store.getters['calculator/getFormDynamic'])
            this.timeout = setTimeout(() => {
              this.getResultList()
                .then(() => {})
                .catch((e) => {
                  this.apiErrors = e
                })
            }, 500)
          }
        })
      }
    },
    handleLocationChange (value) {

    }

  }
}
</script>
