export default {
  setResult (state, payload) {
    state.result = payload
  },
  setReady (state, payload) {
    state.productsIsReady = payload
  },
  selectProduct (state, payload) {
    const selected = state.selectedProducts
    if (selected.includes(payload)) {
      state.selectedProducts = selected.filter(item => item !== payload)
    } else {
      state.selectedProducts.push(payload)
    }
  }
}
