const base64 = require('base-64')
export default {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
  },
  async sendData ({ commit, rootGetters, dispatch }, payload) {
    try {
      const path = 'records'
      const isAuth = rootGetters['applications/getCookie']
      const headers = isAuth ? {} : { Authorization: 'Basic ' + base64.encode(`${process.env.BPIUM_LOGIN}` + ':' + `${process.env.BPIUM_PASS}`) }
      await this.$axios.post(`/api/v1/catalogs/19/${path}`, JSON.stringify({
        ...payload
      }),
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }).then((response) => {
        if (response) {
          commit('changeStep', 2)
          commit('setCookie', true)
        }
      })
    } catch (e) {
      console.log(e.response)
      dispatch('setMessage', { title: `${e.response.status || 'Ошибка'}`, description: `${e.response.data || 'Что-то пошло не так...'}`, type: 'error' })
    }
  }
}
