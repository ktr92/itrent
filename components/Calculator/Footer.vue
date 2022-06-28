<template>
  <div class="border-t bg-white w-full py-4 z-50">
    <div class="container grid grid-cols-12">
      <div class="col-span-7 pr-9 border-r flex items-center justify-end">
        <div>
          <p class="text-right text-2sm text-black text-opacity-45">
            Расчет нельзя редактировать, доступен только просмотр
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    enrollment: {
      type: Object,
      default: () => null
    },
    allowToChange: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {
    selectedProductsCount () {
      return this.selectedProducts.length
    },
    getSelectedCountText () {
      return `Вы выбрали ${
        this.selectedProductsCount
      } ${this.getProposalWordForm(this.selectedProductsCount)}`
    }
  },
  methods: {
    onSave () {
      if (!this.selectedProductsCount || !this.allowToChange) {
        return
      }

      this.$emit('onSave')
    }
  }
}
</script>
