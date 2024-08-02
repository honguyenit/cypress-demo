/// <reference types="Cypress" />
describe('Web components test', () => {
    it('alert test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       cy.get("[name='courses'] tr td:nth-child(2)").each((el, index, list) => {

        const courseName = el.text()
        if(courseName.includes('Python')){
            cy.get("[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(priceEl){
                const priceText = priceEl.text()
                expect(priceText).to.equal('25')
            })
        }
        
       })
       
    })   
})