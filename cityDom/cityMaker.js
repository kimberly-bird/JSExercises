const CityDB = JSON.parse(localStorage.getItem("CityDatabase"))

const cityBodyRef = document.querySelector("#cityBody")

/*
    This function's reponsibility is to generate DOM components
    that are HTML representations of the student data
*/
const cityDomBuilder = (gender) => {

    // Create a block element that will hold three student components
    let row = document.createElement("div")
    // row.className = "cityRow"

    /*
        Iterate over the array of cities in the database that was
        retrieved from localStorage in database.js
    */
    CityDB.cities.forEach(
        (currentCity, monkeyButt) => {

            /*
                When three student components have been added to the
                parent div, append the current div to the top-level
                article and create a new div
            */
            if (monkeyButt !== 0 && row.childNodes.length % 3 === 0) {
                cityBodyRef.appendChild(row)
                row = document.createElement("div")
                // row.className = "cityRow"
            }

            /*
                Only display the cities that are the same gender
                as the argument value. If no value was provided,
                display all cities.
            */
            if (currentCity) {

                // Section first
                const citiesSection = document.createElement("div")
                citiesSection.classList = "bordered city"

                // h2 child component of section
                const cityName = document.createElement("h2")
                cityName.classList = "city__title"
                cityName.textContent = currentCity.name
                citiesSection.appendChild(cityName)

                // image child component of section
                const imageDom = document.createElement('img')
                imageDom.textContent = currentCity.name
                imageDom.src = currentCity.image
                citiesSection.appendChild(imageDom)

                // p child component of section
                const cityYV = document.createElement("p")
                cityYV.classList = "city__yearVisited"
                cityYV.textContent = currentCity.yearVisited
                citiesSection.appendChild(cityYV)

                // ul child component of section
                for (let i = 0; i < currentCity.attractions.length; i++) {
                    for (a in currentCity.attractions[i]) {
                        const cityAtt = document.createElement("li")
                        cityAtt.classList = "city__attractions"
                        cityAtt.textContent = currentCity.attractions[i][a]
                        citiesSection.appendChild(cityAtt)
                    }
                }

                // Append HTML representation of city to the DOM
                row.appendChild(citiesSection)
            }
        }
    )

    // Just in case there are an exact multiple of 3 cities, add the last row
    if (row.childNodes.length) {
        cityBodyRef.appendChild(row)
    }

}

cityDomBuilder()

