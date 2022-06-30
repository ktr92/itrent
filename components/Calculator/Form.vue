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
    <div v-if="dynamicOptions && dynamicOptions.length">
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
        <div v-for="dynamicOption in sortedDynamicOptions" :key="dynamicOption.alias">
          <div class="grid grid-cols-2 gap-4 py-4 border-b">
            <ValidationProvider
              v-slot="{ errors }"
              :rules="dynamicOption.rules"
              :name="dynamicOption.name"
              :class="{ 'col-span-1': dynamicOption.smallSize, 'col-span-2': !dynamicOption.smallSize}"
            >
              <component
                :is="dynamicOption.type"
                v-if="showLocation"
                v-model="location"
                :options="dynamicOption.items"
                :errors="errors.concat(apiErrors.location)"
                :placeholder="dynamicOption.name"
                :default="dynamicOption.default"
                :limit="dynamicOption.limit"
                class="calculator__select-region"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 py-4 border-b">
          <ValidationProvider
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
              placeholder="Квадратные метры"
              caption="кв.м"
              :readonly="!allowToChange"
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

        <div v-if="dynamicReady">
          Динамические свойства
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
      dynamicReady: false,
      location: null,
      objectArea: 0,
      showLocation: 1,
      apiErrors: {},
      dynamicOptions: [],
      minObjectArea: 1,
      maxObjectArea: 999999999,
      salaryProject: false
    }
  },
  fetch () {
    // получаем параметры для Основных свойств
    this.dynamicOptions.push(this.$store.getters['calculator/getDynamicOptions'])
    // формируем массив опций с параметрами и значениями
    this.dynamicOptions[0].items = this.$store.getters['calculator/getRealEstateRegions']
  },
  computed: {
    ...mapGetters('calculator', ['getRealEstateRegions', 'getDynamicOptions', 'getObjectAreaOffers']),
    sortedDynamicOptions () {
      // сортируем массив опций по полю sort
      return this.dynamicOptions.slice().sort((a, b) => a.sort - b.sort)
    }
  },
  methods: {
    onInput () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.submit()
      }, 500)
    }
  }
}
</script>
