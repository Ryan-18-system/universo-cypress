/// <reference types="cypress"/>

describe("Usando ComboBox", function(){
    before(function(){
        cy.visit('/select')
    })
    
    it('testando select', function(){
        const arraySuper = ['Steve Rogers', 'Bucky', 'Tony Stark', 'Natasha Romanoff', 'Bruce Banner', 'Loki', 'Scott Lang']

        arraySuper.forEach((heroi)=>{
            cy.contains('option', 'Selecione um personagem')
                .parent()
                .select(`${heroi}`)
                .should('have.value', `${arraySuper.indexOf(heroi)+1}`)
        })
    })
    
})