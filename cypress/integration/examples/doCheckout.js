describe ('Demo Cypress test 1', () => {
    it('Navigate to the side', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.get('.search-keyword').type('ca')
        
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            if(productName.includes('Capsicum')){
                cy.wrap($el).contains('ADD TO CART').click() // click Add to Cart of the product 'Capsicum'
            }
        })

        cy.get('.cart-icon > img').click() // Click Shooping Cart button
        cy.contains('PROCEED TO CHECKOUT').click() // Click Process to Cart
        cy.get('button').contains('Place Order').click() // Click Place Order
    })
})