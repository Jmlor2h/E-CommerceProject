//* adds & removes responsive class to/from top nav when icon is clicked. */
function myFunction() {
  var x = document.getElementById("topnavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

let images = [
  {
      imageUrl:`productimages/bluehoodie.png`
  },
  {
      imageUrl:`productimages/blacktee.png`
  },
  {
      imageUrl:`productimages/redhoodie.png`
  }
]
let showImage = 0; // starts slideshow with array index of 0
// allows you to select which image you want (onclick function in html)
function slideShow(imageIndex){
  document.getElementById('img1').src=images[imageIndex].imageUrl;
}
// starts up slideshow,
function startUp(){
  document.getElementById('img1').src=images[showImage].imageUrl;
}
// interval for slideshow, images change every 5 seconds.
setInterval(() => {
startUp();
showImage++;
if (showImage == images.length){ // showImage starts with 0 and increments by 1, once it passes 2 it resets to 0, 2 is the last number of the array
  showImage = 0
};
}, 5000)