
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { intersection } from 'lodash'

import calcMutations from '@/store/calculator/mutations'
import calcGetters from '@/store/calculator/getters'
import Fields from '@/tests/fixtures/fields.json'
import defaultOptions from '@/tests/fixtures/defaultOptions.json'
import dynamicOptions from '@/tests/fixtures/dynamicOptions.json'
const localVue = createLocalVue()
localVue.use(Vuex)

test('Default options must be merged with their values', () => {
  const state = {
    ...defaultOptions
  }
  expect(state.defaultOptions).not.toHaveProperty('items')
  calcMutations.mergeOptions(state, state.locationOptions)
  expect(state.defaultOptions).toHaveProperty('items')
})

test('Dynamic properties must be merged with other ones', () => {
  // этот список получаем из продуктов API
  const options = ['level', 'heating_system', 'mdu_part', 'quantity_of_parking']
  // этот список задаем в параметрах
  const state = {
    dynamicMerged: [],
    dynamicOptions: [],
    dynamicOptionsParams: [
      ...dynamicOptions.options
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
  expect(calcGetters.getDynamicMerged(state)[0].items[0].values.filter(i => i.title === val)).toHaveLength(1)
})
