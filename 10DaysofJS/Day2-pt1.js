//My solution
function getGrade(score) {
    let grade;
    // Write your code here
    if (score >= 26 ) {
        grade = "A";
    } else if ( 20 < score >= 25 ) {
        grade = "B";
    } else if (15 < score >= 19) {
       grade = "C"; 
    }else if (10 < score <= 14) {
        grade = "D";
    } else if (5 < score >= 9) {
        grade = "E";
    } else {
        grade = "F";
    }
    return grade;
}

