<template>
  <FeAuthForm
    :restore-password-path="`/login/restore-password`"
    :create-account-path="`/login/create-account`"
    class="login-form"
    title="Войти с помощью Email"
    @on-success="handleSuccess"
  />
</template>

<script>

export default {
  name: 'Login',
  layout: 'auth',
  computed: {
    getAuthInterface () {
      return false
    }
  },
  methods: {
    handleSuccess () {
      const backUrl = this.$auth?.$storage?.state?.redirect
      if (
        backUrl &&
        backUrl !== '/' &&
        backUrl !== '/login/change-password' &&
        backUrl !== '/404'
      ) {
        this.$router.push({
          path: backUrl
        })
      } else {
        this.$router.push({
          path: this.$config.homePage || '/calculator' || '/'
        })
      }
    }
  }
}
</script>
