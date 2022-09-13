/* import Response from '../fixtures/response.json'

describe('Calculator test', () => {
  beforeEach(() => {
  })

  it('Should open calculator page', () => {
    cy.visit('/')
    cy.get('a[href*="/calculator"]')
      .should('be.visible')
      .should('contain.text', 'Калькулятор')
      .first()
      .click()
    cy.get('a[href*="/calculator"]').should('have.class', 'nuxt-link-active')
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

  it('Should get products list', () => {
    cy.visit('/calculator')
    cy.get('#proposal-list').should('contain.text', 'Помещение')
  })

  it('Should display no data', () => {
    cy.visit('/calculator')
    const overparam = 1
    const testProp = 'pwr'

    cy.get(`#${testProp}`).find('input.input').clear().type(overparam)
    cy.get('#proposal-list').should('contain.text', 'По вашим параметрам ничего не найдено')
  })

  it('Should show skeleton while products loading', () => {
    cy.visit('/calculator')
    cy.intercept({
      method: 'GET',
      url: '*api/v2/results/products/*'
    }).as('loading')
    cy.get('#proposal-list').find('.animate-pulse').should('be.visible')
    cy.wait('@loading').then(() => {
      cy.get('#proposal-list .animate-pulse').should('not.exist')
    })
  })
  it('Should show skeleton on products update', () => {
    cy.visit('/calculator')
    const testProp = 'quantity_of_parking'
    cy.get(`#${testProp}`).find('input.input').clear().type('50')

    cy.intercept({
      method: 'GET',
      url: '/api/v2/results/products/*'
    }).as('loading')
    cy.get('#proposal-list').find('.animate-pulse').should('be.visible')
    cy.wait('@loading').then(() => {
      cy.get('#proposal-list .animate-pulse').should('not.exist')
    })
  })

  it('Should show products on mobile', () => {
    cy.visit('/calculator')
    cy.viewport(375, 550)
    cy.intercept({
      method: 'GET',
      url: '*api/v2/results/products/*'
    }, Response).as('getProducts')
    cy.wait('@getProducts')
  })
})
 */
