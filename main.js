//  let dropdown = document.getElementById('navbarDropdownMenuLink');
//  dropdown.addEventListener('mouseover', toggleDropdown);

//  function toggleDropdown() {
//      console.log("Hovered");
//      $('#navbarDropdownMenuLink').dropdown('toggle');
//  }

//  let dropdownnot = document.getElementById('navbarDropdownMenuLink');
//  dropdownnot.addEventListener('mouseout', toggleNotDropdown);

//  function toggleNotDropdown() {
//      console.log("off");
//      $('#navbarDropdownMenuLink').dropdown('toggle');
//  }

// let request = new XMLHttpRequest()

// request.open('GET', 'http://data.orghunter.com/v1/charitysearch?user_key=yourKey&searchTerm=treasure%20coast%20humane', true)
// request.onload = function() {
//   let data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(category => {
//         console.log(Y)
//     //   console.log()
//     })
//   } else {
//     console.log('error')
//   }
// }

// console.log("Connected");
// request.send()
 const proxyurl = "https://cors-anywhere.herokuapp.com/";
let url = 'http://data.orghunter.com/v1/charitysearch?user_key=2a28da418dd6cfd9e95cce35a010852b' ;
;
let data;

let donationURLS = []

fetch(proxyurl + url, {
        method: 'GET',
        headers: {
            "Content-Type" : "text/plain",'Access-Control-Allow-Origin': '*'
        }
        
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
        // console.log(myJson);
        const AFSCME = myJson.data[0].charityName;
        console.log(AFSCME);
        let p = document.createElement('p');
        p.innerText = AFSCME;
  
    })
