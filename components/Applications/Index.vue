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
      <div class="col-span-12 px-3.5 md:pl-0">
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
