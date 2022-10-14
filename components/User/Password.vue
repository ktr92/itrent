<template>
  <div>
    <h2 class="mt-8 mb-6 text-xl">
      Смена пароля
    </h2>
    <div class="my-4 w-full md:w-64">
      <ValidationObserver v-slot="{ invalid }">
        <div class="pb-2 mb-2">
          <ValidationProvider
            v-slot="{ errors }"
            class="col-span-1"
            name="Текущий пароль"
            :rules="{
              regex: /^(?=.*[A-Za-z | А-Яа-я])(?=.*\d)[(A-Za-z | А-Яа-я)\d]{8,}$/,
              required: true,
            }"
          >
            <FeInput
              v-model="formData.password"
              type="password"
              :errors="errors"
              placeholder="Текущий пароль"
              :top-placeholder="true"
            />
          </ValidationProvider>
        </div>
        <div class="pb-2 mb-2">
          <ValidationProvider
            v-slot="{ errors }"
            class="col-span-1"
            name="Новый пароль"
            :rules="{
              regex: /^(?=.*[A-Za-z | А-Яа-я])(?=.*\d)[(A-Za-z | А-Яа-я)\d]{8,}$/,
              required: true,
            }"
          >
            <FeInput
              v-model="formData.newpassword"
              type="password"
              :errors="errors"
              placeholder="Новый пароль"
              :top-placeholder="true"
            />
          </ValidationProvider>
        </div>
        <div class="pb-2 mb-2">
          <ValidationProvider
            v-slot="{ errors }"
            class="col-span-1"
            name="Повторите новый пароль"
            rules="required|password:@Новый пароль"
          >
            <FeInput
              v-model="formData.repeatpassword"
              type="password"
              :errors="errors"
              placeholder="Повторите новый пароль"
              :top-placeholder="true"
            />
          </ValidationProvider>
        </div>

        <button
          class="button button-sm w-full mt-4"
          :class="{ 'button-disabled': invalid }"
          :disabled="invalid"
          @click="submitForm"
        >
          Изменить пароль
        </button>
      </ValidationObserver>
    </div>
    <LazyFeAlert
      v-if="message && getMessageBlock.includes('Application')"
      class="mt-4 alert"
      :type="message.type"
      :title="message.title"
      :description="message.description"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, regex } from 'vee-validate/dist/rules'

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

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      pass: '0p9o8i7u',
      formErrors: {},
      formData: {
        password: '',
        newpassword: '',
        repeatpassword: ''
      }
    }
  },
  computed: {
    ...mapGetters(['message', 'getMessageBlock'])
  },
  methods: {
    submitForm () {

    }
  }
}
</script>

<style>

</style>
