let person = {
  firstName: "John",
  lastName: "Smith",

  address: {
    country: "India",
    city: "Mumbai",
  },
};

let {
  firstName,
  lastName,
  address: { country, city },
} = person;
console.log(firstName, lastName, city, country); // John Smith Mumbai India
