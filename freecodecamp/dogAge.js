// myAge = real human age.
const myAge = 30;

// new variable of yrs.
let earlyYears = 2;
earlyYears *= 10.5;

// laterYears equals myAge minus 2.
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Here, earlyYears and laterYears are added
let myAgeInDogYears = earlyYears + laterYears;

// myName stores name in lowercase using a method.toLowerCase()
let myName = "Sire".toLowerCase();

// Using backticks (`) for string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);