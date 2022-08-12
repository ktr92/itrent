const base64 = require('base-64')
export default {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
  },
  async sendData ({ commit, rootState, dispatch }, payload) {
    try {
      const path = 'records'
      await this.$axios.post(`/api/v1/catalogs/19/${path}`, JSON.stringify({
        ...payload
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + base64.encode(`${process.env.BPIUM_LOGIN}` + ':' + `${process.env.BPIUM_PASS}`)
        }
      }).then((response) => {
        if (response) {
          commit('changeStep', 2)
        }
      })
    } catch (e) {
      dispatch('setMessage', { title: `${e.response.data.code || 'Ошибка'}:`, description: `${e.response.data.message || 'Что-то пошло не так...'}`, type: 'error' })
    }
  }
}
