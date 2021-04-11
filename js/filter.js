// filter 


selectFilter("all-writing");
function selectFilter(choice) {
    let x, i;
    x = document.getElementsByClassName("filter");
    if (choice === "all-writing") choice = "";

    for(i = 0; i < x.length; i++){
        removeFilterClass(x[i], "show");
        if (x[i].className.indexOf(choice) > -1) addFilterClass(x[i], "show");
    }
    console.log(document.getElementsByClassName("filter"));
}

function addFilterClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
          }
    }
}

function removeFilterClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

let buttonContainer = document.getElementById("button-container");
let buttons = buttonContainer.getElementsByClassName("writing-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const allWriting = document.querySelector("button.all-writing");
const michiganRadio = document.querySelector("button.michigan-radio");
const detroitFree = document.querySelector("button.detroit-free-press");
const propublica = document.querySelector("button.propublica");
const peninsulaPress = document.querySelector("button.peninsula-press");
const filmDaze = document.querySelector("button.film-daze");
const michiganDaily = document.querySelector("button.michigan-daily");
const otherWriting = document.querySelector("button.other-writing");


allWriting.addEventListener("click", () => {
    selectFilter("all-writing")});

michiganRadio.addEventListener("click", () => {
    selectFilter("michigan-radio")});

detroitFree.addEventListener("click", () => {
    selectFilter("detroit-free-press")
});

propublica.addEventListener("click", () => {
    selectFilter("propublica")
});

peninsulaPress.addEventListener("click", () => {
    selectFilter("peninsula-press")
});


filmDaze.addEventListener("click", () => {
    selectFilter("film-daze")
});

michiganDaily.addEventListener("click", () => {
    selectFilter("michigan-daily")
});

otherWriting.addEventListener("click", () => {
    selectFilter("other-writing")
});


