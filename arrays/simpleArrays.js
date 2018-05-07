// Practice: Solar System
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planets.forEach(function(element) {
    const planetSection = document.createElement("section")
    planetSection.textContent = element
    planetEl.appendChild(planetSection)
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capitalized = planets.map(function (letter) {
    const cap = letter.charAt(0).toUpperCase() + letter.slice(1)
    const cappedPlanets = document.createElement("section")
    cappedPlanets.textContent = cap
    planetEl.appendChild(cappedPlanets)
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const filteredPlanets = planets.filter(planet => planet.includes("e"))
const filteredSection = document.createElement("section")
filteredSection.textContent = filteredPlanets
planetEl.appendChild(filteredSection)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const reducedWords = words.reduce((a, b) => a + " " + b)
const reducedSection = document.createElement("section")
reducedSection.textContent = reducedWords
planetEl.appendChild(reducedSection)
 