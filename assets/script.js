//console.log(passhash);
var apikey = "324637569c8fda463203df55e0b15edc";
<<<<<<< HEAD

var d = new Date();
var dstr = d.getTime();
var pub = "324637569c8fda463203df55e0b15edc";
var pri = "e0fd8fcb37f122d05eec3fe26aa303e32453c601";
var combinedStr = dstr + pri + pub;
var passhash = CryptoJS.MD5(combinedStr).toString();
//console.log(combinedStr, passhash);
=======
>>>>>>> f2158260e5a1e4872fba7d5042240d63e9d38d21

var d = new Date();
var dstr = d.getTime();
var pub = "324637569c8fda463203df55e0b15edc";
var pri = "e0fd8fcb37f122d05eec3fe26aa303e32453c601";
var combinedStr = dstr + pri + pub;
var passhash = CryptoJS.MD5(combinedStr).toString();
//console.log(combinedStr, passhash);

var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${dstr}&apikey=${apikey}&hash=${passhash}`;

var secondapikey = "6813105332038237";

var secondurl = `https://www.superheroapi.com/api.php/6813105332038237/search/${name}`;

      fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((json) => {
          console.log(json);
        });

fetch(secondurl)

  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

  fetch(secondurl)
  .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });

<<<<<<< HEAD
  function toggleActiveState() {
      this.classList.toggle('active');
  }
  var btns = document.querySelectorAll('.btn');
  [].forEach.call(btns, function(btn) {
    btn.addEventListener('click', toggleActiveState, false);
    
  });
  

//    () => {
     // var character = document.getElementById('search').value
    //  fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${dstr}&apikey=${apikey}&hash=${passhash}` + results +"results")
   //   .then(res=> res.json())
// .then(result=> console.log("result", result))

   //function for show heros depends on search also filter heros depends on key press
