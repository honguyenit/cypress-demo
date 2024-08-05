class CartPage {
    getCheckoutButtonEl(){
        return cy.contains("Checkout")
    }

    getSubTotalEls(){
        return cy.get("tr td:nth-child(4) strong")
    }

    getTotalEl(){
        return cy.get("h3 strong")
    }

    calculateTotalAmountFromProductList(){
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

    getActualTotalAmount(){
        return this.getTotalEl().then((el)=>{
            return  Number(el.text().split(' ')[1].trim())
        })
    }
}

export default CartPage