describe('Calculator test', () => {
  it('Should open calculator page', () => {
    cy.get('a[href*="/calculator"]')
      .should('be.visible')
      .should('contain.text', 'Калькулятор')
      .first()
      .click()

    cy.get('a[href*="/calculator"]').should('have.class', 'nuxt-link-active')
  })
})
