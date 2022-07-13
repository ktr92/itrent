<template>
  <div
    class="container pt-8 pb-52"
    style="display: grid; grid-template-columns: 2fr 1fr; align-items: start"
  >
    <div
      ref="calculatorFormWrapper"
      class="grid grid-cols-6 calculator-form-wrapper"
      :style="{
        position: 'sticky',
        top: `-${getStickyTop}px`,
        'align-self': 'start',
      }"
    >
      <CalculatorForm
        class="col-span-7 pr-9 border-r"
      />
    </div>
    <div>
      <CalculatorAside
        class="col-span-5 pl-9"
      />
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
