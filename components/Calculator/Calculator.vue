<template>
  <div
    class="container pt-2 md:pt-8 md:pb-16 md:grid "
    style="grid-template-columns: 18fr 12fr; align-items: start"
  >
    <div
      ref="calculatorFormWrapper"
      class="pb-12 md:pb-0 md:grid md:grid-cols-5 calculator-form-wrapper md-sticky"
      :style="{
        position: 'sticky',
        top: `-${getStickyTop}px`,
        'align-self': 'start',
      }"
    >
      <CalculatorForm
        class="col-span-7 px-3.5 md:pr-6 md:pl-0 border-r"
      />
    </div>
    <div>
      <CalculatorAside
        :show-aside="showAside"
        class="col-span-5 md:px-2 md:pl-5 md:pr-0"
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      windowHeight: 860,
      showAside: false,
      isMounted: false,
      calcWrapperHeight: 0
    }
  },
  computed: {
    ...mapGetters('calculator', ['getDynamicList']),
    /*  calcWrapperHeight () {
      return this.$refs.calculatorFormWrapper.clientHeight + (this.getDynamicList.length - 6) * 130
    }, */
    getStickyTop: {
      get () {
        return this.isMounted
          ? this.calcWrapperHeight - this.windowHeight
          : 0
      }
    }
  },
  mounted () {
    this.isMounted = true
    this.windowHeight = window.innerHeight
    console.log(this.$refs.calculatorFormWrapper.clientHeight)
    this.calcWrapperHeight = this.$refs.calculatorFormWrapper.clientHeight + (this.getDynamicList.length - 10) * 130
    window.addEventListener('resize', this.handleWindowResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    asideToggle () {
      this.showAside = !this.showAside
    },
    handleWindowResize () {
      this.windowHeight = window.innerHeight
    }
  }
}
</script>
