// Retrieve the stored product details from the session storage
const checkoutProduct = JSON.parse(sessionStorage.getItem('checkoutProduct'));

// Update the checkout page with the selected product details
const checkoutItemImage = document.querySelector('.itemP img');
const checkoutItemColor = document.getElementById('prd-color');
const checkoutItemQuantity = document.getElementById('prd-qty');
const checkoutItemPrice = document.getElementById('prd-price');
const checkoutItemSize = document.getElementById('prd-size');
const checkoutItemWidth = document.getElementById('prd-width');
const checkoutItemTotalPrice = document.getElementById('prd-total');
const checkoutCountIndicator = document.getElementById('cart-count');

checkoutItemImage.src = checkoutProduct.image;
checkoutItemColor.innerHTML = `${checkoutProduct.color}`;
checkoutItemQuantity.innerHTML = `x${checkoutProduct.quantity}`;
checkoutCountIndicator.innerHTML = `${checkoutProduct.quantity}`;
checkoutItemSize.innerHTML = `Size: ${checkoutProduct.size}`;
checkoutItemWidth.innerHTML = `Width: ${checkoutProduct.width}`;

// Function to change background color indicator to selected product color
const prdColorElement = document.getElementById('prd-color');
const colorElement = document.querySelector('.color-ref');

prdColorElement.addEventListener('DOMCharacterDataModified', () => {
  const prdColorText = prdColorElement.textContent.trim();

  colorElement.classList.remove('nimbus-cloud', 'black-white', 'burgundy-white', 'navy-white');

  if (prdColorText === 'Nimbus cloud with white') {
    colorElement.classList.add('nimbus-cloud');
  } else if (prdColorText === 'Black and white') {
    colorElement.classList.add('black-white');
  } else if (prdColorText === 'Burgundy with white') {
    colorElement.classList.add('burgundy-white');
  } else if (prdColorText === 'Navy with white') {
    colorElement.classList.add('navy-white');
  }
});

// Add commas to the displayed product price
checkoutItemPrice.innerHTML = `&#8358;${checkoutProduct.price.toLocaleString()}`;

// Calculate and add commas to the displayed subtotal price
const subtotalPrice = checkoutProduct.price * checkoutProduct.quantity;
checkoutItemTotalPrice.innerHTML = `&#8358;${subtotalPrice.toLocaleString()}`;

// Update Total Checkout Prices
const shippingCost = 7500;
const tax = 3000;
const checkoutTotal = document.getElementById('checkout-total');

// Calculate the final checkout price
const finalCheckoutPrice = subtotalPrice + shippingCost + tax;

// Set the calculated value to the checkoutTotal element
checkoutTotal.innerHTML = `&#8358;${finalCheckoutPrice.toLocaleString()}`;

// Get a reference to the button element
const confirmOrderBtn = document.getElementById('confirmOrderBtn');

// function to change the "confirm Order" button to a thank you text
confirmOrderBtn.addEventListener('click', () => {
  confirmOrderBtn.textContent = 'Thank you for placing your order!';
  // Disable the button after clicking
  confirmOrderBtn.disabled = true;
});

// function to toggle the dropdown menu on mobile view
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

// Toggle the dropdown menu when the toggle button is clicked
menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});