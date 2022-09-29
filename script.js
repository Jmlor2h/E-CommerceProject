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
        imageUrl:`images/white.png`
    },
    {
        imageUrl:`images/blue.png`
    },
    {
        imageUrl:`images/black.png`
    }
  ]

  function slideShow(imageIndex){
    document.getElementById('img1').src=images[imageIndex].imageUrl;
  }
  function startUp(){
    document.getElementById('img1').src=images[0].imageUrl;
  }