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
      imageUrl:`images/ecommerceimg3.png`
  },
  {
      imageUrl:`images/ecommerceimg1.png`
  },
  {
      imageUrl:`images/ecommerceimg2.webp`
  }
]
let showImage = 0;
function slideShow(imageIndex){
  document.getElementById('img1').src=images[imageIndex].imageUrl;
}
function startUp(){
  document.getElementById('img1').src=images[showImage].imageUrl;
}

setInterval(() => {
startUp();
showImage++;
if (showImage == images.length){
  showImage = 0
};
}, 5000)