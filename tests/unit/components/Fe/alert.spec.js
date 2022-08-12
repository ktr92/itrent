import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Alert from '@/components/Fe/Alert'

const localVue = createLocalVue()
localVue.use(Vuex)

test('Show message in case of error', () => {
  // Arrange
  const state = {
    message: null
  }
  state.message = {
    title: 'Ошибка:',
    description: 'Что-то пошло не так...',
    type: 'error'
  }
  const propsData = {
    type: state.message.type,
    title: state.message.title,
    description: state.message.description
  }
  const wrapper = mount(Alert, {
    localVue,
    propsData,
    stubs: ['SvgIcon']
  })
  // Assert
  expect(wrapper.text().includes('Ошибка:')).toBe(true)
  expect(wrapper.text().includes('Что-то пошло не так...')).toBe(true)
})
