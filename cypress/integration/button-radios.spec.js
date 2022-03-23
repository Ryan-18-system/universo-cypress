/// <reference types="cypress"/>
describe('Testando Radio Button', function(){
    it('Deve marcar Homem-Aranha: Sem Volta para Casa',function(){
        cy.visit('/radios')
        cy.get('input[type="radio"][value="spider3"]')
            .click()
            .should('be.checked')
            
    })
})