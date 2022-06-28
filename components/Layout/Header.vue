<template>
  <header class="py-3.5 border-b">
    <div class="px-6 flex items-center">
      <nuxt-link to="/" class="inline-block mr-24">
        <img src="@/assets/images/logo.svg" alt="" class="w-40">
      </nuxt-link>
      <nav class="mr-auto">
        <ul class="flex flex-wrap">
          <li class="inline-block mr-4">
            <nuxt-link
              to="/calculator"
              class="
                flex
                items-center
                leading-normal
                text-base text-black text-opacity-25
                transition
                hover:text-opacity-100
              "
            >
              <svg-icon name="calculator" class="w-6 h-6 fill-current mr-2" />
              Калькулятор
            </nuxt-link>
          </li>
          <li class="inline-block mr-4">
            <nuxt-link
              to="#"
              class="
                flex
                items-center
                leading-normal
                text-base text-black text-opacity-25
                transition
                hover:text-opacity-100
              "
            >
              <svg-icon name="tasks" class="w-6 h-6 fill-current mr-2" />
              Заявки
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <UserOptions :user="user" />
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
