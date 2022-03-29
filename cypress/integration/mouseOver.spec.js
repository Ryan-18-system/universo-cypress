/// <reference types="cypress"/>

describe('Hovers', function(){
    it('Ao passar o Mouse sobre a imagem, deve mostrar o nome da tecnologia', function(){
        cy.visit('/hovers')

        const techs = [
            {locator: 'img[src*="python"]', tag: '.tag-python', brand: 'Python'},
            {locator: 'img[src*="golang"]', tag: '.tag-golang', brand: 'Golang'},
            {locator: 'img[src*="nodejs"]', tag: '.tag-nodejs', brand: 'Node.js'},
            {locator: 'img[src*="netcore"]', tag: '.tag-netcore', brand: '.NETCore'},

        ]

        techs.forEach((tech)=>{
            cy.get(tech.locator)
                .realHover('mouse')
            cy.get(tech.tag)
                .should('be.visible')
                .should('have.text', tech.brand)
        })
        
    })
})