                                                 CONDITIONALS IN JAVASCRIPT

-- Control Flow

~ Control flow is the order in which statements are executed in a program. 
~ The default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file.
~ Control structures such as conditionals (if statements and the like) alter control flow by only executing blocks of code if certain conditions are met.
~ These structures essentially allow a program to make decisions about which code is executed as the program runs.


-- Logical Operator ||
The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true. 
If both values are falsy, it returns false.

A	      B	    A || B
false	false	false
false	true	true
true	false	true
true	true	true
//examples-
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false


-- If Statement
An if statement accepts an expression with a set of parentheses:

If the expression evaluates to a truthy value, then the code within its code body executes.
If the expression evaluates to a falsy value, its code body will not execute.
//example
const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}


-- Else Statement
An else block can be added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails.

//example
const isTaskCompleted = false;
if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}


-- Else If Clause
After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy.

//example
const size = 10;
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small


-- Logical Operator &&
The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true.
If one, or both, of the values is falsy, then it returns false.
//examples
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true


-- Logical Operator !
The logical NOT operator ! can be used to do one of the following:
Invert a Boolean value.
Invert the truthiness of non-Boolean values.
//examples
let lateToWork = true;
let oppositeValue = !lateToWork;

console.log(oppositeValue); 
// Prints: false