export default {
  getReady: state => state.productsIsReady,
  getResult: state => state.result,
  getResultItems: state => state.result.items || [],
  getSelectedProducts: state => state.selectedProducts || [],
  getProductsCount: state => state.productsCount,
  getPage: state => state.page,
  getPagesize: state => state.pagesize,
  getSearchId: state => state.searchId,
  message: state => state.message
}
