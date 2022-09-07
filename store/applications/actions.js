const base64 = require('base-64')
const MESSAGEBLOCK = 'Application'

export default {

  updateCurrentApplication ({ commit }, payload) {
    commit('updateCurrentApplication', payload)
  },
  async sendData ({ commit, rootState, dispatch }, payload) {
    try {
      const path = 'records'
      const response = await this.$axios.post(`/api/v1/catalogs/19/${path}`, JSON.stringify({
        ...payload
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + base64.encode(`${process.env.BPIUM_LOGIN}` + ':' + `${process.env.BPIUM_PASS}`)
        }
      })
      if (response) {
        commit('changeStep', 2)
      }
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  }
}
