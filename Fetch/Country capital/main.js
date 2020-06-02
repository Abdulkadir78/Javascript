const search = document.getElementById("search");
let container = document.querySelector(".display-container");
let countries;

// get the data from the json file
let fetchData = () => {
  fetch("capitals.json")
    .then((response) => response.json())
    .then((data) => (countries = data))
    .catch((error) => console.log(error));
};

// search for the entered country
let searchCapital = () => {
  const searchInput = search.value;
  const check = new RegExp([`${searchInput}`], "gi"); // expression to check whether any country names have the entered word
  const capitals = countries.filter((country) => {
    return country.CountryName.match(check);
  });

  // display the matched countries
  let output = "";
  capitals.forEach((capital) => {
    output += `
          <div class="card col-md-9 mx-auto border mb-3 bg-dark">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-dark">
                      <span class="display-4">${capital.CountryName} (${capital.CountryCode})</span>
                      <span class="display-4 ml-3 text-info">${capital.CapitalName}</span>
                      <span class="d-block mt-3 text-warning">latitude: ${capital.CapitalLatitude}, longitude: ${capital.CapitalLongitude}</span>
                  </li>
              </ul>
          </div>`;
  });

  container.innerHTML = output;
  container.style.display = "block";

  if (searchInput == "") {
    output = "";
    container.innerHTML = "";
    container.style.display = "none";
  }
};

window.addEventListener("DOMContentLoaded", fetchData);
search.addEventListener("input", searchCapital);
