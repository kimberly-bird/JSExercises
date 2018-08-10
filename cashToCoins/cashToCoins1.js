console.log("count those coins!");

const dollarAmount = 7.94
const piggyBank = {
    "pennies": 0,
    "nickles": 0,
    "dimes": 0,
    "quarters": 0
}

const coinFactory = function(totalCoins) {
    
    //convert to 100
    let remainder = Math.round(dollarAmount * 100)
    
    //how many times divisible by 25? 
    let numQuarters = Math.floor(remainder/25)
    // send value to piggybank "quarters"
    piggyBank.quarters = numQuarters
    //get remainder of coins
    remainder -= numQuarters * 25 
    
    //how many times divisible by 10?
    let numDimes = Math.floor(remainder/10)
    // send value to piggybank "dimes"
    piggyBank.dimes = numDimes
    //get number of dimes
    remainder -= numDimes * 10
    
    //how many times divisible by 5?
    let numNickles = Math.floor(remainder/5)
    // send value to piggybank "nickles"
    piggyBank.nickles = numNickles
    //get remainder of coins
    remainder -= numNickles * 5
    
    //how many times divisible by 1?
    let numPennies = Math.floor(remainder/1)
    // send value to piggybank "pennies"
    piggyBank.pennies = numPennies

    console.log(piggyBank);

}

coinFactory();