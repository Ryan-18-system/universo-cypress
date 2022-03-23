/// <reference types="cypress"/>

describe('Testando select através do span', function(){
    before(function(){
        cy.visit('/apps/select2/index.html')
    })
    it('select único', function(){
        cy.get('.select2-selection--single').click()
        cy.contains('.select2-results__option', 'Cypress').click()
    })
    it('Deve selecionar múltiplas opções', function(){

        const frameworks = ['Cypress', 'Robot Framework', 'Selenium Webdriver', 'WebdriverIO', 'Nightwatch.js', 'Playwright', 'Protractor']
        frameworks.forEach((frame)=>{
            cy.get('.select2-selection--multiple').click()
            cy.contains('.select2-results__option', `${frame}`).click(0)
        })
        // cy.get('.select2-selection--multiple').click()
        // cy.contains('.select2-results__option', 'Cypress').click()
        // cy.get('.select2-selection--multiple').click()
        // cy.contains('.select2-results__option', 'Robot Framework').click()
    })
})