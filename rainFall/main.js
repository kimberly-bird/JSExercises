const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

// collection of data with year "label"
const RainfallDatabase = {
    "1948": [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
    "1949": [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
    "1950": [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
    "1951": [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
    "1952": [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
}

// save something to local storage
// ("name", stringified representation of data)
localStorage.setItem("rainfall", JSON.stringify(RainfallDatabase))

// get rainfall for specific year
const totalRainfall = RainfallDatabase["1951"].reduce((first, second) => {
    return first + second
})

console.log(totalRainfall);

// 1949, every month when it rained more than 6 inches
// get rainfall for specific year. filter given a specific condition --> filter returns a new array
const monthsGreaterThan6 = RainfallDatabase["1949"].filter(
    // rainfall is the argument passed in to the function
    rainfall => {
        if (rainfall > 6.0) {
            return true
            // return rainfall
        }
    }
)
console.log(monthsGreaterThan6);

// find average rainfall for 1950
// add all together then divide by length of array
const averageRainfall = RainfallDatabase["1950"].reduce(
    // fat arrow function with one line of code with return statement
    (total, thisMonth) => total + thisMonth
) / RainfallDatabase["1950"].length

// toFixed returns a string representing the number
// parseFloat brings back a number
console.log(parseFloat(averageRainfall.toFixed(2)));





// code from when rainfallDatabase was an array, not an object
// // Find out how much total rain has fallen over last 10 years
// // reduce - takes a function as an argument (lambda). 
// const allRainfall = RainfallDatabase.reduce(
//     // currentSet and nextSet are arguments for .reduce function
//   function(currentSet, nextSet) {
//       // concat puts currentSet + nextSet into one single array (allRainfall)
//     return currentSet.concat(nextSet)
//   }
// ).reduce(
//     // total = first 2 (already added) + next one (third)
//   function(total, monthlyRainfall) {
//     return total + monthlyRainfall
//   }
// )

// console.log(allRainfall)