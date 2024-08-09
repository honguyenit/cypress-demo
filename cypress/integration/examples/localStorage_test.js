/// <reference types="Cypress" />
describe('local storage test', () => {
    it('skip login page with token in local storage', () => {
        cy.GetLoginTokenAndSetToEnv().then(function(){
            cy.log("token: " + Cypress.env('token'))
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.contains('Automation Practice').should('be.visible') // check if it skips the login page and is in the home page

        cy.get('div .fa-shopping-cart').eq(1).click() // add to cart
        cy.get('.btn-custom .fa-shopping-cart').click() // go to shopping cart
        cy.get('h1').contains('My Cart').should('be.visible') 
    })
})