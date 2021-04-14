
  const displayImage1 = document.getElementsByClassName("featured");
  const thumbnailImages1 = document.getElementsByClassName("thumbnails");
  
  function setdisplayImage1() {
  //const img_details = images1[image_index];
  const imgDetail = imageBundle[image_index];

//   for(let i = 0; i<displayImage1.length; i++){
//     displayImage1[i].setAttribute("src", imgDetail[i][i].url);
//     displayImage1[i].setAttribute("alt", imgDetail[i][i].alt);
// } 
 

    for(let i = 0; i<displayImage1.length; i++){
        const imgDetail = imageBundle[image_index];
        displayImage1[i].setAttribute("src", imageBundle[i][0].url);
        displayImage1[i].setAttribute("alt", imageBundle[i][0].alt);
       console.log(imageBundle[i][i])
    } 
    // displayImage1[0].setAttribute("src", img_details.url);
    // displayImage1[0].setAttribute("alt", img_details.alt);
    }

  // create thumbnails
  
  let highlightedElement;


//   function setthumbnailImage1(image_index) {
//     const imgDetail = imageBundle[image_index];
//     const imgElement = document.createElement("img");
    // for(let i = 0; i<thumbnailImages1.length; i++){
    //     console.log(thumbnailImages1.length)
    //     for(let i = 0; i<imageBundle[i].length; i++){
    //         console.log(imageBundle[i].length);
    //         imgElement.setAttribute("src", imgDetail[i].url);
    //         console.log(imgDetail[i].url);
    //         console.log("break")
    //         console.log(imgDetail[i]);
    //         imgElement.setAttribute("alt", imgDetail[i].alt);
    //         console.log(imgDetail[i].alt);
    //        // imgDetail[i].element = imgElement;
    //         console.log(imgElement);
    //         console.log(thumbnailImages1[i])
    //         thumbnailImages1[i].append(imgElement)
            
  //}}}

  //setthumbnailImage1(0);

  
  for(let i = 0; i<images1.length; i++){
  const details = images1[i];
  const imgElement = document.createElement("img");

  imgElement.setAttribute("src", details.url);
  imgElement.setAttribute("alt", details.alt);
  
  details.element = imgElement;
  
  thumbnailImages1[0].append(imgElement);
  
    // click to go to next thumbnail
  
  imgElement.addEventListener("click", () => {
    console.log(i);
    setdisplayImage1(i);
    imgElement.setAttribute("class", "highlighted")
  
    if(highlightedElement){
        highlightedElement.removeAttribute("class");
    }
  
    highlightedElement = imgElement;
    
   });  
  } 


  // media query 

const multimediaGrid = document.getElementsByClassName("multimedia"); 

function myFunction(x) {
    if (x.matches) { // If media query matches
        for(let i = 0; i<displayImage1.length; i++){
            displayImage1[i].removeAttribute("src");
            displayImage1[i].removeAttribute("alt");
            thumbnailImages1[i].style.display = 'none';
        }
        for(let i = 0; i<multimediaGrid.length; i++){
        multimediaGrid[i].style.display = 'grid';}
    } else {
        for(let i = 0; i<multimediaGrid.length; i++){
        multimediaGrid[i].style.display = 'none';}
        for(let i = 0; i<displayImage1.length; i++){
            thumbnailImages1[i].style.display = 'flex';
        }
        setdisplayImage1(0);
        
        
    }
  }
  
  let x = window.matchMedia("(max-width: 1500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
