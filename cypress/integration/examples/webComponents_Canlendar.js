/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Web components test', () => {
    it('calendar test', () => {

        const selectMonth = "9"
        const selectDay = "10"
        const selectYear = "2026"
        const expectedDateComponents = [selectMonth,selectDay,selectYear]

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label__labelText').click() // back to month
        cy.get('.react-calendar__navigation__label__labelText').click() // back to year

        // select year
        cy.get('button').contains(selectYear).click()

        // select month
        cy.get('.react-calendar__year-view__months__month').eq(Number(selectMonth)-1).click()

        // select day
        cy.get('button abbr').each((el, index, list) => {
            if(el.text() === selectDay){
                cy.wrap(el).click()
            }
        })

        // assert
        cy.get(".react-date-picker__inputGroup input:visible").each((el, index, list)=>{
            expect(el.val()).to.equal(expectedDateComponents[index])
        })
    })   
})