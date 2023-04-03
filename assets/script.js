 
      //console.log(passhash);

      var apikey = "324637569c8fda463203df55e0b15edc";

      var d = new Date();
      var dstr = d.getTime();
      var pub = "324637569c8fda463203df55e0b15edc";
      var pri = "e0fd8fcb37f122d05eec3fe26aa303e32453c601";
      var combinedStr = dstr + pri + pub;
      var passhash = CryptoJS.MD5(combinedStr).toString();
      //console.log(combinedStr, passhash);
      var url = `http://gateway.marvel.com/v1/public/comics?ts=${dstr}&apikey=${apikey}&hash=${passhash}`;
      fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((json) => {
          console.log(json);
        });

        document.getElementById('btn').onclick =
   