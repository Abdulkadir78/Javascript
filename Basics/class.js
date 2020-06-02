class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hobbies = ["gaming", "sports"];
  }

  printName() {
    console.log(this.firstName + " " + this.lastName);
  }

  printHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(hobby);
    });
  }
}

// creating an object
person1 = new Person("abdulkadir", "shekha", 19);
person1.printName();
person1.printHobbies();
