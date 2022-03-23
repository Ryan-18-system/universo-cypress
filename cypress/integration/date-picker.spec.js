/// <reference types="cypress"/>


describe('Data picker', function(){
    before(function(){
        cy.visit('/datepicker')
    })
    it('Automatizando datas', function(){

        const date = {
            month: 'mai',
            year: '2002',
            day: '8'
        }
        cy.get('.datetimepicker-dummy-input').click()

        cy.get('.datepicker-nav-month').click()
        cy.contains('.datepicker-months', date.month).click()

        cy.get('.datepicker-nav-year').click()
        cy.contains('.datepicker-years span', date.year).click()
        
        cy.contains('button.date-item', new RegExp("^" + date.day + "$", "g")).click()
    })
})