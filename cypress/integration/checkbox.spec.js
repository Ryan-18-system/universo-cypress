/// <reference types="cypress" />
describe('Testando check box', function(){
    it('marcando as 5 checkbox', function(){
        cy.visit('/checkboxes')

        const arraySuper = ["spider3","avengers4","blackpanther","strange","antman"]
        arraySuper.forEach((heroi)=>{
            cy.get(`input[type="checkbox"][name="${heroi}"]`)
                .click()
                .should('be.checked')
        })
        
    })
})