import { intersection } from 'lodash'

export default {
  setMessage ({ commit }, message) {
    commit('setMessage', message)
    /*  setTimeout(() => {
        commit('clearMessage')
      }, 5000) */
  },
  /*  async getDynamicOptions ({ commit, dispatch }, payload) { // получаем динамические свойства
    try {
      await this.$axios.$get('apimethod', { ...payload }).then((response) => {
        commit('setDynamicOptions', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }, */
  async setFormOptions ({ commit, dispatch, rootGetters }) {
    try {
      const options = await this.$axios.$get('https://rent-products-api.ipotech.su/api/v2/results/products/rent').then((response) => {
        // получаем массив из тех свойств, которые есть в продуктах
        const aliases = [...new Set(response.data.items.map(item => item.properties.map(i => i.alias)).flat(1))]
        return aliases
      })
      // берем только общие из продуктов и параметров
      const dynamicList = intersection(rootGetters['calculator/getDynamicList'], options)
      // сохраняем список динамических свойств
      commit('setDynamicOptions', [...dynamicList])
      commit('mergeDynamicOptions')
    } catch (e) {
      dispatch('setMessage', { title: `${e.response.data.code || 'Ошибка'}:`, description: `${e.response.data.message || 'Что-то пошло не так...'}`, type: 'error' })
    }
  },
  async setFormSelect ({ commit, dispatch, rootGetters }) {
    try {
      // получаем список свойств типа Select
      const optionsByAlias = rootGetters['calculator/getDynamicMerged'].filter(item => item.type === 'FeSelect')
      // получаем список свойств для запроса
      const initials = rootGetters['calculator/getDynamicMerged']
      // преобразуем свойства в формат "alias: начальное значение"
      const params = initials.reduce((obj, item) => {
        obj[item.alias] = item.initial
        return obj
      }, {})
      // формируем объект параметров для запроса значений полей типа Select
      const fieldsQuery = Object.fromEntries(
        Object.entries(params).map(([k, v]) => [`${'fields[]'}${k}`, `${k}`])
      )
      const options = await this.$axios.$get('https://rent-products-api.ipotech.su/api/v2/results/products/rent', {
        params: {
          ...fieldsQuery
        }
      }).then((response) => {
        return response
      })
      // Заполняем Select - свойства списком значений
      const getSelectOptions = (alias) => {
        const fields = options.data.fields || []
        const field = fields.filter(i => i.alias === alias)[0]
        if (field) {
          return field.values.map(i => ({
            name: i.title,
            val: i.value
          }))
        }

        return []
      }

      optionsByAlias.forEach((option) => {
        commit('updateState', [
          option.alias,
          getSelectOptions(option.alias)
        ])
      })
    } catch (e) {
      dispatch('setMessage', { title: `${e.response.data.code || 'Ошибка'}:`, description: `${e.response.data.message || 'Что-то пошло не так...'}`, type: 'error' })
    }
  }
}
