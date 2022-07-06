import Vue from 'vue'

export default {
  setDynamicOptions (state, payload) {
    state.dynamicOptions = payload
  },
  updateLocation (state, payload) {
    state.form.location = payload
  },
  updateObjectFloor (state, payload) {
    state.form.objectFloor = payload
  },
  updateObjectRoofH (state, payload) {
    state.form.objectRoofH = payload
  },
  updateObjectArea (state, payload) {
    state.form.objectArea = payload
  },
  updateDynamic (state, payload) {
    state.formDynamic = { ...payload }
  },
  mergeOptions (state, payload) {
    state.defaultOptions.items = payload
  },
  mergeDynamicOptions (state) {
    state.dynamicMerged = []
    for (let i = 0; i < state.dynamicOptions.length; i++) {
      state.dynamicMerged.push({
        ...state.dynamicOptions[i],
        ...(state.dynamicOptionsParams.find(item => item.id === state.dynamicOptions[i].alias))
      })
    }
  },
  setDynamicForm (state) {
    for (let i = 0; i < state.dynamicOptions.length; i++) {
      Vue.set(
        state.formDynamic,
        state.dynamicOptions[i].alias,
        state.dynamicOptionsParams.filter(item => item.id === state.dynamicOptions[i].alias)[0].initial)
    }
  }
}
