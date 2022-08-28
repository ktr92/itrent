
export default {
  setMessage (state, message) {
    state.message = message
  },
  clearMessage (state) {
    state.message = null
  },
  setResult (state, payload) {
    state.result = payload
  },
  addResult (state, payload) {
    payload.forEach(item => state.result.items.push(item))
  },
  setReady (state, payload) {
    state.productsIsReady = payload
  },
  setMoreLoading (state, payload) {
    state.moreLoading = payload
  },
  setProductsCount (state, payload) {
    state.productsCount = payload
  },
  setPage (state, payload) {
    state.page = payload
  },
  setSearchId (state, payload) {
    state.searchId = payload
  },
  clearSelected (state) {
    state.selectedProducts.length = 0
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
