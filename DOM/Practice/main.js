let addForm = document.getElementById("add");
let ul = document.getElementById("list");
let search = document.getElementById("search");

addForm.addEventListener("submit", submitItem);
ul.addEventListener("click", deleteItem);
search.addEventListener("keyup", searchItem);

function submitItem(event) {
  event.preventDefault();
  let li = document.createElement("li");
  li.className = "list-group-item";
  let input = add.firstElementChild;

  li.appendChild(document.createTextNode(input.value));

  let button = document.createElement("button");
  button.className = "btn btn-sm btn-outline-danger float-right delete";
  button.appendChild(document.createTextNode("X"));
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
}

function deleteItem(event) {
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete?")) {
      let li = event.target.parentElement;
      ul.removeChild(li);
    }
  }
}

function searchItem(event) {
  let findText = event.target.value.toLowerCase();
  let items = ul.getElementsByTagName("li");
  for (const item of items) {
    let itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(findText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
