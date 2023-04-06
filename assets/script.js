//function for show heros depends on search also filter heros depends on key press
const showCorrespondingHeros = () => {
  const xhr = new XMLHttpRequest();
  const name = document.getElementById("name").value;

  // IN CASE OF ERROR
    xhr.onerror = function() {
    document.getElementById("characterSection").innerHTML = '<h2 id="characterMainTitle">An error has occured, check connection.</h2>';
  }
  // INCASE OF NO ERROR load
  xhr.onload = function(){
    var responseJSON = JSON.parse(xhr.response);
    console.log(responseJSON);
    // const characterAttributes = responseJSON.results;
    let html = "";
    html += "<div class='row'>";
      if (responseJSON.response == "success") {
        responseJSON.results.forEach((element) => {
          html += `
          <div class="col-4" style = "margin-top = 50rem;">
            <div class="card" style="width: 25rem;">
              <img class="card-img-top" onclick="showDetails(${element.id})" src="${element.image.url}">
              <div class="card-body">
                  <span> <h5 class="card-title" onclick="showDetails(${element.id})">${element.name}`+
                  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                  +`<i id="${element.id}" class="fa-solid fa-plus icon" onclick="addFavourite(${element.id})" style:"align-items: right; cursor:pointer"></i></h5></span>
              </div>
            </div>
          </div>    `
         // console.log(responseJSON.results.length);
    
        });
      }
      document.getElementById("cards-group").innerHTML = html;
  }

      xhr.open("GET", `https://www.superheroapi.com/api.php/586069776286026/search/${name}`, true);

      xhr.send();
}

// INCASE OF LOAD END
xhr.onloadend = function() {
  document.getElementById("characterSpinnerSection").innerHTML = '<strong id="spinnerText" class="text-success">done</strong>';
}

xhr.open("GET", `https://gateway.marvel.com/v1/public/characters?${params}&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a`, true);

xhr.send();
}

//COMICS SECTION
function comics(characterID) {
const xhr = new XMLHttpRequest();
var id = characterID;

//LOAD START OF COMICS SECTION 
xhr.onloadstart = function () {
document.getElementById("comicsSpinnerSection").innerHTML =
'<strong id="spinnerText" class="text-danger">Loading comics below...</strong>' +
'<div class="spinner-border text-danger ml-auto" role="status" ' +
'aria-hidden="true" id="spinner"></div>';
}
//IN CASE OF ERROR
xhr.onerror = function () {
document.getElementById("characterSection").innerHTML =
'<h2 id="characterMainTitle">An error has occured, check connection.</h2>';
document.getElementById("comicSection").innerHTML =
'<h2 id="characterMainTitle">An error has occured, check connection.</h2>';
}

// ON LOAD SECTION
xhr.onload = function(){
var responseJSONcomic = JSON.parse(xhr.response);
// console.log(responseJSONcomic.data.results);

// IF THE COUNT IS 0 MEANS NO DATA AVAILABLE
if (responseJSONcomic.data.count === 0) {
document.getElementById("characterSection").innerHTML =
  '<h2 id="characterMainTitle"><span style="font-weight:bold;">No results for... ' +
  name + "</span>" + ". Try again.</h2>";

document.getElementById("characterSpinnerSection").innerHTML = "";
document.getElementById("comicsSpinnerSection").innerHTML = "";

}
// IF SOMETHING WRONG WRITTEN IN THE INPUT
else if (responseJSONcomic == undefined || responseJSONcomic.length == 0) {
document.getElementById("characterSection").innerHTML =
  '<h2 id="characterMainTitle">' +
  "An error might have occured on our end, Sorry. <br>In this case, try again later.</h2>";

document.getElementById("characterSpinnerSection").innerHTML = "";
document.getElementById("comicsSpinnerSection").innerHTML = "";

} 
// IF EVERYTHING IS FINE
else{
  // comics available
  const results = responseJSONcomic;
  let comics = responseJSONcomic.data.results;
  let comicSection = document.getElementById("comicSection");
  let output = "",
    creators = "";
  
    output += '<h2 id="comicMainTitle" >Comics</h2>' + '<div class="card-columns">';

  for (const i in comics) {
    if (comics.hasOwnProperty(i)) {
      const comic = comics[i];

      output +=
        '<div class="card">' +
        '<a href=""><img src="' +
        comic.thumbnail["path"] +
        "." +
        comic.thumbnail["extension"] +
        '" class="card-img-top" alt="' +
        comic.title +
        '"></a>' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +
        comic.title +
        "</h5>";

      if (comic.description != null) {
        output +=
          '<p style="font-size: 12px;" class="card-text">' +
          comic.description +
          "</p>";
      }

      output +=
        '<p style="font-size: 12px;" class="card-text text-muted">Characters: ';

      for (const k in comic.characters.items) {
        if (comic.characters.items.hasOwnProperty(k)) {
          const character = comic.characters.items[k];
          output += character.name.concat(", ");
        }
      }

      output += "</p>";
      output +=
        '<p style="font-size: 12px;" class="card-text text-muted">Creators: ';

      for (const j in comic.creators.items) {
        if (comic.creators.items.hasOwnProperty(j)) {
          const creator = comic.creators.items[j];

          output += creator.name.concat(" (" + creator.role + "), ");
        }
      }

      output += "</p>";
      output +=
        "</div>" +
        '<div class="card-footer">' +
        '<small style="line-height: 1;" class="text-muted">' +
        results["attributionText"] +
        "</small>" +
        "</div>" +
        "</div>";
    }
  }

  output += "</div>";

  comicSection.innerHTML = output;
}
}

// IF LOADING.. IS DONE
xhr.onloadend = function() {
document.getElementById("comicsSpinnerSection").innerHTML =
'<strong id="spinnerText" class="text-success"></strong>';
}
// ON ERROR
xhr.onerror = function () {
document.getElementById("characterSection").innerHTML =
'<h2 id="characterMainTitle">An error has occured, check connection.</h2>';
document.getElementById("comicSection").innerHTML =
'<h2 id="characterMainTitle">An error has occured, check connection.</h2>';
}

xhr.open("GET", `https://gateway.marvel.com/v1/public/characters/${id}/comics?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a`, true);

xhr.send();

}  