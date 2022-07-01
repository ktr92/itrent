export default {
  setResultList ({ state }, payload) {
    state.dynamicOptions = payload
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
