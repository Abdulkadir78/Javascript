let fruits = ["apple", "mango", "banana"];
let vegetables = ["potato", "onion", "capsicum"];

let mix = [...fruits, ...vegetables]; // concatenation
console.log(mix);

let mix2 = [1, 2, ...fruits, 3];
console.log(mix2);

let a = [1, 2, 3, 4, 5];

let [x, y, ...rest] = a;

console.log(x); // 1
console.log(y); // 2
console.log(rest); // 3, 4, 5

let a2 = [...a]; // deep copy
console.log(a2);
