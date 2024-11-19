let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
let runnersAge = 18;
let isAdult = true;

if (runnersAge > 18 && earlyRegistered) {
  raceNumber += 1000;
}
if (runnersAge && earlyRegistered) {
  console.log(`Your race starts at 9:30 am. Your race number is ${raceNumber}`);

} else if (runnersAge && !earlyRegistered) {
  console.log(`Your race starts at 11:00 am. Your race number is ${raceNumber}`)
} else if (runnersAge < 18){
  console.log(`Your race starts at 12:30 pm. Your race number is ${raceNumber}`)
} else {
console.log('Please, see the registration desk')
}

