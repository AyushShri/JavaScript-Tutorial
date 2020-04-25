                                                         Functions
-- Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value. 
Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

The example code provided contains a function that takes in 2 values and returns the sum of those numbers.

// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9


-- Function Parameters
Inputs to functions are known as parameters when a function is declared or defined.
 Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. 
 Note: It is possible to define a function without parameters.

// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}


-- Function Declaration
Function declarations are used to create named functions. These functions can be called using their declared name.
 Function declarations are built from:
-The function keyword.
-The function name.

An optional list of parameters separated by commas enclosed by a set of parentheses ().
A function body enclosed in a set of curly braces {}.
function add(num1, num2) {
  return num1 + num2;
}


-- Calling Functions
Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs.
 Arguments are values passed into a function when it is called.

// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function
sum(2, 4); // 6


-- return Keyword
Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword, in which case the function will return undefined by default.

// With return
function sum(num1, num2) {
  return num1 + num2;
}

// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

