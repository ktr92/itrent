import Response from '../fixtures/response.json'

describe('Calculator test', () => {
  beforeEach(() => {
  })
  /*  it('Should open calculator page', () => {
    cy.visit('/')
    cy.get('a[href*="/calculator"]')
      .should('be.visible')
      .should('contain.text', 'Калькулятор')
      .first()
      .click()
    cy.get('a[href*="/calculator"]').should('have.class', 'nuxt-link-active')
  })
  it('Should set default options', () => {
    cy.visit('/')
    cy.get('.calculator__select-region')
      .should('be.visible')
      .should('contain.text', 'Регион недвижимости')
      .click()
    cy.get('.calculator__select-region .fe-select-list__item-text')
      .should('contain.text', 'Москва')
  })
  it('Should get dynamic options from JSON', () => {
    cy.visit('/')
    cy.request({
      method: 'GET',
      url: 'https://rent3.gitlab.io/frontend/rent-options/options.json'
    }).then((response) => {
      expect(response.body).to.have.property('dynamicOptionsParams').to.be.a('array')
      response.body.dynamicOptionsParams.forEach((item) => {
        expect(item).to.have.property('alias')
        expect(item).to.have.property('type')
        expect(item).to.have.property('sort')
        expect(item).to.have.property('name')
        expect(item).to.have.property('initial')
        if (item.type === 'FeSelect') {
          expect(item).to.have.property('limit')
        }
        if (item.type === 'FeRangeInput') {
          expect(item).to.have.property('max')
          expect(item).to.have.property('min')
          expect(item).to.have.property('units')
          expect(item).to.have.property('caption')
          expect(item).to.have.property('step')
        }
        if (item.offers) {
          expect(item.offers).to.be.a('array')
          item.offers.forEach((offer) => {
            expect(offer).to.have.property('label')
            expect(offer).to.have.property('value')
          })
        }
      })
    })
  })
  it('Should set valid input type', () => {
    const select = []
    const rangeinput = []
    cy.visit('/calculator')
    cy.request({
      method: 'GET',
      url: 'https://rent3.gitlab.io/frontend/rent-options/options.json'
    }).then((response) => {
      response.body.dynamicOptionsParams.forEach((item) => {
        if (item.type === 'FeSelect') {
          select.push(item)
        }
        if (item.type === 'FeRangeInput') {
          rangeinput.push(item)
        }
      })
      cy.get('.calculator-form-wrapper.md-sticky')
        .find('.fe-select')
        .should('have.length', select.length + 1) // плюс кол-во select свойств по умолчанию (не динамических)

      cy.get('.calculator-form-wrapper.md-sticky')
        .find('.fe-rangeiput')
        .should('have.length', rangeinput.length + 0) // плюс кол-во rengeinput свойств по умолчанию (не динамических)
    })
  })

  it('Should get select type option values', () => {
    cy.visit('/calculator')
    const testProp = 'population'
    if (Response.data.items.find(item => item.properties.find(i => i.alias === testProp))) {
      cy.get(`#${testProp}`)
        .find('.fe-select__placeholder')
        .should('be.visible')
        .should('contain.text', 'Населенность')
      cy.get(`#${testProp}`).click()
      cy.get(`#${testProp}`).find('.fe-select-list__item-text')
        .should('contain.text', 'средненаселенный')
    } else {
      cy.get(testProp).should('be.empty')
    }
  })
  it('Should be within limits', () => {
    cy.visit('/calculator')

    function formatValue (value) {
      return `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    }

    cy.request({
      method: 'GET',
      url: 'https://rent3.gitlab.io/frontend/rent-options/options.json'
    }).then((response) => {
      response.body.dynamicOptionsParams.forEach((item) => {
        if (item.type === 'FeRangeInput') {
          const min = item.min - 1
          const max = item.max + 1

          cy.get(`#${item.alias}`).find('input.input').clear().type(min)
          cy.wait(2100)
          cy.get(`#${item.alias}`).find('input.input').should('have.value', formatValue(item.min))

          cy.get(`#${item.alias}`).find('input.input').clear().type(max)
          cy.wait(2100)
          cy.get(`#${item.alias}`).find('input.input').should('have.value', formatValue(item.max))

          cy.get(`#${item.alias}`).find('input.input').clear().type(min).blur()
          cy.get(`#${item.alias}`).find('input.input').should('have.value', formatValue(item.min))

          cy.get(`#${item.alias}`).find('input.input').clear().type(max).blur()
          cy.get(`#${item.alias}`).find('input.input').should('have.value', formatValue(item.max))
        }
      })
    })
  }) */

  it('Should get products list', () => {
    cy.visit('/calculator')
    const testProp = 'quantity_of_parking'
    cy.get(`#${testProp}`).find('input.input').clear().type('50')
    cy.get('#proposal-list').should('contain.text', 'Пятёрочка')
  })

  it('Should display no data', () => {
    cy.visit('/calculator')
    let overparam = 3000
    const testProp = 'quantity_of_parking'
    Response.data.items.forEach((item) => {
      if (item.properties.find(i => i.alias === testProp)) {
        const prop = item.properties.find(i => i.alias === testProp).values[0].value
        const minProp = Number(prop.substr(0, prop.indexOf(':')))
        if (minProp < overparam) {
          overparam = minProp
        }
      }
    })

    overparam -= 1
    cy.get(`#${testProp}`).find('input.input').clear().type(overparam)
    cy.get('#proposal-list').should('contain.text', 'По вашим параметрам ничего не найдено')
  })

  it('Should update by input change', () => {
    cy.visit('/calculator')
    const testProp = 'quantity_of_parking'
    cy.get(`#${testProp}`).find('input.input').clear().type('50')

    cy.intercept({
      method: 'GET',
      url: '**/api/v2/results/products/*'
    }, {}).as('updateRequest')

    cy.wait('@updateRequest').its('request.url').should('include', 'filters[properties][quantity_of_parking]=50')
  })

  // cy.intercept('GET', '/should-err', { forceNetworkError: true }).as('err')
})
