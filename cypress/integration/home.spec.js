/// <reference types="cypress"/>
it('deve visitar a home page', function () {
  cy.visit('/')

  cy.title()
    .should('eq', 'Training Wheels | QAninja')

  cy.get('ul.menu-list li a[href^="login"]')
    .should('be.visible')
})
