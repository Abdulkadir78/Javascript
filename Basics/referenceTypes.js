// Arrays

let a = [1, 2, 3, 4, 5];

console.log(a[0]);

a[5] = 6; // adding element to the end

console.log(a.length);
a.push(7); // adding element using push

console.log(a.pop()); // removing the last element

a.unshift(0); // add element to the start

console.log(a.indexOf(4));

// Objects

let person = {
  name: "abdulkadir",
  age: 19,
};

console.log(person.age); // getting values using dot operator

console.log(person["name"]); // using brackets

person.isGraduated = false; // adding a property

console.log(person);

// object inside an object
let person2 = {
  name: "john",
  age: 25,

  address: {
    country: "india",
    city: "mumbai",
  },
};

console.log(person2.address);

console.log(person2.address.city); //mumbai
console.log(person2["address"]["city"]); // mumbai
console.log(person2["address"].city); // mumbai
console.log(person2.address["city"]); // mumbai
