/// <reference types="Cypress" />
describe('Web components test', () => {
    it('child window test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // remove the 'target' attribute to not open a new tab 
        cy.get("#opentab").invoke("removeAttr", "target").click()

        // tell Cypress to allow interacting to the new domain
        cy.origin('https://www.qaclickacademy.com',()=> {
            cy.get("#navbarSupportedContent a[href='about.html']").click()
            cy.get("#about-page h2").should('contain.text', 'QAClick Academy')
        })
       
    })   
})