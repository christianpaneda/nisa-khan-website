const header1 = document.querySelector("h1");
const header2 = document.querySelector("h2");
const link = document.querySelectorAll("a");
const toggleButton = document.querySelector("button.toggle");
let fontChange = document.body;
let toggleFonts = localStorage.getItem('toggleFonts'); 

function noPixel(){

    fontChange.classList.add("no-pixel-font");
   

}