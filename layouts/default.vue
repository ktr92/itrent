<template>
  <div>
    <LayoutHeader :user="authUser" />
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
