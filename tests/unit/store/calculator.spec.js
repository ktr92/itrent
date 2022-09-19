
import { createLocalVue, enableAutoDestroy } from '@vue/test-utils'
import Vuex from 'vuex'
import { intersection } from 'lodash'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import testAction from '../../helpers/vuex_action_helper'
import { getCalculatorConfig } from '@/store/calculator/index'
import Fields from '@/tests/fixtures/fields.json'
import defaultOptionsFixture from '@/tests/fixtures/defaultOptions.json'
import dynamicOptionsFixture from '@/tests/fixtures/dynamicOptions.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/calculator/mutations', () => {
  enableAutoDestroy(beforeEach)
  const defaultStoreConfig = getCalculatorConfig()

  test('mergeOptions should add default options values to config', () => {
    const state = {
      defaultOptions: [{ ...defaultOptionsFixture }]
    }
    expect(state.defaultOptions[0]).not.toHaveProperty('items')

    defaultStoreConfig.mutations.mergeOptions(state, defaultStoreConfig.state.locationOptions)

    expect(state.defaultOptions[0]).toHaveProperty('items')
  })

  test('mergeDynamicOptions should add dynamic options values to config', () => {
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
    defaultStoreConfig.mutations.mergeDynamicOptions(state, dynamicList)

    expect(state.dynamicOptions.filter(item => item === 'level')).toHaveLength(1)
  })

  test('updateState - Dynamic selects must be filled by respective values', () => {
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

    defaultStoreConfig.mutations.updateState(state, [options[0], obj])

    expect(defaultStoreConfig.getters.getDynamicMerged(state)[0]).toHaveProperty('items')
    expect(defaultStoreConfig.getters.getDynamicMerged(state)[0].items[0].values.filter(i => i.title === val)).toHaveLength(1)
  })

  test('setDynamicForm - Should initialize form first values', () => {
    const state = {
      dynamicMerged: [
        ...dynamicOptionsFixture.dynamicOptionsParams
      ],
      formDynamic: {}
    }
    const check = state.dynamicMerged.filter(item => item.type === 'FeRangeInput')[0].alias

    defaultStoreConfig.mutations.setDynamicForm(state)

    expect(
      state.formDynamic[check]
    ).toBe(state.dynamicMerged.filter(item => item.alias === check)[0].initial)
  })
})

describe('store/calculator/actions', () => {
  const defaultStoreConfig = getCalculatorConfig()
  let mock
  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => mock.restore())

  test('initDefault must call mergeOptions ,utation', async () => {
    await testAction({
      action: defaultStoreConfig.actions.initDefault,
      payload: null,
      state: {},
      expectedMutations: [
        { type: 'mergeOptions' }
      ],
      expectedActions: []
    })
  })
  test('initDynamic must call setDynamicForm mutation', async () => {
    await testAction({
      action: defaultStoreConfig.actions.initDynamic,
      payload: null,
      state: {},
      expectedMutations: [
        { type: 'setDynamicForm' }
      ],
      expectedActions: [
        { type: 'setFormOptions' },
        { type: 'setFormSelect' }]
    })
  })
})
