//* adds & removes responsive class to/from top nav when icon is clicked. */
function myFunction() {
    "use strict";
    var x = document.getElementById("topnavbar"); // Grabs topnavbar ID //
    if (x.className === "navbar") {  // this is always the class name so it will always work
      x.className += " responsive"; // adds responsive to class name responsiveness is done in css
    } else {                       // responsive class will only show up below 989 px
      x.className = "navbar"; // go back to normal nav bar.
    }
  }

const productList = document.querySelector('.product-list'); // selects .product-list class.

function loadJSON(){
    fetch('products.json') // grabs json data
    .then(response => response.json()) // sends a response and returns promise (parses data from json)
    .then(data => {
        let html = '';  // sets html variable
        data.product.forEach(product => { // runs for each product array/object.
            html += ` 
            <div class="product-item">
                <div class="product-img">
                <img src="${product.imgSrc}" alt="Light blue hoodie">
                </div>
                <div class="product-content">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <p class="product-price">${product.price}</p>
                    <button type = "button" class="add-to-cart-btn">
                    <i class= "fa fa-shopping-cart"></i> Add To Cart</button>
                </div>
          </div>`; //html and data
        });
        productList.innerHTML = html; // loads html and data into .product-list class.
    })
}


// Search bar for products
function searchProduct() {
  let input = document.getElementById('searchbar').value // takes input from searchbar
  input=input.toLowerCase();
  let x = document.getElementsByClassName('product-name'); // grabs everything with product-item class and stores it in a array.
  let y = document.getElementsByClassName('product-item');
    
  for (i = 0; i < x.length; i++) {   // loops through product-item's to search.
      if (!x[i].innerHTML.toLowerCase().includes(input)) { // while loop runs, it runs through every object with the product-item class and
          y[i].style.display="none";                       // if it includes the input it will display as block, if it does not it will display as none
      }
      else {
          y[i].style.display="block";                 
      }
  }
}