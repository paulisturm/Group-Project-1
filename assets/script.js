//console.log(passhash);
      var apikey = "324637569c8fda463203df55e0b15edc";

      var d = new Date();
      var dstr = d.getTime();
      var pub = "324637569c8fda463203df55e0b15edc";
      var pri = "e0fd8fcb37f122d05eec3fe26aa303e32453c601";
      var combinedStr = dstr + pri + pub;
      var passhash = CryptoJS.MD5(combinedStr).toString();
      //console.log(combinedStr, passhash);


      var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${dstr}&apikey=${apikey}&hash=${passhash}`

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

          function character() {
            // SO THAT THE URL CAN HAVE THE NAME INPUT AND ITS VALUE
            let urlQueryParameters = new URLSearchParams(window.location.search),
              queryParameterName = urlQueryParameters.get("name"),
              name = document.getElementById("name").value;
           
            if (queryParameterName !== null && queryParameterName !== "") {
              document.getElementById("name").value = queryParameterName;
              connection();
            } else if (name !== null && name !== "") {
              document
                .getElementById("connectionForm")
                .addEventListener("submit", connection);
                // WORKS ON BOTH CLICK AS WELL AS ENTER EVENT
            } else {
              document.getElementById("characterSection").innerHTML =
                '<h2 id="characterMainTitle">Type Name & Press "ENTER" to get the result....</h2>';
            }
          }
        

    

