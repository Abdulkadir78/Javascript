let fruits = ["apple", "mango", "banana", "grapes"];

// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for each
fruits.forEach((fruit) => {
  console.log(fruit);
});

fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// for in
let person = {
  name: "abdulkadir",
  age: 19,
};

for (const prop in person) {
  console.log(prop); // loops through the properties of the object
}

for (let prop in person) {
  console.log(person[prop]); // to get the values, Note: prop is a string
  // console.log(person.prop);   // this will be undefined
}

// while
let i = 1;
while (i < 5) {
  console.log(i);
  i += 1;
}

// do while
let x = 1;
do {
  console.log(x);
  x += 1;
} while (x < 5);
