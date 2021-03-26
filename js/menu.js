// some JavaScript syntax learned in SI579 with Dr. Steve Oney (e.g. => notation)

const openNav = document.querySelector("a.toggle-nav")
const navTag = document.querySelector("nav")

openNav.addEventListener("click", () => {
    if (navTag.getAttribute("class") === "open"){
        navTag.setAttribute("class", "close")
    }
    else{
        navTag.setAttribute("class", "open")
    }
})