let output = $("#textHere")

$.ajax("https://api.github.com/repos/nss-day-cohort-22/movie-history-boundless-chickens/commits").then({
    function(commits) {
        commits.forEach(result => {
            let person = result.commit.author
            let messageFromPerson = result.commit.message
            output.append(`<h2>${person}</h2><br><h2>${messageFromPerson}</h2>`)
        })

    }
})