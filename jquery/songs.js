$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const loadedSongs = $("#load-songs")

    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")


    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    loadedSongs.on("click", function (evt) {
        console.log("clicked");

        $.ajax("http://localhost:8080/songs.json")

            /*
            Chain a `.then()` method to the ajax call, and when
            it is complete build a DOM component for each song with
            the following structure. Use the jQuery append() method
            to put an HTML representation of each song the DOM as a
            child component of the .
            
            <section class="song">
            <h1 class="song__title">{Title of song}</h1>
            <section class="song__description">
            Performed by {artist} on the album {album}
            </section>
            </section>
            */

            .then(function (r) {
                const fragment = document.createDocumentFragment()

                const songSection = document.createElement("section")
                songSection.className = "song"
                $(fragment).append(songSection)

                const h1Text = document.createElement("h1")
                h1Text.className = "song__title"
                h1Text.textContent = `${r.songTitle}`
                $(fragment).append(h1Text)

                const songDesc = document.createElement("section")
                songDesc.className = "song__description"
                songDesc.textContent = `Performed by ${r.artist} on the album ${r.album}`
                $(fragment).append(songDesc)

                document.querySelector("#song-list").appendChild(fragment)
            })
    })
})