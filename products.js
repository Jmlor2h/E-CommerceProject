//* adds & removes responsive class to/from top nav when icon is clicked. */
function myFunction() {
    var x = document.getElementById("topnavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

const productList = document.querySelector('.product-list'); // selects .product-list class.

function loadJSON(){
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.product.forEach(product => {
            html += ` 
            <div class="product-item">
                <div class="product-img">
                <img src="${product.imgSrc}" alt="Light blue hoodie">
                </div>
                <div class="product-content">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-category">${product.category}</span>
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