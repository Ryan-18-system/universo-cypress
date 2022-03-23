/// <reference types="cypress"/>
const niceIframe = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}
it('Deve validar o total de seguidores', function(){
    cy.visit('/nice_iframe')
    niceIframe()
        .contains('.FollowerCountText','6,438followers')
        .should('be.visible')
})