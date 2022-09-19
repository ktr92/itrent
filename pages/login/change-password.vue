<template>
  <fe-change-password-form
    title="Изменение пароля"
    @on-success="handleSuccess"
  />
</template>

<script>
export default {
  // components: { FeChangePasswordForm },
  auth: true,
  layout: 'auth',
  methods: {
    handleSuccess () {

    }
  }
}
</script>
