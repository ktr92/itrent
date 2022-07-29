<template>
  <div class="pb-4 mb-4">
    <div class="text-elm text-sm pb-2">
      Шаг {{ currentStep }} / {{ totalSteps }}
    </div>
    <div class="bg-gray-300 h-5px rounded-xl overflow-hidden">
      <span :style="{width: completed + '%'}" class="bg-elm block h-full rounded-xl" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      default: 1
    },
    totalSteps: {
      type: Number,
      default: 1
    }
  },
  computed: {
    completed () {
      return this.currentStep / this.totalSteps * 100
    }
  }
}
</script>

<style>

</style>
