let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = document.querySelector("#hex");

let button = document.querySelector(".btn");
button.addEventListener("click", changeColor);

function changeColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[generateNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.style.color = hexColor;
  color.textContent = hexColor;
}

function generateNumber() {
  return Math.floor(Math.random() * hex.length);
}
