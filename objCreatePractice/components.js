// capitalizes first letter of word in string
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const fragment = document.createDocumentFragment()

for(let key in financialAdvisor) {
    const sectionComponent = document.createElement("section")
    sectionComponent.textContent = `${capitalize(key)}: ${capitalize(financialAdvisor[key])}`

    fragment.appendChild(sectionComponent)
}

const tickers = {}

financialAdvisor.portfolio.forEach(
    transaction => {
        // if key doesn't exist, create the key and give the valuation
        if (!(transaction.symbol in tickers)){
            tickers[transaction.symbol] = transaction.price * transaction.quantity
        } else {
            if (transaction.trans === "purchased"){
                tickers[transaction.symbol] += transaction.price * transaction.quantity
            } 
            if (transaction.trans === "sold") {
                tickers[transaction.symbol] -= transaction.price * transaction.quantity
            }
        }
    }
)

// displays stock value on dom
for (let key in tickers) {
    const sectionComp = document.createElement("section")
    sectionComp.textContent = `I own ${key} stock worth $${tickers[key]}`
    fragment.appendChild(sectionComp)
}

// displays total value on dom
const totalValue = document.createElement("section")
totalValue.textContent = `Total worth $${financialAdvisor.worth()}`
fragment.appendChild(totalValue)

document.querySelector("#output").appendChild(fragment)

console.log(tickers);


