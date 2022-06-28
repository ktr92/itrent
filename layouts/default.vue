<template>
  <div>
    <LayoutHeader :user="authUser" />
    <Nuxt />
    <LayoutAlert />
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
