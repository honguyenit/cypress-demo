/// <reference types="Cypress" />

import {Then, Given, When} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../advancedExamples/pageObjects/HomePage"
import ProductPage from "../../advancedExamples/pageObjects//ProductPage"
import CartPage from "../../advancedExamples/pageObjects//CartPage"
import CheckoutPage from "../../advancedExamples/pageObjects//CheckoutPage"


const homePage = new  HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()


Given ('I open the home page', function() {
    cy.visit(Cypress.env('baseURL') + "/angularpractice")
})

Given ('I select the shopping page menu', () => {
    homePage.getShopLinkMenuEl().click()
})

When('I add items to Cart', function(dataTable) {
    // this.testdata.selectProducts.forEach(function(productName){
    //     cy.selectProductByName(productName)
    // })
    cy.selectProductByName(dataTable.rawTable[1][0])
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

// Then('I should see the checkout page showing "{message}"', (message)=>{
//     checkoutPage.getCheckoutMessageEl().should("contain.text", message)
// })

// When('I fill in the form', () => {
//     homePage.getNameInputEl().type(this.testdata.name)
//     homePage.getGenderDropdownEl().select(this.testdata.gender)
// })

// Then('I validate the forms', () => {
//     homePage.getBindingDataInputEl().should("have.value", this.testdata.name)
//     homePage.getNameInputEl().should("have.attr", "minlength", "2")
//     homePage.getEntrepreneurRadioEl().should("be.disabled")
// })