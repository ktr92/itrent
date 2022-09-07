export const state = () => ({
  message: null,
  messageBlock: []
})

export const actions = {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
  /*   setTimeout(() => {
      commit('clearMessage')
    }, 5000) */
  }

}

export const mutations = {
  setMessage (state, message) {
    state.message = message
  },
  setMessageBlock (state, payload) {
    if (!state.messageBlock.includes(payload)) {
      state.messageBlock.push(payload)
    }
  },
  clearMessage (state) {
    state.message = null
  }
}

export const getters = {
  message: state => state.message,
  getMessageBlock: state => state.messageBlock
}
