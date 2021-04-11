// some JavaScript syntax learned in SI579 with Dr. Steve Oney (e.g. => notation)

const logoText = document.querySelector("div.logo-text")
const logoStarTag = document.querySelector("#logo-star")

logoText.addEventListener("mouseover", () => {
    if (logoStarTag.getAttribute("class") === "no-logo-animate"){
        logoStarTag.setAttribute("class", "logo-animate")}
})

logoText.addEventListener("mouseout", () => {
    if (logoStarTag.getAttribute("class") === "logo-animate"){
        logoStarTag.setAttribute("class", "no-logo-animate")}
})


