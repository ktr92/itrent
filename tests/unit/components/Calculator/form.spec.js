import { merge } from 'lodash'
import { enableAutoDestroy, config, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import vClickOutside from 'v-click-outside'
import FeAlert from '@/components/Fe/Alert.vue'
import FeSelect from '@/components/Fe/Select.vue'
import CalculatorForm from '@/components/Calculator/Form.vue'
import CalculatorSkeleton from '@/components/Calculator/Skeleton.vue'
import { getStoreConfig } from '@/store/index.js'
import { getCalculatorConfig } from '@/store/calculator/index.js'
import { getResultStoreConfig } from '@/store/result/index.js'
import { defaultOptions } from '@/tests/fixtures/defaultOptions.json'
import { dynamicOptionsParams, dynamiOptionsList } from '@/tests/fixtures/dynamicOptions.json'
extend('required', required)
Vue.use(vClickOutside)
config.showDeprecationWarnings = false

Vue.use(Vuex)

describe('CalculatorForm', () => {
  enableAutoDestroy(beforeEach)

  let wrapper
  let mockedCalculatorActions
  let mockedResultActions

  const DEFAULT_PROPS = {
    allowToChange: true
  }
  const defaultStore = getStoreConfig()
  const defaultCalculatorStore = getCalculatorConfig()
  const defaultResultStore = getResultStoreConfig()

  const createComponent = ({ props, storeConfig, calculatorConfig, resultConfig } = {}) => {
    mockedCalculatorActions = Object.fromEntries(
      Object.keys(defaultCalculatorStore.actions).map(key => [key, jest.fn()])
    )

    mockedResultActions = Object.fromEntries(
      Object.keys(defaultResultStore.actions).map(key => [key, jest.fn()])
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
          ...merge(
            {},
            defaultResultStore,
            { actions: mockedResultActions },
            resultConfig
          )
        }
      }
    })
    wrapper = mount(CalculatorForm, {
      propsData: {
        ...DEFAULT_PROPS,
        ...props
      },
      store,
      stubs: {
        SvgIcon: true
      }
    })
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
    const entries = dynamicOptionsParams.map((item) => {
      return { alias: item.alias, type: item.placeholder }
    }).filter(w => w.type === 'FeRangeInput')

    entries.forEach((item) => {
      expect(wrapper.find(`${'#' + item.alias}.fe-rangeinput`).exists()).toBe(true)
    })
  })
  it('Render FeSelect by appropriate alias type settings', async () => {
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
    const entries = dynamicOptionsParams.map((item) => {
      return { alias: item.alias, type: item.placeholder }
    }).filter(w => w.type === 'FeSelect')

    entries.forEach((item) => {
      expect(wrapper.find(`${'#' + item.alias}.fe-select`).exists()).toBe(true)
    })
  })

  it('Show skeleton when loading', () => {
    createComponent({
      calculatorConfig: {
        getters: {
          getFormDynamic: () => []
        }
      }
    })
    expect(wrapper.findComponent(CalculatorSkeleton).exists()).toBe(true)
  })

  it('Update results when RangeInput changes', async () => {
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
    expect(mockedResultActions.getProducts).toHaveBeenCalledTimes(0)
    const input = wrapper.find('#s input')

    input.setValue(100)
    input.trigger('blur')
    await new Promise(resolve => requestAnimationFrame(resolve))
    await wrapper.vm.$nextTick()

    expect(mockedResultActions.getProducts).toHaveBeenCalledTimes(1)
  })

  it('Update results when Select changes', async () => {
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
    expect(mockedResultActions.getProducts).toHaveBeenCalledTimes(0)
    const input = wrapper.findComponent(FeSelect)

    input.vm.$emit('onInput')
    await new Promise(resolve => requestAnimationFrame(resolve))
    await wrapper.vm.$nextTick()

    expect(mockedResultActions.getProducts).toHaveBeenCalledTimes(1)
  })
})
