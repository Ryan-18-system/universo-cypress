/// <reference types="cypress"/>

describe('Testando Timeout',function(){
    before(function(){
        cy.visit('/timeout')
    })
    it('Teste 1', function(){
        cy.contains('button', 'Habilita').click()
        
        cy.get('#firstname')
            .should('be.visible')
            .type("RYAN NÓBREGA",{timeout: 7000})
    })
})