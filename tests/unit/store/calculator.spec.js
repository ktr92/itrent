
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { intersection } from 'lodash'
import { getCalculatorConfig } from '@/store/calculator/index'
import calculatorState from '@/store/calculator/state'
import calculatorMutations from '@/store/calculator/mutations'
import calculatorGetters from '@/store/calculator/getters'
import Fields from '@/tests/fixtures/fields.json'
import defaultOptionsFixture from '@/tests/fixtures/defaultOptions.json'
import dynamicOptionsFixture from '@/tests/fixtures/dynamicOptions.json'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/calculator/mutations', () => {
  test('mergeOptions', () => {
    const state = {
      defaultOptions: [{ ...defaultOptionsFixture }]
    }
    expect(state.defaultOptions[0]).not.toHaveProperty('items')

    calculatorMutations.mergeOptions(state, calculatorState.locationOptions)

    expect(state.defaultOptions[0]).toHaveProperty('items')
  })

  test('mergeDynamicOptions', () => {
    const options = ['level', 'none', 'mdu_part', 'quantity_of_parking']
    const state = {
      dynamicOptions: [],
      dynamicOptionsParams: [
        ...dynamicOptionsFixture.dynamicOptionsParams
      ]
    }

    const dynamicList = intersection(
      state.dynamicOptionsParams.map(item => item.alias), options
    )
    calculatorMutations.mergeDynamicOptions(state, dynamicList)

    expect(state.dynamicOptions.filter(item => item === 'level')).toHaveLength(1)
  })

  test('Dynamic selects must be filled by respective values', () => {
    const options = ['level']
    const fields = Fields
    const obj = fields.filter(item => item.alias === options[0])
    const val = obj[0].values[0].title
    const state = {
      dynamicMerged: [
        {
          ...dynamicOptionsFixture.dynamicOptionsParams.filter(item => item.alias === options[0])[0]
        }
      ]
    }

    calculatorMutations.updateState(state, [options[0], obj])

    expect(calculatorGetters.getDynamicMerged(state)[0]).toHaveProperty('items')
    expect(calculatorGetters.getDynamicMerged(state)[0].items[0].values.filter(i => i.title === val)).toHaveLength(1)
  })
})
