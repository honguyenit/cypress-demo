class ProductPage {
    getShoppingCartButtonEl(){
        return cy.get("a.btn-primary")
    }
}

export default ProductPage
