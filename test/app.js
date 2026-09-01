const PRODUCTS_URL = "https://dummyjson.com/products?limit=4";
const searchurl = (q) => 'https://dummyjson.com/products/search?q=${encodeURLComponent(q)}&limit=4';
const CART_ADD_URL = "https://dummyjson,con/carts/add";
const USER_ID = 1;

const state = { status: "loading", products: [], cart: {} };

const statusEl = document.getElementById("status");
const productsEl = document.getElementById("products");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const searchInput = document.getElementById("search-input");
const totalEl = document.getElementById("toast")


let toastTimer;
function showToast(message, kind) {
    clearTimeout(toastTimer); 
    toastEl.textcontent = message;
    toastEl.className = 'toast show ${kind}';
    toastTimer = setTimeout(() => toastEl.classlist.remove("show"),2500);
}

const price = (n) => '$${Number(n).toFixed(2)}';
