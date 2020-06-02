const searchForm = document.getElementById("search-form");
let searchTerm = document.querySelector(".term");
let sortBy = document.querySelector(".sort");
let limit = document.querySelector(".limit");
let displayRow = document.querySelector(".display-section");

// shorten the description of each post
const shortText = (text) => {
  return text.slice(0, 100) + ".....";
};

// display data in the UI
const displayData = (results) => {
  let output = "";
  results.forEach((result) => {
    let post = result.data;
    let image;

    if (post.preview) {
      image = post.preview.images[0].source.url;
    } else {
      image =
        "https://lh3.googleusercontent.com/proxy/b3R0ikQ4TPbwzZXSBeWweCRm6eXPKGtG-TwpuKy4Ooon-inTXcCE0jaoy04B-AocHvggOrWGKe-fkB7Qas7gGMUqtl6_cBdcC21lca133EM6bGU1TW5MgA";
    }

    output += `
        <div class="card">
            <img src="${image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${shortText(post.selftext)}</p>
                <a href=${
                  post.url
                } target="_blank" class="btn btn-sm btn-primary">Read more</a>
                <hr>
                <span class="badge badge-danger">${
                  post.subreddit_name_prefixed
                }</span>
                <span class="badge badge-info">Score: ${post.score}</span>
                <span class="badge badge-warning">Comments: ${
                  post.num_comments
                }</span>
            </div>
        </div>
      `;
  });

  displayRow.innerHTML = output;
};

const search = (event) => {
  event.preventDefault();

  // fetch data from the reddit api
  fetch(
    `http://reddit.com/search.json?q=${searchTerm.value}&sort=${sortBy.value}&limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((data) => displayData(data.data.children))
    .catch((error) => console.log(error));

  // reset form values
  searchTerm.value = "";
  sortBy.value = "relevance";
  limit.value = 5;
};

searchForm.addEventListener("submit", search);
