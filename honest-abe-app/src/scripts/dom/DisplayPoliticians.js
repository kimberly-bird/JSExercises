// Purpose: Display HTML representations of all politicians in API
const APIManager = require("../api/APIManager")
const $ = require("jquery")

const politicianList = function () {
    // Get the politicians
    APIManager.getAllPoliticians()
        .then(allPoliticians => {
            // Iterate over animal list
            allPoliticians.forEach(politician => {
                // Build HTML representation for each one
                //  ensure purchase button is on representation
                $("#politician-list").append(
                    `
                <div class="catalogItem" id="${politician.id}">
                    <section>
                        ${politician.name}
                    </section>
                </div>
                `
                )
            })
        })
}


module.exports = politicianList