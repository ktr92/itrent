<template>
  <header class="py-3.5 border-0 md:border-b">
    <div class="px-0 md:px-6 flex-wrap md:flex-nowrap block md:flex items-center">
      <nuxt-link to="/" class="block mr-24 px-3.5 border-b md:border-none pb-3.5 w-full md:pb-0 md:w-auto md:inline-block">
        <img src="@/assets/images/logo.svg" alt="" class="w-40">
      </nuxt-link>
      <LayoutNavbar class="hidden md:block" :user="user" />
      <UserOptions class="hidden md:block" :user="user" />
    </div>
  </header>
</template>

<script>

export default {
  props: {
    user: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply text-black;
}
</style>
