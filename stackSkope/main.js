const forest = []

let agriculturalField = [
    {
        "type": "Oak",
        "trees": 9
    },
    {
        "type": "Pine",
        "trees": 12
    },
    {
        "type": "Ash",
        "trees": 6
    },
    {
        "type": "Balsa",
        "trees": 10
    }
]
// Functionality to convert each tree into 4 logs
const cropStackSkope = function () {
    let totalLogs = agriculturalField
    // multiplying each tree by 4
        .map(treeType => treeType.trees * 4)
        //adding all trees together
        .reduce((accumulator, currentValue) =>
        accumulator + (currentValue))    
    
    // Start filling up the 10 available storage containers
    console.log(totalLogs);
}

cropStackSkope();


