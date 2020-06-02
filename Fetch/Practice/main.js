let input = document.querySelector(".numberInput");
let factDiv = document.querySelector(".fact");
let factPara = document.querySelector(".fact-para");
factDiv.style.display = "none";

let getFact = () => {
  if (input.value != "") {
    fetch(
      `http://numbersapi.com/${input.value}?default=No facts for this number`
    )
      .then((response) => response.text())
      .then((data) => {
        factPara.innerText = data;
        factDiv.style.display = "block";
      })
      .catch((error) => console.log(error));
  } else {
    factDiv.style.display = "none";
  }
};

input.addEventListener("input", getFact);
