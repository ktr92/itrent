<template>
  <div>
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
        :disabled="invalid && !signApplication"
        @click="checkSign"
      >
        Создать заявку
      </button>
    </ValidationObserver>
    <LazyFeAlert
      v-if="message"
      class="mt-4 alert"
      :type="message.type"
      :title="message.title"
      :description="message.description"
    />
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
      signApplication: false,
      phoneMask: '+7 (###) ###-##-##',
      innerPhone: '',
      formErrors: {},
      formData: {
        name: 'test',
        phone: '7777777777',
        email: 'test@tes.test'
      }
    }
  },
  computed: {
    ...mapGetters('result', ['getSelectedProducts']),
    ...mapGetters('calculator', ['getForm', 'getFormDynamic']),
    ...mapGetters('applications', ['message'])
  },
  methods: {
    checkSign () {
      this.$store.dispatch('applications/sendData', {
        values: {
          2: [{
            contact: this.formData.email
          }],
          3: [{
            contact: this.formData.phone
          }],
          4: [{
            contact: this.formData.name
          }],
          6: {
            ...this.getForm, ...this.getFormDynamic
          },
          7: {
            ...this.getSelectedProducts
          }
        }
      })
    }
  }

}
</script>

<style>

</style>
