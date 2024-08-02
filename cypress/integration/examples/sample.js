/// <reference types="Cypress" />
describe('add to cart test', () => {
    it('add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('CA')
        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4)
        cy.get('@productsLocator').find('.product').eq(0).contains('ADD TO CART').click() // add the 1st item to cart

        cy.get('@productsLocator').find('.product').each((el, index, list)=> {
            const productName = el.find('.product-name').text()
            if(productName.includes('Capsicum')){
                cy.wrap(el).contains('ADD TO CART').click()
            }
        })

        // verify logo text with non-cypress .text() method
        cy.get('.greenLogo').should('have.text', 'GREENKART')
        cy.get('.greenLogo').then(function(logoEl){
            const logoText = logoEl.text()
            cy.log('logoText:' + logoText)
        })

        
    })

    it('do checkout', () =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('CA')
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4)

        // add items to cart
        cy.get('@productsLocator').find('.product').eq(0).contains('ADD TO CART').click() 
        cy.get('@productsLocator').find('.product').each((el, index, list)=> {
            const productName = el.find('.product-name').text()
            if(productName.includes('Capsicum')){
                cy.wrap(el).contains('ADD TO CART').click()
            }
        })

        // do check out
        cy.get('.cart-icon img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()

    })
})



