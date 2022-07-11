export const state = () => ({
  message: null,
  authToken: 'Bearer LJJClsj1gVgnfoe5nz2pU2Lg93Uh4V85J5X9Rl95'
})

export const actions = {
  // добавление сообщения об ошибке, и удаление через 5 сек
  setMessage ({ commit }, message) {
    commit('setMessage', message)
    setTimeout(() => {
      commit('clearMessage')
    }, 5000)
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
