
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
    state.form.dynamic = payload
  },
  mergeOptions (state, payload) {
    state.defaultOptions.items = payload
  },
  mergeDynamicOptions (state) {
    for (let i = 0; i < state.dynamicOptions.length; i++) {
      state.dynamicMerged.push({
        ...state.dynamicOptions[i],
        ...(state.dynamicOptionsParams.find(item => item.id === state.dynamicOptions[i].alias))
      })
    }
  },
  setDynamicForm (state) {
    for (let i = 0; i < state.dynamicOptions.length; i++) {
      state.form.dynamic[state.dynamicOptions[i].alias] = state.dynamicOptionsParams.filter(item => item.id === state.dynamicOptions[i].alias)[0].initial
    }
  }
}
