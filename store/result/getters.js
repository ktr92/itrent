export default {
  getReady: state => state.productsIsReady,
  getResultItems: state => state.result.items || [],
  getSelectedProducts: state => state.selectedProducts || [],
  message: state => state.message
}
