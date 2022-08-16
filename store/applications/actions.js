const base64 = require('base-64')
export default {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
  },
  async sendData ({ commit, rootGetters, dispatch }, payload) {
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
    }).catch((error) => {
      if (error.response) {
        // Запрос был сделан, и сервер ответил кодом состояния, который
        // выходит за пределы 2xx
        dispatch('setMessage', { title: `${error.response.status || 'Ошибка'}`, description: `${error.response.data || 'Что-то пошло не так...'}`, type: 'error' })
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        dispatch('setMessage', { title: `${'Ошибка'}`, description: `${error.request || 'Что-то пошло не так...'}`, type: 'error' })
      } else {
        // Произошло что-то при настройке запроса, вызвавшее ошибку
        dispatch('setMessage', { title: `${'Ошибка'}`, description: `${error.message || 'Что-то пошло не так...'}`, type: 'error' })
      }
    })
  }
}
