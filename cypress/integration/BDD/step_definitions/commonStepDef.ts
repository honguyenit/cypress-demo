/// <reference types="Cypress" />

import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {HomePageTS} from "../../POMExamples_ts/pageObjects/HomePageTS"


const homePage = new  HomePageTS()

Given ('I open the home page', function() {
    cy.visit(Cypress.env('baseURL') + "/angularpractice")
})

Given ('I select the shopping page menu', () => {
    homePage.getShopLinkMenuEl().click()
})