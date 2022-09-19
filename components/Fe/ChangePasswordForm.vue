<template>
  <div class="max-w-2sm w-full bg-white rounded border shadow-lg p-8">
    <div class="leading-snug text-2xl text-bold text-black text-opacity-80 mb-6">
      {{ title }}
    </div>
    <ValidationObserver ref="validator">
      <form @submit.prevent="handleChangePassword">
        <ValidationProvider
          v-slot="{ errors }"
          name="пароль"
          :rules="{
            regex: /^(?=.*[A-Za-z | А-Яа-я])(?=.*\d)[(A-Za-z | А-Яа-я)\d]{8,}$/,
            required: true
          }"
        >
          <FeInput
            v-model="newPassword"
            name="new-password"
            type="password"
            placeholder="Введите новый пароль"
            class="mb-4"
            description="Пароль должен состоять минимум из 8 символов, одна цифра, одна буква"
            :errors="errors && errors.length ? errors : [newPasswordError]"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="повторите пароль"
          rules="required|password:@пароль"
        >
          <FeInput
            v-model="confirmNewPassword"
            name="confirm-new-password"
            type="password"
            placeholder="Повторите пароль"
            class="mb-6"
            :errors="
              errors && errors.length ? errors : [confirmNewPasswordError]
            "
          />
        </ValidationProvider>
        <FeButton type="submit" class="button-sm w-full">
          Изменить пароль
        </FeButton>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, regex } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('regex', {
  ...regex,
  message: 'Введен некорректный пароль'
})
extend('required', {
  ...required,
  message: 'Пароль не может быть пустым'
})
extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Пароли отличаются'
})

const FeChangePasswordForm = Vue.extend({
  name: 'FeChangePasswordForm',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    title: {
      type: String,
      default: 'Изменение пароля'
    },
    userInterface: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      newPassword: '',
      confirmNewPassword: '',
      newPasswordError: '',
      confirmNewPasswordError: ''
    }
  },
  methods: {
    async handleChangePassword () {
      const isValid = await this.$refs.validator.validate()
      if (!isValid) { return }
      if (this.userInterface && this.userInterface.changePassword && typeof this.userInterface.changePassword === 'function') {
        try {
          this.$emit('on-success', {})
        } catch (error) {
          this.newPasswordError = error.response.data.message
          this.$emit('on-error', error.response.data)
        }
      } else {
        this.$emit('on-submit', {
          newPassword: this.newPassword,
          confirmPassword: this.confirmNewPassword
        })
      }
    }
  }
})
export default FeChangePasswordForm
</script>
