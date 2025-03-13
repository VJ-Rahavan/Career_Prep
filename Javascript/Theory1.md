1. What are the different data types in JavaScript?
   Answer: JavaScript has seven primitive data types and one non-primitive data type:

Primitive Types:

String
Number
Boolean
Undefined
Null
BigInt
Symbol
Non-Primitive Type: 8. Object (including Arrays, Functions, Dates, etc.)

2. What is the difference between let, const, and var?

Answer:

Feature var let const
Scope Function-scoped Block-scoped Block-scoped
Hoisting Hoisted (initialized with undefined) Hoisted (but not initialized) Hoisted (but not initialized)
Reassignment ✅ Allowed ✅ Allowed ❌ Not allowed
Redeclaration ✅ Allowed ❌ Not allowed ❌ Not allowed

Example:

var a = 10;
let b = 20;
const c = 30;

3. What is the difference between == and === in JavaScript?

Answer:

== (loose equality) checks only values and performs type coercion if needed.
=== (strict equality) checks both value and type.

Example:

console.log(5 == "5"); // true (type coercion happens)
console.log(5 === "5"); // false (different types)

4. What is a closure in JavaScript?

Answer: A closure is a function that retains access to variables from its outer lexical scope even after the outer function has finished executing.

Example:

function outerFunction(outerVariable) {
return function innerFunction(innerVariable) {
console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
};
}
const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World

5. Explain the difference between null and undefined?

Answer:

Feature null undefined
Meaning Absence of value (intentional) Variable declared but not assigned
Type Object (typeof null → "object") Undefined (typeof undefined → "undefined")

Example:

let a; // undefined
let b = null; // explicitly set to null

6. What is event delegation in JavaScript?

Answer: Event delegation is a technique where a parent element handles events of its child elements using event bubbling.

Example:

document.getElementById("parent").addEventListener("click", function (event) {
if (event.target.tagName === "BUTTON") {
console.log(`Button ${event.target.textContent} clicked`);
}
});

7. What is the difference between synchronous and asynchronous JavaScript?

Answer:

Synchronous JavaScript: Code executes line by line, blocking further execution until the current operation completes.
Asynchronous JavaScript: Code executes without blocking, allowing other operations to continue.
Example:

console.log("Start");
setTimeout(() => console.log("Async Operation"), 2000);
console.log("End");

// Output:
// Start
// End
// Async Operation (after 2 seconds)

8. Explain the this keyword in JavaScript?

Answer:

this refers to the execution context of a function.
Its value depends on how the function is called.

Context this Refers To
Global Scope window (in browser) or global (in Node.js)
Object Method The object itself
Function (Strict Mode) undefined
Arrow Function Lexical this (inherits from parent)
Example:

const obj = {
name: "Vijay",
greet() {
console.log(this.name);
},
};
obj.greet(); // Output: Vijay

9. What is the difference between map(), filter(), and reduce()?

Method Description

map() Transforms each element of an array and returns a new array
filter() Returns a new array containing elements that satisfy a condition
reduce() Reduces an array to a single value
Example:

const numbers = [1, 2, 3, 4];

// map: Multiply each number by 2
console.log(numbers.map(num => num \* 2)); // [2, 4, 6, 8]

// filter: Keep only even numbers
console.log(numbers.filter(num => num % 2 === 0)); // [2, 4]

// reduce: Sum of all numbers
console.log(numbers.reduce((acc, num) => acc + num, 0)); // 10

10. What are promises and how do they work?

Answer: A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

States of a Promise:

Pending – Initial state
Fulfilled – Operation completed successfully
Rejected – Operation failed

Example:

const myPromise = new Promise((resolve, reject) => {
setTimeout(() => resolve("Success!"), 2000);
});

myPromise
.then((result) => console.log(result)) // Success!
.catch((error) => console.log(error));

11. What is async/await in JavaScript?

Answer: async/await is syntax sugar over Promises, making asynchronous code look synchronous.

Example:

async function fetchData() {
try {
let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
let data = await response.json();
console.log(data);
} catch (error) {
console.log(error);
}
}
fetchData();

12. Explain call(), apply(), and bind() methods in JavaScript.

Answer: These methods are used to explicitly set the value of this in a function.

Method Usage

call() Calls a function with a given this value and arguments individually
apply() Calls a function with a given this value and arguments as an array
bind() Returns a new function with this permanently bound
Example:

const person = { name: "Vijay" };

function greet(age) {
console.log(`Hello ${this.name}, Age: ${age}`);
}

greet.call(person, 25); // Hello Vijay, Age: 25
greet.apply(person, [25]); // Hello Vijay, Age: 25
const boundFunc = greet.bind(person);
boundFunc(25); // Hello Vijay, Age: 25
