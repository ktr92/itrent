import Response from '../fixtures/response.json'

describe('Calculator test', () => {
  beforeEach(() => {
  })

  it('Should show button only after choise product', () => {
    cy.visit('/calculator')
    const testProp = 'quantity_of_parking'
    cy.get(`#${testProp}`).find('input.input').clear().type('50')
    cy.intercept({
      method: 'GET',
      url: '**/api/v2/results/products/*'
    }, Response).as('getProducts')
    cy.wait('@getProducts')
    cy.get('.createbutton').should('have.class', 'disabled')
    cy.get('#productlist-0 > div').click()
    cy.get('.createbutton').should('not.have.class', 'disabled')
    cy.get('#productlist-0 > div').click()
    cy.get('.createbutton').should('have.class', 'disabled')
  })

  it('Create page should open with application form', () => {
    cy.visit('/calculator')
    const testProp = 'quantity_of_parking'
    cy.get(`#${testProp}`).find('input.input').clear().type('50')
    cy.intercept({
      method: 'GET',
      url: '**/api/v2/results/products/*'
    }, Response).as('getProducts')
    cy.wait('@getProducts')
    cy.get('#productlist-0 > div').click()
    cy.get('.createbutton').click()
    cy.contains('Формирование заявки')
  })

  it('All inputs should be required', () => {
    cy.visit('/calculator')
    const testProp = 'quantity_of_parking'
    cy.get(`#${testProp}`).find('input.input').clear().type('50')
    cy.intercept({
      method: 'GET',
      url: '**/api/v2/results/products/*'
    }, Response).as('getProducts')
    cy.wait('@getProducts')
    cy.get('#productlist-0 > div').click()
    cy.get('.createbutton').click()
    cy.get('button#createapplication').should('be.disabled')
    cy.get('#sign-application').click()
    cy.get('button#createapplication').should('be.disabled')
    cy.get('.application-form-wrapper').find('input.fe-input').clear()
    cy.get('button#createapplication').should('be.disabled')
    cy.get('#sign-application').click()
    cy.get('button#createapplication').should('be.disabled')
    cy.get('#form-name input').type('name')
    cy.get('#form-phone input').type('9179999999')
    cy.get('#form-email input').type('email@email.email')
    cy.get('button#createapplication').should('be.disabled')
    cy.get('#sign-application').click()
    cy.get('button#createapplication').should('not.be.disabled')
  })
})
