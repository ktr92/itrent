<template>
  <div />
</template>

<script>
export default {

  mounted () {
    this.$router.push({
      path: this.$config.homePage || '/calculator' || '/'
    })
  },
  methods: {
  }
}
</script>
