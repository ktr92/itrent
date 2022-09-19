<template>
  <UserRegistration
    class="login-form"
    title="Регистрация"
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
