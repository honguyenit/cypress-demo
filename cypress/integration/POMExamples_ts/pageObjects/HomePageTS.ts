type HTMLElementChainable = Cypress.Chainable<JQuery<HTMLElement>>;

export class HomePageTS{
    constructor(){
    }

    getNameInputEl():HTMLElementChainable{
        return cy.get('form [name="name"]:nth-child(2)')
    }

    getEmailnputEl():HTMLElementChainable{
        return cy.get('input[name="email"]')
    }

    getGenderDropdownEl():HTMLElementChainable{
        return cy.get('#exampleFormControlSelect1')
    }

    getBindingDataInputEl():HTMLElementChainable{
        return cy.get("h4 input[name='name']")
    }

    getEntrepreneurRadioEl():HTMLElementChainable{
        return cy.get('#inlineRadio3')
    }

    getShopLinkMenuEl():HTMLElementChainable{
        return cy.get("a[href*='shop']")
    }
}