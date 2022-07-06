export default {
  getResultList ({ commit, dispatch, rootGetters }) { // получаем список Арендаторов
    const {
      location
    } = rootGetters['calculator/getForm']
    const dynamic = rootGetters['calculator/getFormDynamic']
    console.log({ ...location }, { ...dynamic })

    /*  try {
      await this.$axios.$get('apimethod', { ...payload }).then((response) => {
        commit('setResultList', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    } */
  }
}
