// // // console.log("Part 2: Functions ready!");

// // // // Functions - Declarations and Expressions
// // // console.log("=== FUNCTIONS ===");

// // // function logger() {
// // //   console.log("My name is Andrei");
// // // }


// // // logger();
// // // logger();
// // // logger();


// // // function fruitProcessor(apples, oranges) {
// // //   console.log(apples, oranges);
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }

// // // console.log(fruitProcessor(5,3));

// // // const appleJuice = fruitProcessor(5, 0);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // console.log(appleOrangeJuice);


// // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);


// // // // Function Expressions
// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // };

// // // const age1 = calcAge(1991);
// // // console.log(age1);

// // // console.log(calcAge(2001));


// // // function introduce(firstName, lastName, age) {
// // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //   return introduction;
// // // }

// // // console.log(introduce("Andrei", "Aseron", 21)); // All good
// // // console.log(introduce("Sarah"));

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //   const age = calcAge(birthYear); // Using one function inside another!
// // //   const retirement = 65 - age;

// // //   if (retirement > 0) {
// // //     return `${firstName} retires in ${retirement} years`;
// // //   } else {
// // //     return `${firstName} has already retired!`;
// // //   }
// // // }


// // // console.log(yearsUntilRetirement(2004, "Andrei"));

// // // const globalVar = "I am global";

// // // function testScope() {
// // //   // Function scope
// // //   const localVar = "I am local";
// // //   console.log(globalVar); // Can access global
// // //   console.log(localVar); // Can access local
// // // }

// // // testScope();
// // // // console.log(localVar); // Error! Can't access local from outside
// // // console.log(globalVar);



// // // // Coding Challenge #1

// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //   return (score1 + score2 + score3) /3;
// // // }

// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   // Your code here
// // //   // Remember: team needs DOUBLE the score to win
// // //   // Use template literals for nice output
// // //   if (avgDolphins >=2 * avgKoalas) {
// // //     return "Dolphins Win ($(avgDolphins} vs. ${avgKoalas})";
// // //   }
// // //   else if (avgKoalas >=2 * avgDolphins) {
// // //     return "Koalas Win ($(avgKoalas} vs. ${avgDolphin})";
// // //   }
// // //   else {
// // //     return "No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas} ";
// // //   }
// // // }

// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // // Arrays - Creation and Access
// // console.log("=== ARRAYS ===");

// // // Array creation
// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // // Different data types in same array
// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // // Alternative way (but literal notation is preferred)
// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);



// // console.log(friends[0]); 
// // console.log(friends[1]); 
// // console.log(friends[2]); 

// // // Array length property
// // console.log(friends.length); 

// // // Get the last element
// // console.log(friends[friends.length - 1]); 

// // // Changing array elements
// // friends[1] = "Jay";
// // console.log(friends); 


// // const firstName = "Jonas";
// // const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// // console.log(jonas);

// // // Using our calcAge function from Hour 1
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // console.log(ages);


// // Array Methods - Adding Elements

// // const friends = ["Michael", "Steven", "Peter"];

// // Push - add to end
// const newLength = friends.push("Jay");
// console.log(friends); 
// console.log(newLength); 

// // Unshift - add to beginning
// friends.unshift("John");
// console.log(friends); 

// // Pop - remove from end
// const popped = friends.pop();
// console.log(popped); 
// console.log(friends);

// // Shift - remove from beginning
// const shifted = friends.shift();
// console.log(shifted); 
// console.log(friends); 

// // Finding Elements
// // IndexOf - find position of element
// console.log(friends.indexOf("Andrei")); 
// console.log(friends.indexOf("Jeff")); 

// // Includes - check if element exists
// console.log(friends.includes("Andrei")); 
// console.log(friends.includes("Jeff"));


// const friends = ["Michael", "Steven", "Peter"];

// // Traditional for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// // For loop with processing
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);


// // forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });


// // Real-world example - grade processing
// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// // Calculate average grade
// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// // Count passing students (grade >= 70)
// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);


// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  // Your code here
  // Hint: Sum all grades, divide by length
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  // Your code here
  // Hint: Start with first grade, compare with each subsequent grade
  let highest = grade[0];
  for (let i = 1; i < grades.length; i++){
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  // Your code here
  // Hint: Similar to highest, but use < comparison
  let lowest = grade[0];
  for (let i = 1; i < grades.length; i++){
    if (grades[i] > lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}


// Function to count passing students
function countPassing(grades, passingGrade) {
  // Your code here
  // Hint: Counter pattern - increment when condition is met
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  return count;
}
}


// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);





