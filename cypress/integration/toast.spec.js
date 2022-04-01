/// <reference types="cypress"/>
describe('Testando Toast', function(){
    it('deve exibir uma notificação toast', function(){
        cy.visit('/toaster')
        cy.contains('button','Toast Rápido').click()
        cy.get('div.notification')
            .should('be.visible')
            .should('have.text', 'Essa notificação é muito rápida!')    
        
    })

})