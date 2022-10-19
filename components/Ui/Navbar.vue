<template>
  <nav class="mr-auto ml-auto md:py-0 md:border-0 px-3.5 md:px-0 md:pt-0 mt-3.5 md:mt-0 w-auto md:w-auto">
    <ul class="flex flex-wrap">
      <li class="inline-block mr-4">
        <nuxt-link
          to="/calculator"
          class="

                flex
                items-center
                leading-normal
                text-2xs md:text-base text-black text-opacity-25
                transition
                hover:text-opacity-100
                pb-2 md:py-3.5
              "
        >
          <svg-icon name="calculator" class="w-20xs h-20xs md:w-6 md:h-6 fill-current mr-2" />
          Калькулятор
        </nuxt-link>
      </li>
      <li class="inline-block mr-4">
        <nuxt-link
          to="/applications"
          class="
                flex
                items-center
                leading-normal
                text-2xs md:text-base text-black text-opacity-25
                transition
                hover:text-opacity-100
                pb-2 md:py-3.5
              "
        >
          <svg-icon name="tasks" class="w-20xs h-20xs md:w-6 md:h-6 fill-current mr-2" />
          Заявки
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  a {
    @apply relative
  }
  a.nuxt-link-exact-active {
    @apply text-elm md:text-black border-elm md:border-b-4
  }
  a.nuxt-link-exact-active svg  {
    @apply opacity-50
  }

</style>
