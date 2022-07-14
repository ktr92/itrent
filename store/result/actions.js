export default {

  setMessage ({ commit }, message) {
    commit('setMessage', message)
    /*  setTimeout(() => {
        commit('clearMessage')
      }, 5000) */
  },

  async getProducts ({ commit, dispatch, rootGetters }) {
    commit('setReady', false)
    // получаем список Арендаторов
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
        } else {
          dispatch('setMessage', { title: 'Ошибка:', description: 'Не удалось получить данные...', type: 'error' })
        }
      }).catch((err) => {
        dispatch('setMessage', { title: 'Ошибка:', description: `${err}`, type: 'error' })
      })
    } catch (e) {
      dispatch('setMessage', { title: `${e.response.data.code || 'Ошибка'}:`, description: `${e.response.data.message || 'Что-то пошло не так...'}`, type: 'error' })
    }
  }
}
