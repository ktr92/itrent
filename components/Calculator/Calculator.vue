<template>
  <div
    class="container pt-2 md:pt-8 md:pb-52 md:grid "
    style="grid-template-columns: 2fr 1fr; align-items: start"
  >
    <div
      ref="calculatorFormWrapper"
      class="pb-12 md:pb-0 md:grid md:grid-cols-6 calculator-form-wrapper md-sticky"
      :style="{
        top: `-${getStickyTop}px`,
        'align-self': 'start',
      }"
    >
      <CalculatorForm
        class="col-span-7 px-3.5 md:pr-9 md:pl-0 border-r"
      />
    </div>
    <div>
      <CalculatorAside
        :show-aside="showAside"
        class="col-span-5 md:px-2 md:pl-9 md:pr-0"
        @asideToggle="asideToggle"
      />
    </div>
    <div>
      <CalculatorFooter
        :show-aside="showAside"
        class="fixed left-0 bottom-0"
        @asideToggle="asideToggle"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAside: false
    }
  },
  computed: {
    getStickyTop: {
      get () {
        return this.isMounted
          ? this.calcWrapperHeight - this.windowHeight + 100
          : 0
      }
    }
  },
  methods: {
    asideToggle () {
      this.showAside = !this.showAside
    }
  }
}
</script>
