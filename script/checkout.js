const productImage = document.getElementById("product-image");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const totalPrice = document.getElementById("total-price");

const product = JSON.parse(sessionStorage.getItem("product"));
const totalItem = sessionStorage.getItem("totalItems");
const mustPay = sessionStorage.getItem("totalPrice");
const paymentAgent = sessionStorage.getItem("paymentAgent");
const shippingAgent = sessionStorage.getItem("shippingAgent");
const shippingFees = sessionStorage.getItem("shippingFee");

const form = document.getElementById("checkout-form");
const opsiPengiriman = document.getElementById("opsi-pengiriman");
const opsiPembayaran = document.getElementById("opsi-pembayaran");
const tarifKirim = document.getElementById("tarif-pengiriman");
const tarifBayar = document.getElementById("tarif-pembayaran");
const buyBtn = document.getElementById("buy-btn");

const productPriceTotal = document.getElementById("product-price-end");
const shippingFee = document.getElementById("shipping-fee");
const subTotal = document.getElementById("sub-total");

let ongkosKirim = 0;
let ongkosBayar = 0;

function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

if (sessionStorage.getItem("shippingFee")) {
  ongkosKirim = JSON.parse(sessionStorage.getItem("shippingFee"));
  const pengiriman = sessionStorage.getItem("shippingAgent");
  const pembayaran = sessionStorage.getItem("paymentAgent");

  // Menampilkan opsi pengiriman dan pembayaran yang disimpan di sessionStorage
  if (pengiriman) {
    tarifKirim.textContent = `Metode Pengiriman : ${pengiriman} (${formatCurrency(
      ongkosKirim
    )})`;
  }

  if (pembayaran) {
    tarifBayar.textContent = `Metode Pembayaran : ${pembayaran}`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pembayaran = opsiPembayaran.value;
  const pengiriman = opsiPengiriman.value;

  sessionStorage.setItem("shippingAgent", pengiriman);
  sessionStorage.setItem("paymentAgent", pembayaran);

  if (pengiriman) {
    ongkosKirim = 35000;
    sessionStorage.setItem("shippingFee", JSON.stringify(ongkosKirim));
  } else {
    ongkosKirim = 0;
    sessionStorage.setItem("shippingFee", JSON.stringify(ongkosKirim));
  }

  tarifKirim.textContent = `Metode Pengiriman : ${pengiriman} (${formatCurrency(
    ongkosKirim
  )})`;
  tarifBayar.textContent = `Metode Pembayaran : ${pembayaran}`;

  const shippingFees = JSON.parse(sessionStorage.getItem("shippingFee"));

  const shippingFeeValue = shippingFees || 0;

  shippingFee.textContent = formatCurrency(shippingFeeValue);
  subTotal.textContent = formatCurrency(
    Number(mustPay) + Number(shippingFeeValue)
  );
});

productImage.src = product.image;
productName.textContent = product.name;
productPrice.textContent = `${formatCurrency(product.price)} x ${totalItem}`;
totalPrice.textContent = formatCurrency(mustPay);

productPriceTotal.textContent = formatCurrency(mustPay);
shippingFee.textContent = `Rp. 0`;
subTotal.textContent = formatCurrency(Number(mustPay) + Number(shippingFees));

buyBtn.onclick = () => {
  alert("pembayaran berhasil!");
  window.location.href = "detail-pesanan.html";
};
