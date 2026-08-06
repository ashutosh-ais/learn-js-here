document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.9923 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];
  let cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  // Getting cart products from local
  const localCart = JSON.parse(localStorage.getItem("my-cart")) || [];
  if (localCart?.length > 0) {
    localCart.forEach((item) => {
      cart.push(item);
    });
  }
  renderCart();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <span>${product?.name} - ${product.price?.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    syncCartToStorage();
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart?.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item?.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item-view");
        cartItem.innerHTML = `
            <span>${item.name} - ${item?.price?.toFixed(2)}</span>
            <button data-index=${index}>Remove</button>       
        `;
        cartItems.appendChild(cartItem);
      });
      totalPriceDisplay.textContent = `$${totalPrice?.toFixed(2)}`;
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.remove("hidden");
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully");
    totalPriceDisplay.textContent = `$0.00`;
    renderCart();
  });

  function syncCartToStorage() {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      //   const productIndex = parseInt(e.target.getAttribute("data-id"));
      const productIndex = Number(e.target.dataset.index); // We can extract index using this also
      cart.splice(productIndex, 1);
      if (cart?.length === 0) {
        totalPriceDisplay.textContent = `$0.00`;
      }
      syncCartToStorage();
      renderCart();
    }
  });
});

/*
<div
  data-user-name="John"
  data-product-price="99"
></div>

becomes
div.dataset.userName;
div.dataset.productPrice;

Notice:
data-user-name
        ↓
dataset.userName
*/
