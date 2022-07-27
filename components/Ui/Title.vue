<template>
  <div class="flex items-center  mb-2">
    <div @click="$router.go(-1)">
      <svg-icon name="chevron-left" class="w-20xs h-20xs md:w-6 md:h-6 fill-current mr-2 cursor-pointer" />
    </div>
    <h2 class="text-2xl font-bold text-black text-opacity-85">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
