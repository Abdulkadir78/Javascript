// var, let, const

// var
var graduated = false; // Global scope
console.log(graduated);

var x = 10;
if (x == 10) {
  var y = 5; // y can be accessed even outside the conditional
}

console.log(y); // Not an error { because of global scope of var }

// let
let age = 19; // local scope, better than var
console.log(age);

let z = 10;
if (z == 10) {
  let w = 5; // Here w can only be used in the conditional
}
// console.log(w);  // { Error, w is not defined }

//const
const name = "abdulkadir"; // constant value, once declared, cannot be changed
console.log(name);

// name = 'Ak'    //{ Error, cannot reassign to a constant variable}
