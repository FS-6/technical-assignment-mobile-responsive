const URL = "https://6526b95b917d673fd76ce548.mockapi.io/products";
const listProduct = document.getElementById("product-container");

function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

async function getAllProducts() {
  const response = await fetch(
    "https://6526b95b917d673fd76ce548.mockapi.io/products"
  );
  const products = await response.json();

  products.forEach((item) => {
    const productCard = `
          <div class="flex flex-col border rounded-md overflow-hidden hover:shadow-md duration-400">
            <a href="detail-produk.html?productId=${item.id}">
              <img
                  src="${item.image}"
                  alt="product-img"
                  class="h-auto"
              />
            </a>
            <div class="p-2">
                <h1 class="text-md font-bold">${item.name}</h1>
                <span class="text-xs text-slate-500 mb-2">${item.from}</span>
                <p class="font-md font-semibold mb-2">${formatCurrency(
                  item.price
                )}</p>
                <div class="flex items-center gap-2 mb-4">
                <div class="border-r-2 pr-2">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <span>5.00</span>
                </div>
                <span>50 terjual</span>
                </div>
                <button
                id="cart-btn"
                type="button"
                class="bg-red-700 p-2 flex justify-end rounded-md"
                >
                <i class="fa-solid fa-cart-shopping text-md text-white"></i>
                </button>
            </div>
          </div>
      `;
    listProduct.innerHTML += productCard;
  });
}

getAllProducts();
