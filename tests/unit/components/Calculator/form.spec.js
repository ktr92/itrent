import { merge } from 'lodash'
import { enableAutoDestroy, config, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import FeAlert from '@/components/Fe/Alert.vue'
import CalculatorForm from '@/components/Calculator/Form.vue'
import { getStoreConfig } from '@/store/calculator/index.js'
import { getResultStoreConfig } from '@/store/result/index.js'

config.showDeprecationWarnings = false

Vue.use(Vuex)

describe('CalculatorForm', () => {
  enableAutoDestroy(beforeEach)

  let wrapper
  let mockedActions

  const DEFAULT_PROPS = {
    allowToChange: true
  }

  const createComponent = ({ props, storeConfig } = {}) => {
    const defaultStore = getStoreConfig()

    mockedActions = Object.fromEntries(
      Object.keys(defaultStore.actions).map(key => [key, jest.fn()])
    )

    const store = new Vuex.Store({
      modules: {
        calculator: {
          namespaced: true,
          ...merge(
            defaultStore,
            { actions: mockedActions },
            storeConfig
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
      stubs: ['CalculatorSkeleton', 'FeSwitch', 'FeSelect', 'FeRangeInput', 'ValidationObserver', 'ValidationProvider', 'SvgIcon'],
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
          message: () => ({ title: 'Ошибка:', description: 'Тестируемая ошибка', type: 'error' })
        }
      }
    })
    expect(wrapper.find(FeAlert).exists()).toBe(true)
  })

  it('Do not render message when no error', () => {
    createComponent({
      storeConfig: {
        getters: {
          message: () => null
        }
      }
    })
    expect(wrapper.find(FeAlert).exists()).toBe(false)
  })
})

it.todo(' <template v-if="defaultOptions && defaultOptions.length">')
it.todo('  <component :is="defaultOption.type" v-if="showLocation"')
it.todo('   <div v-if="optionsReady">')
it.todo('  <div v-if="sortedDynamicOptions && sortedDynamicOptions.length" class="grid grid-cols-2 gap-4 pb-4">')
it.todo('<template v-if="dynamicOption.type === FeSelect" >')
it.todo('<template v-if="dynamicOption.type === FeRangeInput">')
it.todo('<template v-if="dynamicOption.type === FeSwitch">')

it.todo('@change="handleSelectChange"')
it.todo(' @input="onInput"')

it.todo('FeRangeInput :attr')
it.todo('FeSelect :attr')
it.todo('<ValidationProvider :name')
it.todo('component :is="defaultOption.type" :attr')

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
