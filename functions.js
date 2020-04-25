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