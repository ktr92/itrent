<template>
  <div>
    <div class="border-b">
      <button @click="auth">
        Auth
      </button>
      <Calculator />
    </div>

    <div class="pt-2 mb-16" />

    <div class="flex justify-center" />
  </div>
</template>

<script>
export default {
  methods: {
    auth () {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>
