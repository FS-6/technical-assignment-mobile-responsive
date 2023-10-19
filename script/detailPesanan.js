const invoice = document.getElementById("invoice");
const buyDate = document.getElementById("buy-date");

const kurir = document.getElementById("kurir");
const noResi = document.getElementById("no-resi");

const productImage = document.getElementById("product-img");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const totalPrice = document.getElementById("total-price");

const priceEnd = document.getElementById("total-price-end");
const shippingFee = document.getElementById("biaya-kirim");
const totalPay = document.getElementById("total-pay");

const product = JSON.parse(sessionStorage.getItem("product"));
const mustPay = sessionStorage.getItem("totalPrice");
const shippingFees = sessionStorage.getItem("shippingFee");

const printPage = document.getElementById("print-page");

// parse price to idr nominal
function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

// generate random string
const randomString = Math.random().toString(36).substr(2, 10).toUpperCase();

invoice.textContent = randomString;
buyDate.textContent = new Date().toLocaleDateString();

kurir.textContent = sessionStorage.getItem("shippingAgent");
noResi.textContent = randomString;

productImage.src = product.image;
productName.textContent = product.name;
productPrice.textContent = formatCurrency(product.price);
totalPrice.textContent = formatCurrency(mustPay);

priceEnd.textContent = formatCurrency(mustPay);
shippingFee.textContent = formatCurrency(shippingFees);
totalPay.textContent = formatCurrency(Number(mustPay) + Number(shippingFees));

printPage.onclick = () => {
  window.print();
};
