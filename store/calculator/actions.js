import { intersection } from 'lodash'

export default {
  async getDynamicOptions ({ commit, dispatch }, payload) { // получаем динамические свойства
    try {
      await this.$axios.$get('apimethod', { ...payload }).then((response) => {
        commit('setDynamicOptions', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async setFormOptions ({ commit, dispatch, rootGetters }) {
    try {
      const options = await this.$axios.$get('https://rent-products-api.ipotech.su/api/v2/results/products/rent').then((response) => {
        // получаем массив из тех свойств, которые есть в продуктах
        const aliases = [...new Set(response.data.items.map(item => item.properties.map(i => i.alias)).flat(1))]
        return aliases
      })
      // берем только общие из продуктов и параметров
      const dynamicList = intersection(rootGetters['calculator/getDynamicList'], options)

      commit('setDynamicOptions', [...dynamicList])
      commit('mergeDynamicOptions')
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async setFormSelect ({ commit, rootGetters }) {
    try {
      const optionsByAlias = rootGetters['calculator/getSelectList']
      const initials = rootGetters['calculator/getDynamicMerged']
      const params = initials.reduce((obj, item) => {
        obj[item.alias] = item.initial
        return obj
      }, {})
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
    } catch (error) {
      this.$sentry.captureException(error)
    }
  }
}
