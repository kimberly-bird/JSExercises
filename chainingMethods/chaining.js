console.log("figure it out!");

// Here is how I made each function on it own first, before chaining. 

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

// const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// // sorted in descending order
// integers.sort(function (a, b) {return b-a})
// console.log(integers);

// // remove integers greater than 19
// const less = integers.filter(function numbers (lessThan) {return lessThan < 19})
// console.log(less);

// // Multiply each remaining number by 1.5 and then subtract 1.
// const mult = less.map(function (math) {
//     return (math * 1.5) - 1;
// })
// console.log(mult);

// // Then output (either in the DOM or the console) the sum of all the resulting numbers.
// const sum = mult.reduce((currentTotal, next) => currentTotal + next)

// console.log(sum);


// attempted chaining method part one (this is as far as I got without seeing how Jason chained his)
// const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// // sorted in descending order
// function sorted(a, b) {return b-a};

// // remove integers greater than 19
// function numbers(lessThan) {return lessThan < 19};

// // Multiply each remaining number by 1.5 and then subtract 1.
// function multiplying (math) {return (math * 1.5) - 1;}

// // Then output (either in the DOM or the console) the sum of all the resulting numbers.
// function totalSum (currentTotal, next) {return currentTotal + next}

// const chainedMethod = integers
// .sort(sorted)
// console.log(integers);

// const less = integers.filter(numbers)
// console.log(less);

// const mult = less.map(multiplying)
// console.log(mult);

// const sum = mult.reduce(totalSum)
// console.log(sum);

// final result with the help of Jason :)
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log ( (integers.sort((a, b) => b-a)).filter((lessThan) => lessThan < 19).map((math) => math * 1.5 - 1).reduce((currentTotal, next) => currentTotal + next) )





