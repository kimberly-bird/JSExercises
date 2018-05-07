// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let i = 1; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// Conjunction Function
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}
conjunction("Master", "Card")



// Mod Squad
const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})
document.querySelector(".show-info").innerHTML += HTMLRepresentation
// remember to add to index.html



// Simon Says
const locations = [[3,3], [1,2], [1,3], [3,4], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
        console.log("This location is invalid")
    }

    else {
        console.log(`There were ${k} locations displayed`)
    }
}



// Lambda Llama
// every time you invoke llamaNamer gives back the same function - it's a pure function
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    // this is an impure function
    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }
    return namer
}
nameMaker = llamaNamer()
console.log(nameMaker())