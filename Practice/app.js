// Sage & Pot — products from DummyJSON; cart totals from DummyJSON's
// carts/add endpoint (includes its own discount pricing).

const PRODUCTS_URL = "https://dummyjson.com/products?limit=4";
const searchUrl = (q) => `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}&limit=4`;
const CART_ADD_URL = "https://dummyjson.com/carts/add";
const USER_ID = 1;

const state = { status: "loading", products: [], cart: {} };

const statusEl = document.getElementById("status");
const productsEl = document.getElementById("products");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const searchInput = document.getElementById("search-input");
const toastEl = document.getElementById("toast");

let toastTimer;
function showToast(message, kind) {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.className = `toast show ${kind}`; // kind: "ok" | "error"
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

const price = (n) => `$${Number(n).toFixed(2)}`;
const cartArray = (cart) => Object.entries(cart).map(([id, qty]) => ({ id: Number(id), quantity: qty }));

function render() {
  statusEl.textContent = state.status === "error" ? state.error : "";
  productsEl.innerHTML = "";

  if (state.status === "loading") {
    for (let i = 0; i < 4; i++) {
      productsEl.innerHTML += `
        <div class="skeleton">
          <div class="skel-block skel-img"></div>
          <div class="skel-block skel-line"></div>
          <div class="skel-block skel-line short"></div>
        </div>`;
    }
    return;
  }

  if (state.products.length === 0) {
    productsEl.innerHTML = `<p class="empty">No products found.</p>`;
    return;
  }

  state.products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <div class="name">${p.title}</div>
      <div class="price">${price(p.price)}</div>
      <button type="button">Add to cart</button>`;
    card.querySelector("button").addEventListener("click", (e) => addToCart(p.id, p.title, e.target));
    productsEl.appendChild(card);
  });
}

async function loadProducts(url) {
  state.status = "loading";
  render();

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    const data = await res.json();
    state.products = data.products || [];
    state.status = "success";
  } catch (err) {
    state.products = [];
    state.status = "error";
    state.error = `Couldn't load products: ${err.message}`;
  }
  render();
}

/**
 * Renders the horizontal mini-card strip from the products array
 * DummyJSON's carts/add response returns - each line already has
 * the title, thumbnail, quantity and total we need, straight from
 * the API's own pricing calculation.
 */
function renderCartStrip(lines, totals) {
  cartItemsEl.innerHTML = "";

  lines.forEach((line) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <img src="${line.thumbnail}" alt="${line.title}">
      <div>
        <div class="name">${line.title}</div>
        <div class="qty">x${line.quantity} · ${price(line.total)}</div>
      </div>`;
    cartItemsEl.appendChild(item);
  });

  cartTotalEl.textContent = totals
    ? `${totals.totalQuantity} item${totals.totalQuantity === 1 ? "" : "s"} total · ${price(totals.discountedTotal)}`
    : "";
}

async function addToCart(productId, productTitle, btn) {
  state.cart[productId] = (state.cart[productId] || 0) + 1;
  btn.disabled = true;

  try {
    const res = await fetch(CART_ADD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: USER_ID, products: cartArray(state.cart) }),
    });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    const data = await res.json();

    renderCartStrip(data.products, {
      totalQuantity: data.totalQuantity,
      discountedTotal: data.discountedTotal,
    });
    cartTotalEl.classList.add("flash");
    setTimeout(() => cartTotalEl.classList.remove("flash"), 600);

    showToast(`Added "${productTitle}" to cart`, "ok");

    btn.textContent = "Added";
    btn.classList.add("added");
    setTimeout(() => {
      btn.textContent = "Add to cart";
      btn.classList.remove("added");
      btn.disabled = false;
    }, 1000);
  } catch (err) {
    console.error("Add to cart failed:", err);
    showToast(`Couldn't add to cart: ${err.message}`, "error");
    btn.disabled = false;
  }
}

let searchTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  const q = searchInput.value.trim();
  searchTimer = setTimeout(() => loadProducts(q ? searchUrl(q) : PRODUCTS_URL), 300);
});

loadProducts(PRODUCTS_URL);