// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(false).to.equal(true)
//     })


//   })


  describe ('Second tesst', () => {
    it('Asssert chech', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()

    })
  })