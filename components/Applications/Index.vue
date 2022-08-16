<template>
  <div
    class="container pt-2 md:pt-8 md:pb-52 md:grid "
    style="align-items: start"
  >
    <div
      ref="calculatorFormWrapper"
      class="pb-12 md:pb-0 md:grid md:grid-cols-12 calculator-form-wrapper md-sticky"
      :style="{
        top: `-${getStickyTop}px`,
        'align-self': 'start',
      }"
    >
      <ApplicationsList />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getStickyTop: {
      get () {
        return this.isMounted
          ? this.calcWrapperHeight - this.windowHeight + 100
          : 0
      }
    }
  }
}
</script>
