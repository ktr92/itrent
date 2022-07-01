export default {
  async getResultList ({ commit, dispatch }, payload) { // получаем список Арендаторов
    try {
      await this.$axios.$get('apimethod', { ...payload }).then((response) => {
        commit('setResultList', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}
