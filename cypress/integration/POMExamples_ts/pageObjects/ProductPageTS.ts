type HTMLElementChainable = Cypress.Chainable<JQuery<HTMLElement>>

export class ProductPageTS {
    constructor(){
    }

    getShoppingCartButtonEl(): HTMLElementChainable{
        return cy.get("a.btn-primary")
    }
}
