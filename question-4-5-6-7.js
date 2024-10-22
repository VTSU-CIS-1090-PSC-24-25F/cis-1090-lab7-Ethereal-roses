
//❓❓ LAB QUESTION 4:
//Below this line, fill in the array named "assignments" with the string values
//from question one in the lab.

let assignments = ["Lab 1", "Lab 2", "Mid Term", "Lab 3", "Project", "Final Exam"];


//❓❓ LAB QUESTION 5:
//Below this line, declare an array named "grades" with the numeric values
//from question one in the lab.

let grades = [90, 80, 78, 81, 91, 89]


//❓❓ LAB QUESTION 6:
//Below this line, declare an array named "grades" with the numeric values
//from question one in the lab.
console.log("Grades:");
for ( let i = 0; i < assignments.length; i++ ){
    console.log(assignments[i], grades[i]);
}


//❓❓ LAB QUESTION 7:
//Calculate the average grade and print it out:

let sum = 0;

for(i=0;i<grades.length;i++){
    sum += grades[i];
}

sum = sum/grades.length;
console.log(sum);

