/// <reference types="Cypress" />

import {Then, Given, When} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../POMExamples/pageObjects/HomePage"
import ProductPage from "../../POMExamples/pageObjects/ProductPage"
import CartPage from "../../POMExamples/pageObjects/CartPage"
import CheckoutPage from "../../POMExamples/pageObjects/CheckoutPage"


const homePage = new  HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

When('I add items to Cart', function(dataTable) {
    const products = dataTable.rawTable.slice(1).map(row => row[0]); //slice() removes the header row, then map() creates an array of product names
    products.forEach(product => {
        cy.selectProductByName(product);
    });
})

When('I add more items from testdata to Cart', function() {  
    this.testdata.selectProducts.forEach(function(productName){
        cy.selectProductByName(productName)
    })
})

When('I go to the shopping cart page', ()=>{
    productPage.getShoppingCartButtonEl().click()
})

Then('I should see the sum of items price is equal to the total amount', ()=>{
    cartPage.calculateTotalAmountFromProductList().then((calculatedTotal) => {
        cartPage.getActualTotalAmount().then((actualTotal)=>{
            console.log("calculatedTotal: " + calculatedTotal)
            console.log("actualTotal: " + actualTotal)
            expect(actualTotal).to.equal(calculatedTotal)
        })
    })
})

When('I do checkout', () => {
    cartPage.getCheckoutButtonEl().click()
    checkoutPage.getDeliveryLocationInputEl().type('India')
    checkoutPage.getLocationSuggestionEl().click()
    checkoutPage.getTermConditionCheckboxEl().check({force: true})
    checkoutPage.getPurchaseButtonEl().click()
})

Then('I should see the checkout page showing {string}', (message) => {
    checkoutPage.getCheckoutMessageEl().should("contain.text", message)
})

When('I fill in the form', function(dataTable) {
    homePage.getNameInputEl().type(dataTable.rawTable[1][0])
    cy.log("gendar to select: " + dataTable.rawTable[1][1])
    homePage.getGenderDropdownEl().select(dataTable.rawTable[1][1])
})

When('I fill in the form with name {string} and gender {string}', function(name, gender) {
    homePage.getNameInputEl().type(name)
    homePage.getGenderDropdownEl().select(gender)
})

Then('I should see the binding input shows the name {string}', function(bindingName){
    homePage.getBindingDataInputEl().should("have.value", bindingName)
})

Then('I validate the forms', () => {
    homePage.getNameInputEl().should("have.attr", "minlength", "2")
    homePage.getEntrepreneurRadioEl().should("be.disabled")
})

When('I fill in the form with name {string} and email {string}', function(name, email) {
    homePage.getNameInputEl().type(name)
    homePage.getEmailnputEl().type(email)
})

When('I should see the form shows name {string} and email {string}', function(name, email) {

    homePage.getNameInputEl().should('have.value', name)
    homePage.getEmailnputEl().should('have.value', email)
})