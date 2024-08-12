type HTMLElementChainable = Cypress.Chainable<JQuery<HTMLElement>>
type NumberChainable = Cypress.Chainable<number>;

export class CartPageTS {
    constructor(){
    }
    
    getCheckoutButtonEl():HTMLElementChainable{
        return cy.contains("Checkout")
    }

    getSubTotalEls():HTMLElementChainable{
        return cy.get("tr td:nth-child(4) strong")
    }

    getTotalEl():HTMLElementChainable{
        return cy.get("h3 strong")
    }

    calculateTotalAmountFromProductList(): NumberChainable{
        let total = 0
        return this.getSubTotalEls().each((el, index, list) => {
            let amount = Number(el.text().split(' ')[1].trim())
            total += Number(amount)
            console.log('total:' + total)
        }).then(() => {
            console.log('final total:' + total)
            return total
        })
    }

    getActualTotalAmount(): NumberChainable{
        return this.getTotalEl().then((el)=>{
            return  Number(el.text().split(' ')[1].trim())
        })
    }
}
