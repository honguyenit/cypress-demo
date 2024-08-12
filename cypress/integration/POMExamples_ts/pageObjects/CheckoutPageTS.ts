type HTMLElementChainable = Cypress.Chainable<JQuery<HTMLElement>>

export class CheckoutPageTS {
    constructor(){
    }
    
    getDeliveryLocationInputEl():HTMLElementChainable{
        return cy.get('#country')
    }

    getLocationSuggestionEl():HTMLElementChainable{
        return cy.get(".suggestions a")
    }

    getPurchaseButtonEl():HTMLElementChainable{
        return cy.get("input.btn-success")
    }

    getTermConditionCheckboxEl():HTMLElementChainable{
        return cy.get("#checkbox2")
    }

    getCheckoutMessageEl():HTMLElementChainable{
        return cy.get('.alert')
    }
}