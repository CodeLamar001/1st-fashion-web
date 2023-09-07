const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    cart.push({ name, price });

    // Update cart display
    updateCartDisplay();
  });
});

function updateCartDisplay() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');

  // Clear previous cart content
  cartList.innerHTML = '';

  // Calculate cart total
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);

    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => {
  alert('Thank you for your order! We will contact you for payment details.');
  cart.length = 0; // Clear the cart
  updateCartDisplay(); // Update the cart display
});
function updateCartDisplay() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');

  // Clear previous cart content
  cartList.innerHTML = '';

  // Calculate cart total
  let total = 0;

  cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
      removeButton.addEventListener('click', () => {
          removeFromCart(index);
      });
      
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);

      total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}
