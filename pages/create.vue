<template>
  <div
    class="container pt-2 md:pt-8 md:pb-52 md:grid "
    style="grid-template-columns: 2fr 1fr; align-items: start"
  >
    <div
      ref="calculatorFormWrapper"
      class="pb-12 md:pb-0 md:grid md:grid-cols-6 calculator-form-wrapper md-sticky"
    >
      <div class="col-span-7">
        <UiTitle title="Формирование заявки" />
        <div class="leading-normal text-2sm text-black text-opacity-45 mb-4">
          Для отображения вашей заявки для арендодателей, заполните поля ниже и создайте заявку
        </div>
        <ValidationObserver v-slot="{ invalid }">
          <div class="pb-2 mb-2">
            <ValidationProvider
              v-slot="{ errors }"
              class="col-span-1"
              name="ФИО"
              :rules="{
                required: true,
              }"
            >
              <FeInput
                id="last-name"
                v-model="formData.name"
                :errors="errors"
                label="ФИО"
                placeholder="Иванов Иван Иванович"
              />
            </ValidationProvider>
          </div>
          <div class="pb-2 mb-2">
            <ValidationProvider
              v-slot="{ errors }"
              name="Телефон"
              :rules="{
                required: true,
                min: phoneMask.length
              }"
              :custom-messages="{ min: `Телефон должен состоять из 11 цифр` }"
              class="col-span-1"
            >
              <fe-input
                id="phone"
                v-model="innerPhone"
                :mask="phoneMask"
                :errors="errors"
                label="Телефон"
                placeholder="+7 (903) 134-55-26"
                @raw-value="(value) => (formData.phone = `7${value}`)"
              />
            </ValidationProvider>
          </div>
          <button
            class="button button-sm w-1/2"
            :class="{ 'button-disabled': invalid === true }"
            :disabled="invalid"
            @click="checkSign"
          >
            Создать заявку
          </button>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      phoneMask: '+7 (###) ###-##-##',
      innerPhone: '',
      formErrors: {},
      formData: {
        name: '',
        phone: '',
        email: '',
        params: null,
        products: null
      }
    }
  },
  computed: {
  },
  methods: {
    checkSign () {

    }
  }
}
</script>

<style>

</style>
