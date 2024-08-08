class CheckoutPage {
    getDeliveryLocationInputEl(){
        return cy.get('#country')
    }

    getLocationSuggestionEl(){
        return cy.get(".suggestions a")
    }

    getPurchaseButtonEl(){
        return cy.get("input.btn-success")
    }

    getTermConditionCheckboxEl(){
        return cy.get("#checkbox2")
    }

    getCheckoutMessageEl(){
        return cy.get('.alert')
    }
}

export default CheckoutPage