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
        <div v-for="dynamicOption in dynamicOptions" :key="dynamicOption.alias">
          <div class="grid grid-cols-2 gap-4 py-4 border-b">
            <ValidationProvider
              v-slot="{ errors }"
              :rules="dynamicOption.rules"
              class="col-span-2"
              :name="dynamicOption.name"
              :class="{ 'col-span-1': dynamicOption.smallSize }"
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
  data () {
    return {
      location: null,
      showLocation: 1,
      apiErrors: {},
      dynamicOptions: []
    }
  },
  fetch () {
    this.dynamicOptions.push(this.$store.getters['calculator/getDynamicOptions'])
    this.dynamicOptions[0].items = this.$store.getters['calculator/getRealEstateRegions']
  },
  computed: {
    ...mapGetters('calculator', ['getRealEstateRegions', 'getDynamicOptions'])
  }
}
</script>
