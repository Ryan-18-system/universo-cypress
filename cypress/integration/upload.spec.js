/// <reference types="cypress"/>
describe('Upload de fotos', function(){
    before(function(){
        cy.visit('/upload')
    })
    it('Teste 1', function(){
        const imageFile = 'cypress/fixtures/teste.jpg'
        cy.get('input[name=file]').selectFile(imageFile, {force:true})

        cy.get('#file-submit')
            .click()
        
        cy.get('.is-rounded', {timeout:6000}).should('be.visible')
    })
})