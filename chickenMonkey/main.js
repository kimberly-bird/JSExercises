const numbers = Array.from({length: 101}, (x,i) => i)

for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i]
    
    // Take the current number, divide by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey ")
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken ")
    } else {
        console.log(currentNumber)
    }
}