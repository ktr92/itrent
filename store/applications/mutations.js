export default {
  clearUserError (state, key) {
    const index = state.errors.user.findIndex(item => item.key === key)
    state.errors.user.splice(index, 1)
  }
}
