// Higher order array functions

let a = [5, 1, 7, 9, 3, 2, 8];

let people = [
  {
    firstName: "john",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "kevin",
    lastName: "smith",
    age: 27,
  },
  {
    firstName: "josh",
    lastName: "zerker",
    age: 35,
  },
  {
    firstName: "Ethan",
    lastName: "payne",
    age: 23,
  },
];

// for each

// print all array elements
a.forEach((number) => console.log(number));

// print name of each person
people.forEach((person) =>
  console.log(`${person.firstName} ${person.lastName}`)
);

// map

// get the square of each element
const aMap = a.map((number) => number ** 2);
console.log(aMap);

// get first name of each person
const peopleMap = people.map((person) => person.firstName);
console.log(peopleMap);

// filter

// get numbers greater than 3
const aFilter = a.filter((number) => number > 3);
console.log(aFilter);

// get people with age greater than 25
const peopleFilter = people.filter((person) => person.age > 25);
console.log(peopleFilter);

// sort

// sort the array in ascending order
const aSort = a.sort((a, b) => a - b);
console.log(aSort);

// sort in ascending order according to the first name
const peopleSort = people.sort((a, b) => {
  if (a.firstName > b.firstName) {
    return 1;
  } else {
    return -1;
  }
});
console.log(peopleSort);

// reduce

// get the total of all array elements
const aReduce = a.reduce((total, number) => (total += number), 0);
console.log(aReduce);

// get the total of everyone's age
const peopleReduce = people.reduce((total, person) => (total += person.age), 0);
console.log(peopleReduce);
