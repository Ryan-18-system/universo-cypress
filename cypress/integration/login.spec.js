/// <reference types="cypress"/>





describe('Login de Acesso', function(){
    it('Deve acessar a página', function(){
        cy.visit('/')
        cy.get("ul.menu-list")
            .should('be.visible')
    })

    it('Acessar página de lógin',function(){
        cy.get('ul.menu-list li a[href^="lo"]')
            .click()
        cy.get("form.box[name='login'] h1.title")
            .should('have.text', 'Formulário de Login')
    })
    it('Preenchendo campos', function(){
        cy.get('input.input#nickId')
            .should('be.visible')
            .type('papitorocks')
        cy.get('input.input[name="password"]')
            .should('be.visible')
            .type('pwd123')
        cy.get('.button.is-link[type="submit"]')
            .should('be.visible')
            .click()
    })
    it('Checando efetuação de login', function(){
       
        cy.get('.title')
            .should('have.text', "Olá Papito, bem-vindo ao Orkut")
    })
})