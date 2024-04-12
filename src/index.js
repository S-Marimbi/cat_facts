let page = 1;

let paginationEl = document.getElementById("pagination");


let paginationBtns = paginationEl.getElementsByTagName("button");
//console.log(paginationBtns);

paginationBtns[0].addEventListener('click' , goBack);
paginationBtns[1].addEventListener('click' , goForward);


function goBack(){
    console.log("Back");
    if(page = 1) {
        return;
    }
    page = page - 1;
    updatePage();
}

function goForward() {
    console.log("Go Forward");
    page = page + 1;
    updatePage();
}

//To update current page
function updatePage() {
    let span = paginationEl.getElementsByTagName("span")[0];
    span.innerText = page;
}


function getCats(){
    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${page}`, {
    method: "GET",
    contentType: "application/json",
}).then((response) => response.json()).then(function (data){
    console.log(data);
});


}
