/// <reference types="Cypress" />
describe('Web components test', () => {
    it('alert test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       cy.get('.mouse-hover-content').invoke('show')
       cy.get('.mouse-hover-content').contains('Top').click()
    //    cy.get('.mouse-hover-content').contains('Top').click({force: true})
       cy.url().should('contain','top')
       
    })   
})