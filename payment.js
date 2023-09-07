// Payment simulation
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutButton = document.getElementById('checkout');

checkoutButton.addEventListener('click', () => {
  const total = parseFloat(cartTotalAmount.textContent);
  if (total > 0) {
    alert(`Payment simulated. Total Amount: $${total.toFixed(2)}`);
  } else {
    alert('Your cart is empty. Add items before proceeding.');
  }
});
// payment.js

// Form submission handler
document.getElementById('payment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Simulate a successful payment
  simulatePayment()
      .then(() => {
          document.getElementById('payment-status').textContent = 'Payment Successful!';
      })
      .catch(error => {
          document.getElementById('payment-status').textContent = 'Payment Failed. Please try again.';
      });
});

// Simulate payment (replace with your actual payment logic)
function simulatePayment() {
  return new Promise((resolve, reject) => {
      // Simulate payment success after a short delay (2 seconds)
      setTimeout(() => {
          resolve();
      }, 2000);
  });
}

