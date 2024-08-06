/// <reference types="Cypress" />

import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"
import CartPage from "./pageObjects/CartPage"
import CheckoutPage from "./pageObjects/CheckoutPage"

describe('Advanced features test', () => {
    const homePage = new  HomePage()
    const productPage = new ProductPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    before(function(){
        Cypress.config("defaultCommandTimeout",10000)
        cy.fixture("example").then(function(data){
            this.testdata = data
        })
    })

    it('add to cart test', function() {
        
        // visit home page
        cy.visit(Cypress.env('baseURL') + "/angularpractice")
        homePage.getNameInputEl().type(this.testdata.name)
        homePage.getGenderDropdownEl().select(this.testdata.gender)

        homePage.getBindingDataInputEl().should("have.value", this.testdata.name)
        homePage.getNameInputEl().should("have.attr", "minlength", "2")
        homePage.getEntrepreneurRadioEl().should("be.disabled")

        // select products
        homePage.getShopLinkMenuEl().click()
        this.testdata.selectProducts.forEach(function(productName){
            cy.selectProductByName(productName)
        })

        // go to the cart page and verrify total amount
        productPage.getShoppingCartButtonEl().click()
        cartPage.calculateTotalAmountFromProductList().then((calculatedTotal) => {
            cartPage.getActualTotalAmount().then((actualTotal)=>{
                console.log("calculatedTotal: " + calculatedTotal)
                console.log("actualTotal: " + actualTotal)
                expect(actualTotal).to.equal(calculatedTotal)
            })
        })

        // go to the checkout page and do checkout
        cartPage.getCheckoutButtonEl().click()
        checkoutPage.getDeliveryLocationInputEl().type('India')
        checkoutPage.getLocationSuggestionEl().click()
        checkoutPage.getTermConditionCheckboxEl().check({force: true})
        checkoutPage.getPurchaseButtonEl().click()
        checkoutPage.getCheckoutMessageEl().should("contain.text", "Success! Thank you! Your order will be delivered in next few weeks :-).")

    })
})