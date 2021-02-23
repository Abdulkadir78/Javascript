function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.number;

Person.prototype.printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let person1 = new Person("abdulkadir", "shekha", 19);
person1.number = 9892;
console.log(person1); // object with firstName, lastName, age and number

person1.printName();
