$(document).ready( () => {

    $.ajax({
        method: "GET",
        url: "names.json"
    }).then(people => {
        let outputEl = ""
        people.students.forEach(person => {
            outputEl += `
                <p>${person.name}</p>
                <p>${person.age}</p>
                <p>${person.color}</p>
            `   
            })
           $("#output").html(outputEl) 
        })

        $("#showColor").click((e) => {
            $.ajax("names.json")
            .then(people => {
                outputEl = ""
            })
        })
})
