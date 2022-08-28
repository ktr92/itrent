const headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}

export default {

  setMessage ({ commit }, message) {
    commit('setMessage', message)
    /*  setTimeout(() => {
        commit('clearMessage')
      }, 5000) */
  },

  async getProducts ({ commit, dispatch, rootGetters, getters }) {
    commit('setReady', false)
    commit('clearSelected')
    // получаем список Арендаторов
    // const formDefault = rootGetters['calculator/getForm']
    const formDynamic = rootGetters['calculator/getFormDynamic']
    const fieldsQuery = Object.fromEntries(
      Object.entries(formDynamic).map(([k, v]) => [`${'filters[properties]['}${k}]`, `${v}`])
    )

    try {
      await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`, {
        mode: 'cors',
        headers,
        params: {
          ...fieldsQuery,
          sort_by: 'title',
          per_page: getters.getPagesize,
          sort_desc: '0'
        }
      }).then((response) => {
        if (response.data) {
          // console.log({ ...response.data }.items)
          commit('setReady', true)
          commit('setPage', 1)
          commit('setResult', { ...response.data })
          commit('setProductsCount', response.data.products_count)
          commit('setSearchId', response.data.id)
        } else {
          dispatch('setMessage', { title: 'Ошибка:', description: 'Не удалось получить данные...', type: 'error' })
        }
      })
    } catch (e) {
      dispatch('setMessage', { title: `${e.response.data.code || 'Ошибка'}:`, description: `${e.response.data.message || 'Что-то пошло не так...'}`, type: 'error' })
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
  async fetchMoreProducts ({ getters, dispatch, commit }, payload) {
    try {
      commit('setMoreLoading', true)
      const response = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/${getters.getSearchId}`, {
        mode: 'cors',
        headers,
        params: {
          page: payload,
          per_page: getters.getPagesize
        }
      })
      commit('addResult', [...response.data])
      commit('setMoreLoading', false)
    } catch (e) {
      dispatch('setMessage', { title: `${e.response.data.code || 'Ошибка'}:`, description: `${e.response.data.message || 'Что-то пошло не так...'}`, type: 'error' })
    }
  }
}
