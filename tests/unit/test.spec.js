
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import calcMutations from '../../store/calculator/mutations'
import calcActions from '../../store/calculator/actions'
import calcGetters from '../../store/calculator/getters'
import calcState from '../../store/calculator/state'
import Form from '../../components/Calculator/Form'
const localVue = createLocalVue()
localVue.use(Vuex)

/* test('инициализация значений свойств по умолчанию', () => {
  const state = {
    dynamicOptionsParams: [],
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
}) */
describe('MyComponent.vue', () => {
  let actions
  let getters
  let state
  let store
  beforeEach(() => {
    actions = {
      sampleAction: jest.fn()
    }
    getters = {
      sampleGetter: jest.fn()
    }
    state = {
      sampleState: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        calculator: {
          namespaced: true,
          actions: { ...calcActions },
          getters: { ...calcGetters },
          mutations: { ...calcMutations },
          state: { ...calcState }
        }
      }
    })
  })

  it('вывод свойств по умолчанию', () => {
    const wrapper = mount(Form, {
      store,
      localVue
    })
    expect(wrapper.vm.defaultOptions).toHaveLength(0)
  })
})
