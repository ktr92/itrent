<template>
  <div>
    <fe-restore-password-form
      v-if="!loading && !$route.query.code"
      :title="title"
      :description="description"
      :placeholder="placeholder"
      :form-submited="formSubmited"
      :errors="errors"
      @on-restore="handleRestore"
      @on-back="handleBack"
    />
    <img
      v-if="loading"
      class="h-16"
      src="~/assets/images/icons/ellipsis_trobber.svg"
    >
    <div
      v-if="codeError"
      class="max-w-2sm w-full bg-white rounded border shadow-lg p-8"
    >
      <p class="text-black text-opacity-50">
        Пользователь не существует или срок действия ссылки истек
      </p>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'auth',
  data: () => ({
    formSubmited: false,
    title: 'Забыли пароль?',
    description:
      'Введите свой email и мы отправим вам ссылку для восстановление пароля',
    placeholder: 'Введите email',
    errors: [],
    codeInvalid: true,
    loading: false
  }),
  auth: false,
  computed: {
    codeError () {
      return !this.loading && this.$route.query.code && this.codeInvalid
    }
  },
  mounted () {
    const code = this.$route.query.code
    if (code) {
      this.loading = true
      this.authUser(code)
    }
  },
  methods: {
    handleRestore (login) {
      this.$services.userService
        .restorePassword(login, 'broker')
        .then((status) => {
          switch (status) {
            case 204:
              this.formSubmited = true
              this.title = 'Проверьте вашу почту'
              this.description = this.getDescription(login)
              this.errors = []
              break
            case 404:
              this.formSubmited = false
              this.title = 'Забыли пароль?'
              this.errors = ['Пользователь не найден']
              break
          }
        })
    },
    authUser (code) {
      const user = this.encodeCodeParam(code)
      if (!user) {
        this.loading = false
        this.codeInvalid = true
        return
      }

      try {
        this.codeInvalid = false
        this.loading = false
        this.$router.push('/login/change-password')
      } catch (e) {
        this.loading = false
        this.codeInvalid = true
      }
    },
    encodeCodeParam (code) {
      const paramsArr = atob(code).split(':')
      if (paramsArr.length === 2) {
        return {
          login: paramsArr[0].trim(),
          password: paramsArr[1].trim()
        }
      }
      return null
    },
    getDescription (login) {
      let text = ''
      switch (login) {
        case login.match('/^7[0-9]{10}/'):
          text = 'телефон'
          break
        default:
          text = 'почту'
          break
      }

      return `Мы отправили вам ссылку для восстановления пароля на ${text} <b>${login}</b>`
    },
    handleBack () {
      this.$router.back()
    }
  }
}
</script>
