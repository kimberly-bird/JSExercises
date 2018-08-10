// const piggyBank = {
//     "quarters": 22,
//     // "nickels": 454,
//     // "dimes": 23,
//     // "pennies": 353
// }

// let dollarAmount = 0

// for (let key in piggyBank) {
//     dollarAmount += piggyBank[key];

//     for (let key in piggyBank) {
//         dollarAmount = dollarAmount * .25
//     }
// }

const piggyBank = {
    "quarters": [22, .25],
    "nickels": [454, .5],
    "dimes": [23, .10],
    "pennies": [353, .01]
}

let dollarAmount = 0

for (let key in piggyBank) {
    let arrayOfNumbers = piggyBank[key];

    let calcAmount = arrayOfNumbers[0] * arrayOfNumbers[1]
    console.log(calcAmount);
}

