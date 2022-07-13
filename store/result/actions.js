export default {

  async getProducts ({ commit, dispatch, rootGetters }) { // получаем список Арендаторов
    // const formDefault = rootGetters['calculator/getForm']
    const formDynamic = rootGetters['calculator/getFormDynamic']
    const fieldsQuery = Object.fromEntries(
      Object.entries(formDynamic).map(([k, v]) => [`${'filters[properties]['}${k}]`, `${v}`])
    )

    try {
      await this.$axios.$get('https://rent-products-api.ipotech.su/api/v2/results/products/rent', {
        params: {
          ...fieldsQuery
        }
      }).then((response) => {
        if (response.data) {
          console.log({ ...response.data }.items)
          commit('setReady', true)
          commit('setResult', { ...response.data })
        }
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}
