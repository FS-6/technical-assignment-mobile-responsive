// parse price to idr nominal
function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

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

// initial product amount
let price = 0;
let total = 0;

// fetch product by id
async function getProductById() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("productId");

  const response = await fetch(
    `https://6526b95b917d673fd76ce548.mockapi.io/products?id=${id}`
  );

  const product = await response.json();

  if (Array.isArray(product) && product.length > 0) {
    const item = product[0];
    productImage.src = item.image;
    productName.textContent = item.name;
    productPrice.textContent = formatCurrency(item.price);
    productFrom.textContent = item.from;
    sessionStorage.setItem("product", JSON.stringify(item));

    // Update the price and total when a new product is fetched
    price = item.price;
    total = 0;
    totalOrder.textContent = total;
    totalPrice.textContent = formatCurrency(0);
    subTotal.textContent = formatCurrency(0);
  }
}

const productDetail = JSON.parse(sessionStorage.getItem("product"));

if (productDetail) {
  price = productDetail.price;
}

incButton.onclick = () => {
  totalOrder.textContent = total += 1;
  totalPrice.textContent = formatCurrency(price * total);
  subTotal.textContent = formatCurrency(price * total);

  sessionStorage.setItem("totalItems", total);
  sessionStorage.setItem("totalPrice", price * total);
};

decButton.onclick = () => {
  if (total > 0) {
    total -= 1;
    totalOrder.textContent = total;
    totalPrice.textContent = formatCurrency(price * total);
    subTotal.textContent = formatCurrency(price * total);

    sessionStorage.setItem("totalItems", total);
    sessionStorage.setItem("totalPrice", price * total);
  }
};

getProductById();
