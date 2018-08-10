// const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))
// const inventoryEl =  document.getElementsByClassName("inventory")[0]

// // Loop over keys in the database
// for (let key in HomeInventory) {
//     // Get a reference to the array of objects
//     const currentType = HomeInventory[key]

//     // Loop over the array of objects
//     for (var i = 0; i < currentType.length; i++) {
//         // Current item in the array
//         var item = HomeInventory[key][i]

//         // Build a string to insert into the DOM
//         inventoryEl.innerHTML += `
//         <section class="${item.type}">
//             <h2>${item.name}</h2>
//             <div>${item.location}</div>
//             <div>${item.description}</div>
//         </section>
//         `
//     }
// }


const barCart = {
    "name": "Bar Cart",
    "type": "furniture",
    "location": "Living Room",
    "description": "This bar cart was made by my husband using reclaimed wood from an old fence."
}

const woodenStatue = {
    "name": "Wooden Statue",
    "type": "art",
    "location": "Living Room",
    "description": "This statue was my great-grandfather's. He bought it in Mexico in the 50s. His maid refused to dust it because she thought it was innapropriate. "
}

const cathedralPainting = {
    "name": "Cathedral Painting",
    "type": "art",
    "location": "Living Room",
    "description": "This painting was created by my great-grandfather in the 50s. I have a photo of my grandmother in front of the cathedral when she was a teenager."
}

let furniture = []
let art = []

art.push(cathedralPainting)
furniture.push(barCart)
art.push(woodenStatue)

let HomeInventory = {
    "furniture": furniture,
    "art": art
}

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventory, "HomeInventory")
