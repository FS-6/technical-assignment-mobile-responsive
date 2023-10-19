const productName = document.getElementById("product-name-detail");
const productFrom = document.getElementById("product-from-detail");
const productPrice = document.getElementById("product-price-detail");
const productImage = document.getElementById("product-img-detail");
const totalPrice = document.getElementById("product-total-price");
const subTotal = document.getElementById("subtotal");

// button order
const incButton = document.getElementById("incButton");
const decButton = document.getElementById("decButton");
const totalOrder = document.getElementById("total-order");

// get products by id
async function getProductById() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("productId");

  const response = await fetch(
    `https://6526b95b917d673fd76ce548.mockapi.io/products?id=${id}`
  );

  const product = await response.json();
  sessionStorage.setItem("product", JSON.stringify(product));

  product.map((item) => {
    productImage.src = item.image;
    productName.textContent = item.name;
    productPrice.textContent = `Rp. ${item.price}`;
    productFrom.textContent = item.from;
  });
}

let price = 0;
let total = 0;

const productDetail = JSON.parse(sessionStorage.getItem("product"));
productDetail.map((item) => {
  price = item.price;
});

totalOrder.textContent = "0";
totalPrice.textContent = "Rp. 0";

incButton.onclick = () => {
  totalOrder.textContent = total += 1;
  totalPrice.textContent = `Rp. ${price * total}`;
  subTotal.textContent = `Rp. ${price * total}`;
};

decButton.onclick = () => {
  total <= 0 ? 0 : (total -= 1);
  totalOrder.textContent = total;
  totalPrice.textContent = `Rp. ${price * total}`;
  subTotal.textContent = `Rp. ${price * total}`;
};

getProductById();
