<template>
  <div class="max-w-2sm w-full bg-white rounded border shadow py-8 px-4 md:p-8 mx-4 md:mx-0">
    <div
      id="title"
      class="leading-snug text-md md:text-2xl font-bold text-black text-opacity-80 mb-2"
    >
      {{ title }}
    </div>
    <div
      id="description"
      class="leading-6 text-sm md:text-base text-black text-opacity-50 mb-6"
    >
      {{ description }}
    </div>
    <validation-observer v-if="!formSubmited" ref="validator">
      <form @submit.prevent="handleRestore">
        <validation-provider
          v-if="type === 'broker'"
          v-slot="{ errors }"
          name="login"
          rules="required"
        >
          <fe-input
            id="login"
            v-model="login"
            :placeholder="placeholder"
            class="mb-6"
            :errors="errors.length > 0 ? errors : userErrors"
            type="text"
            @blur="userErrors = []"
          />
        </validation-provider>
        <validation-provider
          v-if="type === 'borrower'"
          v-slot="{ errors }"
          name="номер телефона"
          rules="required"
        >
          <fe-input
            v-if="type === 'borrower'"
            id="login"
            v-model="login"
            mask="+7 (###) ###-##-##"
            :placeholder="placeholder"
            class="mb-6"
            :errors="errors.length > 0 ? errors : userErrors"
            type="text"
            @blur="userErrors = []"
          />
        </validation-provider>
        <button type="submit" class="button-sm w-full mb-4">
          Восстановить
        </button>
      </form>
    </validation-observer>
    <div class="flex flex-col items-center">
      <a
        href=""
        class="inline-block text-sm text-black text-opacity-50 hover:text-opacity-100"
        @click.prevent="handleBack"
      >Назад</a>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Введите email или username'
})

// extend("email", {
//   ...email,
//   message: "Введите корректный email"
// });

export default {
  name: 'FeRestorePasswordForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    title: {
      type: String,
      default: 'Забыли пароль?'
    },
    description: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    formSubmited: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'broker'
    },
    errors: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      login: '',
      userErrors: []
    }
  },
  watch: {
    errors (value) {
      this.userErrors = [...value]
    }
  },
  mounted () {
    this.userErrors = [...this.errors]
  },
  methods: {
    async handleRestore () {
      const isValid = await this.$refs.validator.validate()
      if (!isValid) { return }
      this.$emit('on-restore', this.login)
    },
    handleBack () {
      this.$emit('on-back')
    }
  }
}
</script>
