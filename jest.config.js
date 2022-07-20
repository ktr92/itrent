module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest'
  },
  roots: ['<rootDir>'],
  testMatch: ['**/tests/**/*.spec.js'],
  transformIgnorePatterns: [],
  setupFiles: ['jest-canvas-mock'],
  testEnvironment: 'jsdom'

}
