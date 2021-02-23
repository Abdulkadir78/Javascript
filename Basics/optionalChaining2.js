// Optional chaining operator can also be used to check if functions exist before calling them.

// Example 1 -
let vehicle = {
  printModel() {
    console.log("Model S");
  },
};

vehicle.printModel?.(); // Model S

// Example 2 -
let person = {};

// Not using "?." -
// console.log(person.printName()); // { Error: person.printName is not a function }

// Using "?."
person.printName?.(); // does nothing { "?." checks if a method exists before calling it }

// Example 3 - (using with bracket notation)
let employee = {};

console.log(employee?.["name"]); // undefined
