/// <reference types="Cypress" />
describe('intercept test', () => {
    it('only one books in list test', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
        }).as('returnBooks')
        cy.get('.btn-primary').click()
        cy.wait('@returnBooks')
        cy.get('p').should('have.text', 'Oops only 1 Book available')
        
    })
})