const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 77, 74, 73]
const grades = {
    "A": 0, 
    "B": 0, 
    "C": 0,
    "D": 0, 
    "F": 0
}


// Displaying grades from the array 
// How many of each grade? Accomplish this with a for..in loop. 

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 91) {
        grades.A++
    } else if (scores[i] >= 81 && scores[i] < 91) {
        grades.B++
    } else if (scores[i] >= 71 && scores[i] < 81) {
        grades.C++
    } else if (scores[i] >= 61 && scores[i] < 71) {
        grades.D++
    } else if (scores[i] <=60) {
        grades.F++
    }
}
console.log(grades)

// What is the lowest score? Sort the array and find out.
// What is the highest score?
for (let i = 0; i < scores.length; i++) {
    scores.sort(function(a, b){return a - b});
    console.log(scores[i]);
    }

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
// Which grade had the fewest students achieve it?

// let currentGradeCount = 0;

for (let key in grades) {
    let currentGradeCount = grades[key];
    
    for (let i = 0; i < scores.length; i++) {

        if (scores[i] < currentGradeCount) {
            currentGradeCount.A++ 
        } 
    }
}
console.log(currentGradeCount);
