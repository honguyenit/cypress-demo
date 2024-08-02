/// <reference types="Cypress" />
describe('Web components test', () => {
    it('child window test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#opentab").then(function(el){ // to be able to use jQuery function prop()
            const url = el.prop("href")
            cy.visit(url)

            // tell Cypress to allow interacting to the new domain
            cy.origin(url, ()=>{
                cy.get("#navbarSupportedContent a[href='about.html']").click()
            })

            
        })
       
    })   
})