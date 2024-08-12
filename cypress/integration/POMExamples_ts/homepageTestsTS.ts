/// <reference types="Cypress" />

import { HomePageTS } from "./pageObjects/HomePageTS"
import { ProductPageTS } from "./pageObjects/ProductPageTS"
import { CheckoutPageTS } from "./pageObjects/CheckoutPageTS"
import { CartPageTS } from "./pageObjects/CartPageTS"

before(function(){
    Cypress.config("defaultCommandTimeout",10000)
    cy.fixture("example").then(function(data){
        this.testdata = data
    })
})

describe('Advanced features test TS', () => {
    const homePageTs = new HomePageTS();
    const productPageTS = new ProductPageTS();
    const checkoutPageTS = new CheckoutPageTS();
    const cartPageTS = new CartPageTS();


    it('add to cart test ts', function() {
        cy.visit(Cypress.env('baseURL') + "/angularpractice")
        homePageTs.getNameInputEl().type(this.testdata.name)
        homePageTs.getGenderDropdownEl().select(this.testdata.gender)

        homePageTs.getBindingDataInputEl().should("have.value", this.testdata.name)
        homePageTs.getNameInputEl().should("have.attr", "minlength", "2")
        homePageTs.getEntrepreneurRadioEl().should("be.disabled")

        // select products
        homePageTs.getShopLinkMenuEl().click()
        this.testdata.selectProducts.forEach(function(productName: string){
            cy.selectProductByName(productName)
        })

         // go to the cart page and verrify total amount
         productPageTS.getShoppingCartButtonEl().click()
         cartPageTS.calculateTotalAmountFromProductList().then((calculatedTotal: Number) => {
            cartPageTS.getActualTotalAmount().then((actualTotal: Number)=>{
                 console.log("calculatedTotal: " + calculatedTotal)
                 console.log("actualTotal: " + actualTotal)
                 expect(actualTotal).to.equal(calculatedTotal)
             })
         })
 
         // go to the checkout page and do checkout
         cartPageTS.getCheckoutButtonEl().click()
         checkoutPageTS.getDeliveryLocationInputEl().type('India')
         checkoutPageTS.getLocationSuggestionEl().click()
         checkoutPageTS.getTermConditionCheckboxEl().check({force: true})
         checkoutPageTS.getPurchaseButtonEl().click()
         checkoutPageTS.getCheckoutMessageEl().should("contain.text", "Success! Thank you! Your order will be delivered in next few weeks :-).")


    })
})