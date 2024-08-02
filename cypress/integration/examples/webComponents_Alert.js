/// <reference types="Cypress" />
describe('Web components test', () => {
    it('checkbox test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#alertbtn').click()
        cy.on('window:alert', (alertMsg)=>{
            expect(alertMsg).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (alertMsg)=>{
            expect(alertMsg).to.equal("Hello , Are you sure you want to confirm?")
        })
       
    })   
})