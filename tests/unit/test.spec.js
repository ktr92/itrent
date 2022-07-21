
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import calcMutations from '../../store/calculator/mutations'

const localVue = createLocalVue()
localVue.use(Vuex)

test('инициализация значений свойств по умолчанию', () => {
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
})
