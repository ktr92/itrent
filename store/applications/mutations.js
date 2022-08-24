export default {
  clearUserError (state, key) {
    const index = state.errors.user.findIndex(item => item.key === key)
    state.errors.user.splice(index, 1)
  },
  changeStep (state, payload) {
    state.step = payload
  },
  updateCurrentRequest (state, payload) {
    state.currentRequest = payload
  },
  setMessage (state, message) {
    state.message = message
  },
  clearMessage (state) {
    state.message = null
  },
  setCookie (state, payload) {
    state.connectsid = payload
  }
}
