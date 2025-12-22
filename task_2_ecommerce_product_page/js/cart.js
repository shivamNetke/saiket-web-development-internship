  // Top main Add to Cart button

   let quantity = 1;
  const qtySpan = document.getElementById("qty");

  function increase() {
    quantity++;
    qtySpan.textContent = quantity;
  }

  function decrease() {
    if (quantity > 1) {
      quantity--;
      qtySpan.textContent = quantity;
    }
  }

  const addToCartBtn = document.getElementById("addToCart");
  const buyItNowBtn = document.getElementById("buyItNow");

  addToCartBtn.addEventListener("click", function () {
    addToCartBtn.textContent = "ADDED TO CART";
    addToCartBtn.style.backgroundColor = "#d1ffd6";
    addToCartBtn.style.color = "#1b5e20";
    addToCartBtn.disabled = true;
  });

  buyItNowBtn.addEventListener("click", function () {
    alert("✅ Order Placed");
  });

  // Bottom cards Add to Cart buttons
  const cardButtons = document.querySelectorAll(".cardCartBtn");

  cardButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.textContent = "ADDED TO CART";
      btn.style.backgroundColor = "#4caf50";
      btn.style.color = "white";
      btn.disabled = true;
    });
  });
