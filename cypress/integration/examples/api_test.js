/// <reference types="Cypress" />
describe('api test', () => {
    it('simple api test', () => {
       cy.request('POST','http://216.10.245.166/Library/Addbook.php',
        {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcda",
            "aisle":"22758",
            "author":"John foe"
        }).then(function(response){
            expect(response.status).to.equal(200)
            expect(response.body.Msg).to.equal("Book Already Exists")
            expect(response.body).to.have.property("Msg","Book Already Exists")
            // expect(response.body.Msg).to.equal("successfully added")
        })
    })
})