let name = "Abdulkadir";
let age = 19;

// Concatenation
console.log("My name is " + name + " and my age is " + age);

// Template strings
console.log(`My name is ${name} and my age is ${age}`); // Using back ticks instead of quotes

// string methods
console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.substring(0, 5)); // Abdul { does not include the last character }

console.log(name.indexOf("k")); // 5

let branches = "comps, mech, it, civil, elex";
console.log(branches.split(", ")); // [ "comps", "mech", "it", "civil", "elex" ]

// and many more
