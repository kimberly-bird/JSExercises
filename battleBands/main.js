let bandNumber = 0

const takeNumber = function (name) {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
    bandNumber += 1
    return (bandNumber + ". " + name)
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const beat = takeNumber("The Beatles")
console.log(beat)

const blink = takeNumber("Blink 182")
console.log(blink)