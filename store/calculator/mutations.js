import Vue from 'vue'

export default {

  setOptionsJSON (state, payload) {
    state.dynamicOptionsParams = payload
  },
  setOptionsReady (state, payload) {
    state.optionsIsReady = payload
  },
  setDynamicOptions (state, payload) {
    state.dynamicOptions = payload
  },

  updateLocation (state, payload) {
    state.form.location = payload
  },
  updateObjectRoofH (state, payload) {
    state.form.objectRoofH = payload
  },
  updateObjectArea (state, payload) {
    state.form.objectArea = payload
  },
  updateDynamic (state, payload) {
    state.formDynamic = payload
  },
  mergeOptions (state, payload) {
    state.defaultOptions[0].items = payload
  },
  updateState (state, [field, value]) {
    /*  state[field] = value */
    state.dynamicMerged.filter(item => item.alias === field)[0].items = [...value]
  },
  mergeDynamicOptions (state) {
    state.dynamicMerged = []
    for (let i = 0; i < state.dynamicOptions.length; i++) {
      state.dynamicMerged.push({
        ...(state.dynamicOptionsParams.find(item => item.alias === state.dynamicOptions[i]))
      })
    }
  },
  setDynamicForm (state) {
    for (let i = 0; i < state.dynamicMerged.length; i++) {
      Vue.set(
        state.formDynamic,
        state.dynamicMerged[i].alias,
        state.dynamicOptionsParams.filter(item => item.alias === state.dynamicMerged[i].alias)[0].initial)
    }
  }
}
