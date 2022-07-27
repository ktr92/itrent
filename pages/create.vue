<template>
  <div
    class="container pt-2 md:pt-8 md:pb-52 md:grid "
    style="grid-template-columns: 2fr 1fr; align-items: start"
  >
    <div
      ref="calculatorFormWrapper"
      class="pb-12 md:pb-0 md:grid md:grid-cols-6 calculator-form-wrapper md-sticky"
    >
      <div class="col-span-7 px-3.5 md:pr-9 md:pl-0 border-r">
        <UiTitle title="Формирование заявки" />
        <div class="leading-normal text-2sm text-black text-opacity-45 mb-4">
          Для отображения вашей заявки для арендодателей, заполните поля ниже и создайте заявку
        </div>

        <UiProgress :current-step="currentStep" :total-steps="totalSteps" />

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
                id="form-name"
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
              <FeInput
                id="form-phone"
                v-model="innerPhone"
                :mask="phoneMask"
                :errors="errors"
                label="Телефон"
                placeholder="+7 (903) 134-55-26"
                @raw-value="(value) => (formData.phone = `7${value}`)"
              />
            </ValidationProvider>
          </div>
          <div class="pb-2 mb-2">
            <ValidationProvider
              v-slot="{ errors }"
              name="Email"
              :rules="{
                required: true,
                email: true,
              }"
              class="col-span-1"
            >
              <FeInput
                id="form-email"
                v-model="formData.email"
                :errors="errors"
                label="E-mail"
                placeholder="email@example.com"
              />
            </ValidationProvider>
          </div>
          <div class="pb-2 mb-2 flex justify-between items-center col-span-3">
            <span
              class="
                flex
                items-center
                text-2sm text-black text-opacity-85
                cursor-default
              "
            >Согласен на обработку персональных данных
            </span>
            <ValidationProvider>
              <FeSwitch id="sign-application" v-model="signApplication" />
            </ValidationProvider>
          </div>
          <button
            class="button button-sm w-full md:w-1/2"
            :class="{ 'button-disabled': invalid === true && signApplication === false }"
            :disabled="invalid && signApplication"
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
import { mapGetters } from 'vuex'

import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      currentStep: 1,
      totalSteps: 2,
      signApplication: false,
      phoneMask: '+7 (###) ###-##-##',
      innerPhone: '',
      formErrors: {},
      formData: {
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters('result', ['getSelectedProducts']),
    ...mapGetters('calculator', ['getForm', 'getFormDynamic'])
  },
  methods: {
    checkSign () {
      this.$store.dispatch('applications/sendData', { ...this.formData, ...this.getSelectedProducts, ...this.getFormDynamic, ...this.getForm })
    }
  }
}
</script>

<style>

</style>
