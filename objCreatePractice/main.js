// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Consider making the portfolio an object itself (if you are feeling brave, try your hand at a Map())

const financialAdvisor = Object.create({}, {
    // Company (enumerable, writable)
    company: {
        writable: true,
        enumerable: true,
        value: "Joe Shmoe's company"
    },
    // Specialty (enumerable, writable)
    specialty: {
        writable: true,
        enumerable: true,
        value: "specializes in bitcoin"
    },
    // Name (enumerable)
    name: {
        writable: false,
        enumerable: true,
        value: "Joe Shmoe"
    },
    // Portfolio (non-enumerable) - Should display the stocks the advisor currently holds
    portfolio: {
        writable: false,
        enumerable: false,
        value: []
    },
    // Worth (non-enumerable, method)
    worth: {
        writable: false,
        enumerable: false,
        value: function () {
            
            // FOR EACH OPTION
            let totalPortfolioWorth = 0
            this.portfolio.forEach(
                transaction => {
                    if (transaction.trans === "purchased") {
                        totalPortfolioWorth += transaction.price * transaction.quantity
                    }
        
                    if (transaction.trans === "sold") {
                        totalPortfolioWorth -= transaction.price * transaction.quantity
                    }
                }
            )
            return totalPortfolioWorth

            // FOR LOOP OPTION
            // let totalWorth = 0
            // const purchasedStock = financialAdvisor.portfolio.filter(p => p.trans === "purchased")
            // for (let i = 0; i < purchasedStock.length; i++) {
            //     const element = purchasedStock[i];
            //     totalWorth += element.quantity * element.price
            // }

            // const soldStock = financialAdvisor.portfolio.filter(p => p.trans === "sold")
            // for (let i = 0; i < soldStock.length; i++) {
            //     const element = soldStock[i];
            //     totalWorth -= element.quantity * element.price
            // }
            // return totalWorth
        }
    },
    // Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    purchase: {
        writable: false,
        enumerable: false,
        value: function (symbol, quantity, price) {
            const newPurchase = {
                symbol,
                quantity,
                price,
                trans: "purchased"
            }
            return financialAdvisor.portfolio.push(newPurchase)
        }
    },
    // Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    sell: {
        writable: false,
        enumerable: false,
        value: function (symbol, quantity, price) {
            const newSale = {
                symbol,
                quantity,
                price,
                trans: "sold"
            }
            return financialAdvisor.portfolio.push(newSale)
        }
    },
    // update (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    update: {
        writable: false,
        enumerable: false,
        value: function (symbol, quantity, price, trans) {
            this.portfolio.push({
                symbol,
                quantity,
                price,
                trans
            })
        }
    }
})








