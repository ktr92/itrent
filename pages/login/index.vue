<template>
  <fe-auth-form
    :logo-url="require('~/assets/images/logo.svg')"
    :auth-interface="getAuthInterface"
    :restore-password-path="`/restore-password`"
    class="login-form"
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

<style>
@media (max-width: 640px) {
  .login-form {
    border: none;
    box-shadow: none;
  }
}
</style>
