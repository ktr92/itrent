<template>
  <div class="auth-form max-w-2sm w-full bg-white rounded border shadow py-8 px-4 md:p-8 mx-4 md:mx-0">
    <div
      class="leading-snug text-md md:text-2xl font-bold text-black text-opacity-80 mb-6"
    >
      {{ title }}
    </div>
    <validation-observer ref="validator">
      <form @submit.prevent="handleSubmit">
        <validation-provider
          v-slot="{ errors }"
          class="block mb-4"
          :rules="userNameMode === 'phone' ? 'required-phone' : 'required-email'"
          name="email"
        >
          <fe-input
            v-model="userName"
            type="text"
            name="имя пользователя"
            :placeholder="userNamePlaceholder"
            :errors="getUserError(errors)"
            @input.native="handleFiledChange"
            @change.native="handleFiledChange"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          class="block mb-6"
          rules="required-password"
        >
          <fe-input
            v-model="password"
            type="password"
            name="password"
            placeholder="Введите пароль"
            :errors="getPasswordError(errors)"
            @input.native="handleFiledChange"
            @change.native="handleFiledChange"
          />
        </validation-provider>
        <fe-button
          type="submit"
          class="button-sm w-full mb-4"
        >
          Регистрация
        </fe-button>
      </form>
    </validation-observer>
    <div class="flex flex-col items-center mb-2">
      <nuxt-link
        to="/login"
        class="inline-block text-sm text-black text-opacity-50 hover:text-opacity-100"
      >
        Я уже зарегистрирован - войти
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('required-email', {
  ...required,
  message: 'Введите email'
})
extend('required-phone', {
  ...required,
  message: 'Введите номер телефона'
})
extend('required-password', {
  ...required,
  message: 'Введите пароль'
})
const UserRegistration = Vue.extend({
  name: 'UserRegistration',
  components: { ValidationObserver, ValidationProvider },
  props: {
    logoUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Войти'
    },
    restorePasswordPath: {
      type: String,
      default: ''
    },
    userError: {
      type: String,
      default: ''
    },
    passwordError: {
      type: String,
      default: ''
    },

    createAccountPath: {
      type: String,
      default: null
    },
    userNameMode: {
      type: String,
      default: 'email',
      validator: (val) => {
        return ['email', 'phone'].includes(val)
      }
    },
    userNamePlaceholder: {
      type: String,
      default: 'Введите email'
    }
  },
  data () {
    return {
      userName: '',
      password: '',
      showServiceError: false,
      localUserError: '',
      localPasswordError: ''
    }
  },
  methods: {
    getUserError (errors) {
      if (this.showServiceError === true) {
        if (this.localUserError) { return [this.localUserError] }
        if (this.userError) { return [this.userError] }
      }
      return errors
    },
    getPasswordError (errors) {
      if (this.showServiceError === true) {
        if (this.localPasswordError) { return [this.localPasswordError] }
        if (this.passwordError) { return [this.passwordError] }
      }
      return errors
    },
    async handleSubmit () {
      this.localUserError = ''
      this.localPasswordError = ''
      const isValid = this.$refs.validator.validate()
      if (!isValid) {
        return
      }
      this.showServiceError = true
      if (
        this.authInterface &&
        this.authInterface.signIn &&
        typeof this.authInterface.signIn === 'function'
      ) {
        try {
          const result = await this.authInterface.signIn(
            this.userName,
            this.password
          )
          if (result?.data) {
            this.$emit('on-success', result.data)
          }
        } catch (error) {
          if (error && error.response && error.response.data.code === 404) {
            this.localUserError = error.response.data.message
          }
          if (error && error.response && error.response.data.code === 400) {
            this.localPasswordError = error.response.data.message
          }
          this.$emit('on-error', error.response.data)
        }
      } else {
        this.$emit('on-submit', {
          userName: this.userName,
          password: this.password
        })
      }
    },
    handleFiledChange () {
      this.showServiceError = false
    }
  }
})
export default UserRegistration
</script>
