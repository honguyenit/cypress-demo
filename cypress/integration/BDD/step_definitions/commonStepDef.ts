/// <reference types="Cypress" />

import {Given} from "@badeball/cypress-cucumber-preprocessor"
// import HomePage from "../../POMExamples/pageObjects/HomePage"


// const homePage = new  HomePage()

Given ('I open the home page', function() {
    cy.visit(Cypress.env('baseURL') + "/angularpractice")
})

Given ('I select the shopping page menu', () => {
    cy.log("I select the shopping page menu")
    // homePage.getShopLinkMenuEl().click()
})