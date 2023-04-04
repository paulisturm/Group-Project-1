
    //console.log(passhash);
refs/remotes/origin/main

      var apikey = "324637569c8fda463203df55e0b15edc";

      var d = new Date();
      var dstr = d.getTime();
      var pub = "324637569c8fda463203df55e0b15edc";
      var pri = "e0fd8fcb37f122d05eec3fe26aa303e32453c601";
      var combinedStr = dstr + pri + pub;
      var passhash = CryptoJS.MD5(combinedStr).toString();
      //console.log(combinedStr, passhash);


      var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${dstr}&apikey=${apikey}&hash=${passhash}`;
refs/remotes/origin/main
      fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((json) => {
          console.log(json);
        });

<<<<<<< HEAD
        
=======

   
refs/remotes/origin/main
>>>>>>> 5d8b10266b7795864c404ac793c14e46ce2583bd
