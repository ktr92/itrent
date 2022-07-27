<template>
  <div>
    <UiHeader :user="authUser" />
    <Nuxt />
  </div>
</template>

<script>

export default {
  computed: {
    authUser () {
      return {
        fullName: 'user'
      }
    }
  }
}
</script>
