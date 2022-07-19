describe('Calculator test', () => {
  beforeEach(() => {
  })
  /* RENT-1 */
  it('Should open calculator page', () => {
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
})
