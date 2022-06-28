import { extend } from 'vee-validate'

extend('isCurrencyValid', {
  message: 'Значение должно быть числовым',
  validate: (value) => {
    value = value.replace(/\s/g, '')
    if (isNaN(value)) {
      return false
    }
    return true
  }
})

extend('currencyBetween', {
  message: 'Значение должно быть между 1000 и 100000000000',
  validate: (value, [min, max]) => {
    value = Number(value.replace(/\s/g, ''))
    if (value >= min && value <= max) {
      return true
    }
    return false
  }
})

extend('dateBigger', {
  message: 'Значение не должно быть меньше 1900г',
  validate: (value, [dateMin]) => {
    value = value.split('.').reverse().join('-')

    const prevDate = new Date(value)
    if (prevDate) {
      dateMin = new Date(dateMin)
      if (!prevDate || prevDate.getUTCFullYear() < dateMin.getUTCFullYear()) {
        return false
      }
      return true
    }
    return false
  }
})

extend('dateLessCurrent', {
  message: 'Значение не должно быть больше текущей даты',
  validate: (value) => {
    value = value.split('.').reverse().join('-')
    const prevDate = new Date(value)
    const currentDate = new Date()
    if (!prevDate || prevDate.getTime() > currentDate.getTime()) {
      return false
    }
    return true
  }
})
