import { intersection } from 'lodash'

const MESSAGEBLOCK = 'Calculator'

export default {
  initDefault ({ commit, getters }) {
    commit('mergeOptions', getters.getRealEstateRegions)
  },
  async initDynamic ({ commit, dispatch }) {
    // инициализация свойств
    await dispatch('setFormOptions')
    // инициализация селектов
    await dispatch('setFormSelect')
    // инициализация начальных данных формы динамических свойств
    commit('setDynamicForm')
  },
  async getOptionsJSON ({ commit }) {
    try {
      const options = await this.$axios.$get(`${process.env.OPTIONS_JSON}`)
      commit('setOptionsJSON', [...options.dynamicOptionsParams])
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  },
  async setFormOptions ({ commit, dispatch, rootGetters }) {
    try {
      const options = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`)
      const aliases = [...new Set(options.data.items.map(item => item.properties.map(i => i.alias)).flat(1))]
      // берем только общие из продуктов и параметров
      const dynamicList = intersection(rootGetters['calculator/getDynamicList'], aliases)
      // сохраняем список динамических свойств
      commit('setDynamicOptions', [...dynamicList])
      commit('mergeDynamicOptions')
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  },
  async setFormSelect ({ commit, rootGetters }) {
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
      const options = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`, {
        params: {
          ...fieldsQuery
        }
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
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  }
}
