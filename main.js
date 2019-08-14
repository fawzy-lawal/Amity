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

let url = 'https://data.orghunter.com/v1/categories?user_key=2a28da418dd6cfd9e95cce35a010852b';
let data;

fetch(url, {
        method: 'get',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
        console.log(myJson);
    })

console.log(data);