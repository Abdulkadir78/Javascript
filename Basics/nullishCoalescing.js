// Definition - The nullish coalescing operator (??) is a logical operator that
// returns its right-hand side operand when its left-hand side operand is null or
// undefined, and otherwise returns its left-hand side operand.

console.log("" || "user"); // user -> { because "" is a falsy value }

console.log("" ?? "user2"); // "" -> {
// because the nullish coalescing operator only checks for null or undefined
// values and not all falsy values like "" or 0
// }

console.log(0 || 100); // 100 -> { 0 is falsy }

console.log(0 ?? 200); // 0 -> { "??" only checks for null or undefined }

console.log(false ?? "something"); // false -> { "??" does not even check for "false" }
