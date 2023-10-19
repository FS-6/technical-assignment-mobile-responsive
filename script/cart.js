const incButton = document.getElementById("incButton");
const decButton = document.getElementById("decButton");
const totalOrder = document.getElementById("total-order");
const productImage = document.getElementById("product-img");
const productName = document.getElementById("name");
const subTotal = document.getElementById("subtotal")
const productPrice = document.getElementById("price");

let price = 0;
let total = 0;

incButton.onclick = () => {
    totalOrder.textContent =total+=1;
    productPrice.textContent = Number(product.price) * total
    subTotal.textContent = Number(product.price) * total
};
  
  decButton.onclick = () => {
    if (total > 0) {
        totalOrder.textContent =total-=1;
        productPrice.textContent = Number(product.price) * total
        subTotal.textContent = Number(product.price) * total
    }
};

const product = JSON.parse(sessionStorage.getItem("product"));

productImage.src = product.image;
productName.textContent = product.name;
productPrice.textContent = product.price;