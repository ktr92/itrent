import Response from '../fixtures/response.json'

describe('Calculator test', () => {
  beforeEach(() => {
  })

  it('Should show products on mobile', () => {
    cy.visit('/calculator')
    cy.viewport(375, 550)
    cy.intercept({
      method: 'GET',
      url: '**/api/v2/results/products/*'
    }, Response).as('getProducts')
    cy.wait('@getProducts')
  })
})
