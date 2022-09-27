const addProduct = () => {
  const product = document.getElementById("input-field-key");
  const quantity = document.getElementById("input-field-value");

  addCartToLS(product.value, quantity.value);

  product.value = "";
  quantity.value = "";
};

const getStoredCart = () => {
  let cart = {};

  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const addCartToLS = (product, quantity) => {
  const cart = getStoredCart();

  cart[product] = quantity;

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};
