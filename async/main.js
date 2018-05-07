$(document).ready(function() {

    const outputEl = $("#my-countries")

    $.ajax({
        "url": "countries.json",
        "method": "GET"
    }).then(
        
        function (theCountries) {
            let countryHTMLRepresentations = ""
            theCountries.countries.forEach(country => {
                countryHTMLRepresentations += `
                    <section>
                        <h2>Country: ${country.country}</h2>
                        <p>City: ${country.city}</p>
                        <p>Region: ${country.region}</p>
                        <p>Language: ${country.language}</p>
                    </section>
                `
                
            })

            outputEl.html(countryHTMLRepresentations)
        }
    )


});