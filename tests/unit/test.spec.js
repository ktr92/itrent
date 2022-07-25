
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { intersection } from 'lodash'
import Alert from '../../components/Fe/Alert'
import calcMutations from '../../store/calculator/mutations'
import calcGetters from '../../store/calculator/getters'
import { mutations } from '../../store'
import Fields from '../fixtures/fields.json'
const localVue = createLocalVue()
localVue.use(Vuex)

test('инициализация значений свойств по умолчанию', () => {
  const state = {
    defaultOptions: {
      alias: 'locations', // alias (id)
      name: 'Регион недвижимости', // отображаемое имя
      rules: 'required', // правило валидации
      default: false, // значение по умолчанию
      limit: 5, // лимит (для селекта)
      sort: 0, // порядок сортировки
      type: 'FeSelect' // тип компонента
    },
    locationOptions: [
      {
        title: 'Казань',
        alias: 'KAZAN',
        region_title: 'Республика Татарстан',
        rating: 3
      }]
  }
  expect(state.defaultOptions).not.toHaveProperty('items')
  calcMutations.mergeOptions(state, state.locationOptions)
  expect(state.defaultOptions).toHaveProperty('items')
})

test('инициализация динамических свойств', () => {
  // этот список получаем из продуктов API
  const options = ['level', 'heating_system', 'mdu_part', 'quantity_of_parking']
  // этот список задаем в параметрах
  const state = {
    dynamicMerged: [],
    dynamicOptions: [],
    dynamicOptionsParams: [
      {
        alias: 'restricted_area',
        name: 'Закрытая территория',
        type: 'FeSelect',
        sort: 65,
        smallSize: false,
        limit: 3,
        initial: '0'
      },

      {
        alias: 'level',
        name: 'Этаж',
        type: 'FeSelect',
        sort: 12,
        smallSize: true,
        limit: 3,
        initial: '4'
      },
      {
        alias: 'heating_system',
        name: 'Отопление',
        type: 'FeSelect',
        sort: 13,
        smallSize: true,
        limit: 3,
        initial: '0'
      },
      {
        alias: 'quantity_of_parking',
        name: 'Количество парковочных мест',
        max: 999999999,
        min: 1,
        initial: 50,
        sort: 45,
        step: 1,
        units: 'Парковочные места',
        caption: 'шт',
        type: 'FeRangeInput',
        offers: [
          {
            label: '5 шт',
            value: 5
          },
          {
            label: '15 шт',
            value: 15
          },
          {
            label: '25 шт',
            value: 25
          },
          {
            label: '30 шт',
            value: 30
          }
        ]
      }

    ]
  }
  const dynamicList = intersection(calcGetters.getDynamicList(state), options)
  calcMutations.setDynamicOptions(state, [...dynamicList])
  calcMutations.mergeDynamicOptions(state)
  expect(calcGetters.getDynamicOptions(state)).toHaveLength(3)
})

test('инициализация селектбоксов', () => {
  const options = ['level']
  const fields = Fields
  const obj = fields.filter(item => item.alias === options[0])
  const val = obj[0].values[0].title
  const state = {
    dynamicMerged: [
      {
        alias: 'level',
        name: 'Этаж',
        type: 'FeSelect',
        sort: 12,
        smallSize: true,
        limit: 3,
        initial: '4'
      }
    ]
  }
  calcMutations.updateState(state, [options[0], obj])
  expect(calcGetters.getDynamicMerged(state)[0]).toHaveProperty('items')
  console.log(calcGetters.getDynamicMerged(state)[0].items[0].values)
  expect(calcGetters.getDynamicMerged(state)[0].items[0].values.filter(i => i.title === val)).toHaveLength(1)
})
test('отображение ошибок', () => {
  const state = {
    message: null
  }
  const wrapper = mount(Alert)
  mutations.setMessage(state, { title: 'Ошибка:', description: 'Что-то пошло не так...', type: 'error' })
  expect(wrapper.find('.leading-7').text()).toEqual('Ошибка:')
})
