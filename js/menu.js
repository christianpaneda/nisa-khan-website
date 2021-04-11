// some JavaScript syntax learned in SI579 with Dr. Steve Oney (e.g. => notation)

const openNav = document.querySelector("a.toggle-nav");
const navTag = document.querySelector("nav.open");

openNav.addEventListener("click", () => {
    if (navTag.getAttribute("class") === "open"){
        navTag.setAttribute("class", "close")
    }
    else{
        navTag.setAttribute("class", "open")
    }
})

// toggle fonts 

const header1 = document.querySelector("h1");
const header2 = document.querySelectorAll("h2");
const header3 = document.querySelectorAll("h3");
const link = document.querySelectorAll("a");
const button = document.querySelectorAll("button");
const toggleButton = document.querySelector("button.toggle");
let fontChange = document.body;
let toggleFonts = localStorage.getItem('toggleFonts'); 


toggleButton.addEventListener("click", () => {
    //change font
    fontChange.classList.toggle("no-pixel-font");
    header1.classList.toggle("no-pixel-font");
    if(header2 !== null){ 
        for (i = 0; i < header2.length; i++){
            header2[i].classList.toggle("no-pixel-font");
        }
    }
    
    if(header3 !== null){ 
        for (i = 0; i < header3.length; i++){
            header3[i].classList.toggle("no-pixel-font");
        }
    }

    if(button !== null){ 
        for (i = 0; i < button.length; i++){
            button[i].classList.toggle("no-pixel-font");
        }
    }

    for (i = 0; i < link.length; i++){
        link[i].classList.toggle("no-pixel-font");
    }





    // change text in button
    if (toggleButton.innerHTML === "pixel font"){
        toggleButton.innerHTML = "no-pixel font";

    }
    else{
        toggleButton.innerHTML = "pixel font";
    }

})



