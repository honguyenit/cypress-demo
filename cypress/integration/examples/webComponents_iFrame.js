/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Web components test', () => {
    it('iframe test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("[href='mentorship']").eq(0).click()
        cy.wait(1000)
        cy.iframe().find(".inner-box h1").should("have.text", "Mentorship")
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)
        
    })   
})