// function without parameters
function hello() {
  console.log("Hello");
}

hello();

// function with parameters
function printName(name) {
  console.log(`Hello ${name}`);
}

printName("abdulkadir");

// function with return
function sum(num1, num2) {
  return num1 + num2;
}

result = sum(3, 4);
console.log(result);

// arrow functions
// without parameters
myfunc = () => {
  console.log("hello");
};

myfunc();

// with parameters
myfunc2 = (name, age) => {
  console.log(`My name is ${name} and my age is ${age}`);
};

myfunc2("ak", 19);
