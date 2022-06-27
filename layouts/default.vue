<template>
  <div>
    <LayoutHeader :user="authUser" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      authUser: {
        fullName: 'user'
      }
    }
  }
}
</script>
