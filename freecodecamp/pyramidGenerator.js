const character = "%";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }


for (let i = 1; i <= count; i++) {
    //rows.push(character.repeat(i + 1))
    rows.push(padRow(i, count));
  }

  // An if statement allows you to run a block of code only when a condition is met
  //A while loop will run over and over again until the condition specified is no longer true

  /**Note that the order of operations rule PEMDAS—Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction—applies): */

  /**A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.

A falsy value is the opposite - a value considered false when evaluated as a boolean. 
JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN */

  let result = ""

  for (const row of rows) {
    result = result + row + "\n";
  }
  
  console.log(result);



  /**Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a reference error.
   * Var declared outside a block or fxn is global scope
   */

  

  /**while (rows.length < count) {
        rows.push(padRow(rows.length + 1, count));
  }
  */


  // Reverse of the pyramid using  FOR LOOP

  for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
    console.log(rows);
  }

  /*The .unshift() method of an array allows you to add a value to the beginning of the array, 
  unlike .push() which adds the value at the end of the array. .unshift() returns the new length of the array it was called on.
  const numbers = [1, 2, 3];


const unshifted = numbers.unshift(5);
console.log(unshifted); // 4
  */

  /*Arrays also have a .shift() method. This will remove the first element of the array, 
  unlike .pop() which removes the last element
  */

//Shuffling btw inverted and normal pyramid 
let inverted = true;
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
