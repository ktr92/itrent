import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const getStoreConfig = () => ({
  state: { ...state() },
  actions,
  mutations,
  getters,
  namespaced: true
})
