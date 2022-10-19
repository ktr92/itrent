import resultsJSON from '@/static/results.json'

const MESSAGEBLOCK = 'Result'

export default {

  getProducts ({ commit, dispatch, rootGetters, getters }) {
    commit('setReady', false)
    commit('clearSelected')
    // получаем список Арендаторов
    // const formDefault = rootGetters['calculator/getForm']
    /*  const formDynamic = rootGetters['calculator/getFormDynamic']
    const fieldsQuery = Object.fromEntries(
      Object.entries(formDynamic).map(([k, v]) => [`${'filters[properties]['}${k}]`, `${v}`])
    )
 */
    try {
      /* const response = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`, {
        params: {
          ...fieldsQuery,
          sort_by: 'title',
          per_page: getters.getPagesize,
          sort_desc: '0'
        }
      }) */
      const response = resultsJSON
      if (response.data) {
        commit('setReady', true)
        commit('setPage', 1)
        commit('setResult', { ...response.data })
        commit('setProductsCount', response.data.products_count)
        commit('setSearchId', response.data.id)
      }
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  },
  nextPage ({ getters, dispatch, commit }) {
    const page = getters.getPage + 1
    if (page <= Math.ceil(getters.getProductsCount / getters.getPagesize)) {
      commit('setPage', page)
      if (getters.getSearchId) {
        dispatch('fetchMoreProducts', page)
      }
    }
  },
  async fetchMoreProducts ({ getters, commit }, payload) {
    try {
      commit('setMoreLoading', true)
      const response = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/${getters.getSearchId}`, {
        params: {
          page: payload,
          per_page: getters.getPagesize
        }
      })
      commit('addResult', [...response.data])
      commit('setMoreLoading', false)
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  }
}
