const productImage = document.getElementById("product-img");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const totalPrice = document.getElementById("total-price");

const product = JSON.parse(sessionStorage.getItem("product"));
const mustPay = sessionStorage.getItem("totalPrice");

// parse price to idr nominal
function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

productImage.src = product.image;
productName.textContent = product.name;
productPrice.textContent = formatCurrency(product.price);
totalPrice.textContent = formatCurrency(mustPay);
