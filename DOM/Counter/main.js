var count = 0;
let number = document.querySelector(".number");

let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
let increaseBtn = document.querySelector(".increase");

decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increase);

const changeColor = () => {
  if (count < 0) {
    number.style.color = "crimson";
  } else if (count > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
};

function decrease() {
  count--;
  changeColor();
  number.textContent = count;
}

function reset() {
  count = 0;
  changeColor();
  number.textContent = count;
}

function increase() {
  count++;
  changeColor();
  number.textContent = count;
}
