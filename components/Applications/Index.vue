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
      <div class="col-span-7 px-3.5 md:pr-9 md:pl-0 border-r">
        <div class="leading-normal text-2sm text-black text-opacity-45 my-2">
          Здесь будут отображены ваши заявки после их модерации.
        </div>
        <ApplicationsList />
      </div>
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
