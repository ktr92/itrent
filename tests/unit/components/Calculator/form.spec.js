import { merge } from 'lodash'
import { enableAutoDestroy, config, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import FakeValidationProvider from '../../../Fake/ValidationProvider.vue'
import FeAlert from '@/components/Fe/Alert.vue'
import FeRangeInput from '@/components/Fe/RangeInput.vue'
import CalculatorForm from '@/components/Calculator/Form.vue'
import { getStoreConfig } from '@/store/index.js'
import { getCalculatorConfig } from '@/store/calculator/index.js'
import { getResultStoreConfig } from '@/store/result/index.js'

import { defaultOptions } from '@/tests/fixtures/defaultOptions.json'
import { dynamicOptionsParams, dynamiOptionsList } from '@/tests/fixtures/dynamicOptions.json'

config.showDeprecationWarnings = false

Vue.use(Vuex)

describe('CalculatorForm', () => {
  enableAutoDestroy(beforeEach)

  let wrapper
  let mockedCalculatorActions

  const DEFAULT_PROPS = {
    allowToChange: true
  }
  const defaultStore = getStoreConfig()
  const defaultCalculatorStore = getCalculatorConfig()

  const createComponent = ({ props, storeConfig, calculatorConfig } = {}) => {
    mockedCalculatorActions = Object.fromEntries(
      Object.keys(defaultCalculatorStore.actions).map(key => [key, jest.fn()])
    )

    const store = new Vuex.Store({
      ...merge(
        {},
        defaultStore,
        storeConfig
      ),
      modules: {
        calculator: {
          namespaced: true,
          ...merge(
            {},
            defaultCalculatorStore,
            { actions: mockedCalculatorActions },
            calculatorConfig
          )
        },
        result: {
          namespaced: true,
          getResultStoreConfig
        }
      }
    })
    wrapper = shallowMount(CalculatorForm, {
      propsData: {
        ...DEFAULT_PROPS,
        ...props
      },
      store,
      stubs: {
        ValidationProvider: FakeValidationProvider,
        CalculatorSkeleton: true
      },
      methods: {
        submit: jest.fn()
      }
    })

    wrapper.setMethods({ submit: jest.fn() })
  }

  it('Render message when error', () => {
    createComponent({
      storeConfig: {
        getters: {
          message: () => ({ title: 'Ошибка:', description: 'Тестируемая ошибка', type: 'error' }),
          getMessageBlock: () => (['Calculator'])
        }
      }
    })

    expect(wrapper.findComponent(FeAlert).exists()).toBe(true)
  })

  it('Do not render message when no error', () => {
    createComponent({
      storeConfig: {
        getters: {
          message: () => null
        }
      }
    })

    expect(wrapper.findComponent(FeAlert).exists()).toBe(false)
  })

  it('Call init function when options is empty', async () => {
    createComponent({
      calculatorConfig: {
        getters: {
          getFormDynamic: () => []
        }
      }
    })
    await wrapper.vm.$nextTick()

    expect(mockedCalculatorActions.initDefault).toHaveBeenCalled()
    expect(mockedCalculatorActions.initDynamic).toHaveBeenCalled()
  })

  it('Render default options', async () => {
    createComponent({
      calculatorConfig: {
        getters: {
          getDefaultOptions: () => [
            { ...defaultOptions }
          ]
        }
      }
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('#locations').exists()).toBe(true)
  })

  it('Does not call init function when options is not empty and render dynamic form', async () => {
    createComponent({
      calculatorConfig: {
        getters: {
          getDynamicMerged: () => [
            ...dynamicOptionsParams
          ],
          getFormDynamic: () => ({
            ...dynamiOptionsList
          })
        }
      }
    })
    await wrapper.vm.$nextTick()

    expect(mockedCalculatorActions.initDefault).not.toHaveBeenCalled()
    expect(mockedCalculatorActions.initDynamic).not.toHaveBeenCalled()
    expect(wrapper.find('#s').exists()).toBe(true)
  })

  it('Render FeRangeInput by appropriate alias type settings', async () => {
    createComponent({
      calculatorConfig: {
        getters: {
          getDynamicMerged: () => [
            ...dynamicOptionsParams
          ],
          getFormDynamic: () => ({
            ...dynamiOptionsList
          })
        }
      }
    })
    await wrapper.vm.$nextTick()
    const selects = wrapper.findAllComponents(FeRangeInput)
    const entries = dynamicOptionsParams.map((item) => {
      return { alias: item.alias, type: item.type }
    }).filter(w => w.type === 'FeRangeInput')

    entries.forEach((item) => {
      selects.wrappers.filter(w => w.element.__vue__.$attrs.id === item.alias)
    })

    expect(selects).toHaveLength(entries.length)
  })
})

it.todo('<div v-if="sortedDynamicOptions && sortedDynamicOptions.length" class="grid grid-cols-2 gap-4 pb-4">')
it.todo('<template v-if="dynamicOption.type === FeSelect" >')
it.todo('<template v-if="dynamicOption.type === FeRangeInput">')
it.todo('<template v-if="dynamicOption.type === FeSwitch">')

it.todo('@change="handleSelectChange"')
it.todo('@input="onInput"')

/* it('Should set valid input type', () => {})

import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import dynamicOptions from '@/tests/fixtures/dynamicOptions.json'
import Form from '@/components/Calculator/Form.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

it('Should set valid input type', () => {
  // Arrange
  const select = []
  const rangeinput = []

  dynamicOptions.forEach((item) => {
    if (item.type === 'FeSelect') {
      select.push(item)
    }
    if (item.type === 'FeRangeInput') {
      rangeinput.push(item)
    }
  })
  const wrapper = mount(Form, {
    localVue,
    stubs: ['FeAlert']
  })
  // Act

  // Assert
})
 */
