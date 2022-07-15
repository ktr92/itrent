export default {
  getReady: state => state.productsIsReady,
  getResult: state => state.result,
  getResultItems: state => state.result.items || [],
  getSelectedProducts: state => state.selectedProducts || [],
  message: state => state.message
}
