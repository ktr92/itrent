import { intersection } from 'lodash'
import optionsFile from '../../tests/fixtures/options.json'
import responseMock from '../../tests/fixtures/response.json'
import fieldsMock from '../../tests/fixtures/fields.json'

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
  getOptionsJSON ({ commit }) {
    try {
      /*  const options = await this.$axios.$get(`${process.env.OPTIONS_JSON}`) */
      const options = optionsFile
      commit('setOptionsJSON', [...options.dynamicOptionsParams])
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  },
  setFormOptions ({ commit, dispatch, rootGetters }) {
    try {
      /* const options = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`) */
      const options = responseMock
      /* const aliases = [...new Set(options.data.items.map(item => item.properties.map(i => i.alias)).flat(1))] */
      const aliases = [...new Set(options.data.items.map(item => item.properties.map(i => i.alias)).flat(1))]
      // берем только общие из продуктов и параметров
      const dynamicList = intersection(rootGetters['calculator/getDynamicList'], aliases)

      // сохраняем список динамических свойств
      // commit('setDynamicOptions', [...dynamicList])
      commit('mergeDynamicOptions', [...dynamicList])
    } catch (error) {
      commit('setMessageBlock', MESSAGEBLOCK, { root: true })
    }
  },
  setFormSelect ({ commit, rootGetters }) {
    try {
      // получаем список свойств типа Select
      const initials = rootGetters['calculator/getDynamicMerged']
      const optionsByAlias = initials.filter(item => item.type === 'FeSelect')

      /*  const fieldsQuery = optionsByAlias.reduce((obj, v) => {
        obj[`${'fields[]'}${v.alias}`] = v.alias
        return obj
      }, {})

       const options = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`, {
        params: {
          ...fieldsQuery
        }
      }) */
      /* const options = responseMock */

      // Заполняем Select - свойства списком значений
      const getSelectOptions = (alias) => {
        /*  const fields = options.data.fields || [] */
        const fields = fieldsMock
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
