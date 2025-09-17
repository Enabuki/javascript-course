console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

function logger() {
  console.log("My name is Andrei");
}


logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5,3));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);


// Function Expressions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge(1991);
console.log(age1);

console.log(calcAge(2001));


function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Andrei", "Aseron", 21)); // All good
console.log(introduce("Sarah"));

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); // Using one function inside another!
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}


console.log(yearsUntilRetirement(2004, "Andrei"));

const globalVar = "I am global";

function testScope() {
  // Function scope
  const localVar = "I am local";
  console.log(globalVar); // Can access global
  console.log(localVar); // Can access local
}

testScope();
// console.log(localVar); // Error! Can't access local from outside
console.log(globalVar);



// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) /3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  // Your code here
  // Remember: team needs DOUBLE the score to win
  // Use template literals for nice output
  if (avgDolphins >=2 * avgKoalas) {
    return "Dolphins Win ($(avgDolphins} vs. ${avgKoalas})";
  }
  else if (avgKoalas >=2 * avgDolphins) {
    return "Koalas Win ($(avgKoalas} vs. ${avgDolphin})";
  }
  else {
    return "No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas} ";
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));








