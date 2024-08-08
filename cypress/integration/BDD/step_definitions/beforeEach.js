beforeEach(function(){ // use it only if we want to use testdata in Cucumber test
    cy.fixture("example").then(function(data){
        this.testdata = data
    })
})