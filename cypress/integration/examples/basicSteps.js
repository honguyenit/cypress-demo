describe ('Demo Cypress test 1', () => {
    it('Navigate to the side', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4)
        cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            if(productName.includes('Capsicum')){
                // cy.wrap($el).find('button').click()
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        cy.get('.greenLogo').should('have.text','GREENKART')

        cy.get(".greenLogo").then(function (logoEl){
            const logoText = logoEl.text()
            cy.log(logoText)
        })

        
    })
})