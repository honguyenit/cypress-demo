class HomePage{
    getNameInputEl(){
        return cy.get('form [name="name"]:nth-child(2)')
    }

    getGenderDropdownEl(){
        return cy.get('#exampleFormControlSelect1')
    }

    getBindingDataInputEl(){
        return cy.get("h4 input[name='name']")
    }

    getEntrepreneurRadioEl(){
        return cy.get('#inlineRadio3')
    }

    getShopLinkMenuEl(){
        return cy.get("a[href*='shop']")
    }

}

export default HomePage