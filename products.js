//* adds & removes responsive class to/from top nav when icon is clicked. */
function myFunction() {
    var x = document.getElementById("topnavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

const productList = document.querySelector('.product-list');

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
          </div>`;
        });
        productList.innerHTML = html;
    })
}