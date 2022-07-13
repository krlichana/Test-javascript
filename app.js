/// VEZBA BROJ JEDAN

unos = prompt("Unesite broj clanova");
arr = [];
for (let i = 0; i < unos; i++) {
      arr[i] = prompt("Unesite clan");
    }
    function square(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
      }
      console.log(arr);
    }
    square(arr);
    



    // /VEZBA BROJ DVA 
    // fetch("https://reqres.in/api/users").then((res) => {
    //      res.json().then((data) => {
    //     console.log(data);
    //   });
    // });
    