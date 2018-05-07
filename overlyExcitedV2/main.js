// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // adding 1 to index so 0 skipped
        addIndex = i + 1
        if (addIndex % 3 === 0) {
            // if index is divisible by 3, add ! which increments by one each time the ! is added
            buildMeUp = buildMeUp + theWordArray[i] + "! ".repeat(addIndex/3)
        } else {
            // Concatenate the new word onto buildMeUp
            buildMeUp = buildMeUp + theWordArray[i] + " "
        }
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence)


// challenge for objects
const jestArticle = document.createElement("article")

jestArticle.setAttribute("id", jest.title)

jestArticle.textContent

function changeBookState (anyBookObject, thePropertyToChange) {
    ...
}

const jest = {
    title: "The Infinite Jest",
    author: "David Foster Wallace",
    publishDate: "1 February 1996"
}

const lamb = {
    title: "Lamb: The Gospel According to Biff",
    author: "Christopher Moore",
    publishDate: "25 May 2004"
}