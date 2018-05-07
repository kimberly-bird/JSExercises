let person = {
    "firstName": "Kimmy",
    "lastName": "Bird",
    "age": 32,
    "fullName": function (first, last) {
            return first + " " + last
    },
    "birthday": function (day) {
        return day + 1
    }   
}
// return value must be stored in a value or it will just return but not be held anywhere
// when a function returns a value, always create a const to store the returned value
let entry = person.fullName("steve", "brownlee")
let anotherEntry = person.fullName(person.firstName, person.lastName)
console.log(entry)
console.log(anotherEntry)

// updates the key value "age" to add one year. invoke again if you want to increase by one again. Passing raw data of 32 at "age", extracting it, and reassigning it to a new value (rather than just outputting a new number, this overwrites the original raw value)
let birthdayValue = person.birthday(person.age)
person.age = birthdayValue
console.log(person.age)

// iteration
let numbers = [1,2,3,4,5]
let colors = ["red", "blue", "green", "orange", "yellow"]

// for loop that is doing the steps a certain number of times. not iterating over the array. .forEach will iterate over each item in an array because it is a method that is performed on an array
let iteratingArrays = (theArray) => {
    for (let i = 0; i < theArray.length; i++) {
        let element = theArray[i];
        console.log(element)
    }
}
// these can't be const because they don't return anything, so there isn't anything for the variable to hold
iteratingArrays(numbers)
iteratingArrays(colors)

// for each option
let functionArray = (theArray) => {
    theArray.forEach(
        function (currentItem) {
            console.log(currentItem)
        }
    )
}
functionArray(numbers)
functionArray(colors)


// for (let i = 0; i < colors.length; i++) {
//     let colorsEl = colors[i];
//     console.log(colorsEl)
// }









