let arrayOfPeeps = ["Jess", "Jake", "Deanna", "Will", "Paul", "Ronnie", "Johnny", "Kyle", "Meg", "Kimmy"]

// for loop to iterate over array and log each name
for (let i = 0; i < arrayOfPeeps.length; i++) {
    // element will hold "Jess" the first time through this loop
    const element = arrayOfPeeps[i];
    console.log(element);
}

// for each method on array to log each name
arrayOfPeeps.forEach(function(name) {
    console.log(name)
  });

  // object
let hipsterThings = {
    food: "tacos",
    shoes: "birks",
    car: "bike"
}

// for in loop to iterate over the keys in the object
for (let key in hipsterThings) {
    // key = the key in the object ("food", for example)
    // hipster[key] = the value in the key in the object ("tacos", for example)
    console.log(`The key is: ${key}. and the value is: ${hipsterThings[key]}`)
    
}

// factory function to create a new user
function createUser (username, password) {
    return {
        username,
        password
    }
}

// giving the "raw goods" (username and password) and get the "cooked" version back (object)
console.log(createUser("joe shmoe", "1234"))