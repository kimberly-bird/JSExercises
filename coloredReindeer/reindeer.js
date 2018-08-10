console.log("yeah generator functions!");

// generator function to attach colors to reindeer
const getColors = function* () {
    let colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter += 1
    }
}

const colorFactory = getColors();

const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    
    // Write a for loop that looks at each reindeer and stores in an empty array
    coloredReindeer = []
    for (let i = 0; i < reindeer.length; i++) {
        let reindeerArray = reindeer[i];
        // pushed to coloredReindeer array
        coloredReindeer.push(reindeerArray);
    }
    
    // Invoke factory function to create reindeer object
    const reindeerFactory = function (name){
        return Object.create (null, {
            "name": {value: name, enumerable: true},
            "color": {value: colorFactory.next().value, enumerable: true}
        })
    }
    // for loop to loop over the objects
    for (let i = 0; i < coloredReindeer.length; i++) {
        let reindeerElement = coloredReindeer[i];
        const reindeerObjects = reindeerFactory(reindeerElement);
        console.log(reindeerObjects);
        
        // innerHTML
        const outputEl = document.getElementById("colored-reindeer")
                // Jared showed me how to code the color here instead of in the HTML
                outputEl.innerHTML += `
                <section style="color: ${reindeerObjects.color}">${reindeerObjects.name}</section>
                `
    }
}
coloredReindeerBuilder();
