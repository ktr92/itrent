<template>
  <header class="py-3.5 border-0 md:border-b">
    <div class="px-0 md:px-6 flex-wrap md:flex-nowrap flex items-center">
      <nuxt-link to="/" class="inline-block mr-24 px-3.5">
        <img src="@/assets/images/logo.svg" alt="" class="w-40">
      </nuxt-link>
      <nav class="mr-auto md:py-0 border-t md:border-0 px-3.5 md:px-0 pt-3.5 md:pt-0 mt-3.5 md:mt-0 w-full md:w-auto">
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
                pb-2 md:pb-0
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
