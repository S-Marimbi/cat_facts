let page = 1;

let paginationEl = document.getElementById("pagination");


let paginationBtns = paginationEl.getElementsByTagName("button");
//console.log(paginationBtns);


let searchBtn = document.getElementById("search-btn");

paginationBtns[0].addEventListener("click", goBack);
paginationBtns[1].addEventListener("click", goForward);

getCatfacts();

searchBtn.addEventListener("click", function(){
    //console.log("search clicked");
    let input = document.getElementById("search-input");

    if (input.value === "") return;

    if (input.vale.length<4) return;

    searchCatfacts(input.value);
});

function goBack() {
  console.log("Back");
  if ((page = 1)) {
    return;
  }
  page = page - 1;
  updatePage();
  getCatfacts();
}

function goForward() {
  console.log("Go Forward");
  page = page + 1;
  updatePage();
  getCatfacts();
}

//To update current page
function updatePage() {
  let span = paginationEl.getElementsByTagName("span")[0];
  span.innerText = page;

  function searchCatfacts(q) {
    if (q === "" || q === null || q === undefined) {
      return;
    }

    fetch(`https://cat-fact.herokuapp.com/facts/random?search=${q}`, 
    {
      method: "GET",
      contentType: "application/json",
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        displayCatfacts(data);
      });
  }
}
function displayCatfacts(data) {
  let divEl = document.getElementById("all-cats");

  for (let i = 0; i < data.length; i++) {
    let cat = data[i];
    console.log(cat);
  }
}

function getCatfacts() {
  fetch(
    `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${page}`,
    {
      method: "GET",
      contentType: "application/json",
    }
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      displayCatfacts(data);
    });
}
