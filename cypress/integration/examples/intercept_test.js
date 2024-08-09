/// <reference types="Cypress" />
describe('intercept test', () => {
    it('intercept response test - only one books in list', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
        }).as('returnBooks')
        cy.get('.btn-primary').click()
        // cy.wait('@returnBooks').then(({request,response})=>{
        //         cy.get('tr').should('have.length',response.body.length+1)    
        //     })

        cy.wait('@returnBooks').then((interception)=>{
                cy.get('tr').should('have.length',interception.response.body.length+1)
            })
        
        cy.get('p').should('have.text', 'Oops only 1 Book available')
        
    })

    it('intercept request test - 403', () => {
        const interceptURL = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=tim'

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) =>{
            req.url = interceptURL
            req.continue((res) => {
                // expect(res.statusCode).to.equal(403)
                expect(res.body.length).to.equal(37)
                expect(res.url).to.equal(interceptURL)
                expect(res.body[0].book_name).to.equal("This is API Automation")

            })
        }).as('returnDummyURL')
        cy.get('.btn-primary').click()
        cy.wait('@returnDummyURL')
    })
})