export default {
  setDynamicOptions (state, payload) {
    state.dynamicOptions = payload
  },
  updateLocation (state, payload) {
    state.form.location = payload
  },
  mergeOptions (state, payload) {
    state.defaultOptions.items = payload
  }
}
