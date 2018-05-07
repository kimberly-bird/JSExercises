// factory generator to pull a unique id for button
const IdGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}

let gen = IdGenerator()

const outputEl = document.getElementById("outputHere")

// saves the text that is input into the texbox
function onKeyUp (evt) {
    const textEntered = document.getElementById("keypress-input").value
    let currentId = gen.next().value
    outputEl.innerHTML += `
    <section class="cardStyling" id="section_${currentId}">
    <div>${textEntered}</div>
    <button id="button_${currentId}">Delete</button>
    </section>
    `
}

// element id
const buttonClicked = document.getElementById("button")

// when button is clicked creates new card element
buttonClicked.addEventListener("click", onKeyUp)

// delete section - trying to comment this out to see if I'm on the right track
// event listener that is waiting for a click button
outputEl.addEventListener("click", function(event){
    // if the button that's clicked starts with "button_"
    if (event.target.id.startsWith("button_")) {
        // this splits the "button_" at the "_" character 
        const currentNum = event.target.id.split("_")[1]
        // cardEl is storing the number from the split
        const cardEl = document.getElementById("section_" + currentNum)
        // removes the section that contains the card
        outputEl.removeChild(cardEl)
    }
})

