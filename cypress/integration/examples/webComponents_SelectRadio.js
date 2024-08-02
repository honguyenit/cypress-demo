/// <reference types="Cypress" />
describe('Web components test', () => {
    it('checkbox test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // check/uncheck checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('[type="checkbox"]').check(['option2', 'option3'])

        // static select
        cy.get('select').select('option3').should('have.value','option3')
        
        // dynamic select
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='India'){
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', "India")

        // radio
        cy.get('[value="radio2"]').check().should('be.checked')

        // hide/show
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


    })

       
})