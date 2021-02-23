// Definition - The optional chaining operator (?.) permits reading the value
// of a property located deep within a chain of connected objects without having to
// explicitly validate that each reference in the chain is valid.
// Basically used to check if an object exists before calling it's properties

// Note: "?." cannot be used if the root object is not declared, but it can be used
// if the root object is undefined.

let employee = {
  age: 35,
  name: {
    firstName: "John",
    lastName: "Doe",
  },
};

// console.log(employee.hobbies[0]); // { Error: Cannot read property '0' of undefined }

console.log(employee.hobbies?.[0]); // undefined
// { "?." checks if the array of hobbies exists before trying to access the value }
// Similar to -
// console.log(employee.hobbies && employee.hobbies[0]);
// Also similar to -
// console.log(employee.hobbies ? employee.hobbies[0] : undefined);

// console.log(vehicle?.name);
// { Error: vehicle is not defined } (See the note part above)
// vehicle object is not declared

let someObject = undefined; // or null
console.log(someObject?.name); // undefined (See the note part above)
// "?." can be used on objects that are explicitly declared undefined or null
