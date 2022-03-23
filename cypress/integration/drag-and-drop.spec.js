/// <reference types="cypress"/>
describe('Drag and Drop', function(){
    before(function(){
        cy.visit('/drag_and_drop')

    })
    it('Deve arrastar o cypress para caixa do nodejs', function(){
        const dataTransfer = new DataTransfer()
        cy.get('img.is-rounded[alt="Cypress"]').trigger('dragstart', {dataTransfer})

        cy.get('article.nodejs figure[draggable="true"]').trigger('drop', {dataTransfer})
    })
    it('Deve arrastar o robot para caixa do python', function(){
        const dataTransfer = new DataTransfer()
        cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})

        cy.get('article.python figure[draggable="true"]').trigger('drop', {dataTransfer})
    })
})