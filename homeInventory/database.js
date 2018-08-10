const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

const myInventory = loadDatabase("HomeInventory")

const inventoryEl = document.querySelector("#my-inventory")

//iterate over keys in an object
for (let type in myInventory){
    //current type holds the array of the type (furniture, etc.)
    const currentTypeArray = myInventory[type]

    // itemInArray holds each item as it loops through
    currentTypeArray.forEach(itemInArray => {
        //create a section
        const itemSection = document.createElement("section")

        //loop over each property in array
        for (let prop in itemInArray){
            //create a p tag to display name, descr, etc
            const pComponent = document.createElement("p")
            //get text value from name key??
            pComponent.textContent = itemInArray[prop]
            //add to section as a child element
            itemSection.appendChild(pComponent)
        }

        // old code to write in long form
        // const locationP = document.createElement("p")
        // locationP.textContent = itemInArray.location
        // itemSection.appendChild(locationP)

        // const descP = document.createElement("p")
        // descP.textContent = itemInArray.description
        // itemSection.appendChild(descP)
        
        //append entire section to the original query selector
        inventoryEl.appendChild(itemSection)
    })
}