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

function init() {
    let body = document.getElementsByClassName(`DonationInfo`);
    let canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    //  Opacity makes a good appearance when objects are overlapped 
    context.globalAlpha=0.7;

    //  Repeat to draw a rectangle 100 times
    for(let i=0;i<100;i++){
        let color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
        context.fillStyle = color;

        //Each rectangle is at (0 ~ width of window, 0 ~ height of window)
        //Each rectangle's size is (20 ~ 100, 20 ~ 100)     
        context.fillRect(Math.random()*window.innerWidth, Math.random()*window.innerHeight, Math.random()*80+20, Math.random()*80+20);
    }

    body.appendChild(canvas);
}
window.onload = init;


let don1=document.getElementById()

let DonationArray = []