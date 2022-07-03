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
        <div class="grid grid-cols-2 gap-4 py-4 border-b">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            class="col-span-2"
            name="Площадь помещения"
          >
            <FeRangeInput
              id="object-area"
              v-model="objectArea"
              label="Площадь помещения"
              :min="minObjectArea"
              :max="maxObjectArea"
              :step="1"
              :offers="getObjectAreaOffers"
              :errors="errors.concat(apiErrors.objectArea)"
              placeholder="Квадратные метры"
              caption="кв.м"
              :readonly="!allowToChange"
              @input="onInput"
            />
          </ValidationProvider>
          <div class="col-span-2 flex items-center">
            <div
              class="
              flex
              items-center
              leading-normal
              text-2sm text-black text-opacity-85
              mr-auto
            "
            >
              Наличие перепадов пола свыше 30см
            </div>
            <ValidationProvider>
              <FeSwitch v-model="salaryProject" :readonly="!allowToChange" />
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
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
      objectArea: 0,
      showLocation: true,
      apiErrors: {},
      defaultOptions: [],
      minObjectArea: 1,
      maxObjectArea: 999999999,
      salaryProject: false,
      previousLocation: null
    }
  },
  fetch () {
    // получаем параметры для свойств по умолчанию
    this.defaultOptions.push(this.$store.getters['calculator/getDefaultOptions'])
    // формируем массив значений свойств по умолчанию, объединенных с параметрами
    this.$store.commit('calculator/mergeOptions', this.getRealEstateRegions)
  },
  computed: {
    ...mapGetters('calculator', ['getRealEstateRegions', 'getDefaultOptions', 'getObjectAreaOffers']),
    sortedDefaultOptions () {
      // сортируем массив опций по полю sort
      return this.defaultOptions.slice().sort((a, b) => a.sort - b.sort)
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
    }
  },
  methods: {
    ...mapActions('result', ['getResultList']),
    onInput () {
      // submit формы через 0.5с после ввода
      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.submit()
      }, 500)
    },
    submit () {
      if (this.$refs.form != null) {
        this.$refs.form.validate().then((success) => {
          if (success) {
            this.getResultList()
              .then(() => {})
              .catch((e) => {
                this.apiErrors = e
              })
          }
        })
      }
    },
    handleLocationChange (value) {
      this.submit()
    }

  }
}
</script>
