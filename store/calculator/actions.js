import { intersection } from 'lodash'
/* import rentOptions from '../../../rent-options/options.json'
 */
const headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}

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
  async getOptionsJSON ({ commit, dispatch }) {
    try {
      const options = await this.$axios.$get(`${process.env.OPTIONS_JSON}`, {
        mode: 'cors',
        headers
      }).then((response) => {
        return response
      })
      commit('setOptionsJSON', [...options.dynamicOptionsParams])
    } catch (err) {
      dispatch('setMessage', { title: 'Ошибка:', description: `${err}`, type: 'error' })
    }
  },
  /*   getOptionsJSON ({ commit, dispatch }) {
    commit('setOptionsJSON', [...rentOptions.dynamicOptionsParams])
  }, */
  async setFormOptions ({ commit, dispatch, rootGetters }) {
    try {
      const options = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`, {
        mode: 'cors',
        headers
      }).then((response) => {
        if (response.data) {
          // получаем массив из тех свойств, которые есть в продуктах
          const aliases = [...new Set(response.data.items.map(item => item.properties.map(i => i.alias)).flat(1))]
          return aliases
        } else {
          dispatch('setMessage', { title: 'Ошибка:', description: 'Не удалось получить данные...', type: 'error' })
        }
      }).catch((err) => {
        dispatch('setMessage', { title: 'Ошибка:', description: `${err}`, type: 'error' })
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
      const options = await this.$axios.$get(`${process.env.API_URL}/api/v2/results/products/rent`, {
        mode: 'cors',
        headers,
        params: {
          ...fieldsQuery
        }
      }).then((response) => {
        if (response.data) {
          return response
        } else {
          dispatch('setMessage', { title: 'Ошибка:', description: 'Не удалось получить данные...', type: 'error' })
        }
      }).catch((err) => {
        dispatch('setMessage', { title: 'Ошибка:', description: `${err}`, type: 'error' })
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
