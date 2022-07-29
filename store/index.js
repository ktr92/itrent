export const state = () => ({
  message: null
})

export const actions = {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
    /* setTimeout(() => {
      commit('clearMessage')
    }, 5000) */
  }

}

export const mutations = {
  setMessage (state, message) {
    state.message = message
  },
  clearMessage (state) {
    state.message = null
  }
}

export const getters = { message: state => state.message }
