///<reference types="cypress"/>

describe('Testando SweetAlert2', function(){
    it('Deve clicar no botão verde',function(){
        cy.visit('/sweet_alert')
        cy.get('button.is-primary').click()
        cy.get('div.swal-title').should('have.text', 'Tudo certo!')

    })
    it('Deve clicar no botão vermelho', function(){
        cy.visit('/sweet_alert')
        cy.get('button.is-danger').click()
        cy.get('div.swal-title').should('have.text', 'Deu Ruim!')
    })
})