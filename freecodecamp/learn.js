
// 1. Define a variable called userName and set it to an empty string
 let userName = prompt("What's your name?"); // Enter your name here if desired, e.g., 'Jane'

// 2. Ternary expression to greet the user
console.log(userName ? `Hello, ${userName}!` : 'Hello!');

// 3. Create a variable named userQuestion
let userQuestion = 'Will I become a successful programmer?';

// 4. Log the user's question
console.log(`${userName ? userName + ' asks, ' : ''}"${userQuestion}"`);

// 5. Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// 6. Create a variable named eightBall and set it to an empty string
let eightBall = '';

// 7. Assign Magic Eight Ball responses based on randomNumber using a switch statement
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Error';
}

console.log(`Sire AI: "${eightBall}"`);


/*
// Import readline module
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for the user's name
rl.question("What's your name? ", (userName) => {
  console.log(userName ? `Hello, ${userName}!` : 'Hello!');

  // Ask for the user's question
  rl.question("What question would you like to ask the Magic Eight Ball? ", (userQuestion) => {
    console.log(`${userName ? userName + ' asks, ' : ''}"${userQuestion}"`);

    // Generate a random number between 0 and 7
    let randomNumber = Math.floor(Math.random() * 8);

    // Create a variable named eightBall and set it to an empty string
    let eightBall = '';

    // Assign Magic Eight Ball responses based on randomNumber using a switch statement
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break;
      case 1:
        eightBall = 'It is decidedly so';
        break;
      case 2:
        eightBall = 'Reply hazy try again';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Outlook not so good';
        break;
      case 7:
        eightBall = 'Signs point to yes';
        break;
      default:
        eightBall = 'Error';
    }

    // Display the Magic Eight Ball's response
    console.log(`Sire AI: "${eightBall}"`);

    // Close the input interface
    rl.close();
  });
});

*/