
export default {
  sendData ({ commit, rootState }, payload) {
    /* await this.$axios.post(`${process.env.BPIUM_URL}/records`, {
      ...payload.values
    },
    {
      method: 'HEAD',
      mode: 'no-cors'
    }) */

    commit('changeStep', 2)
  }
}
