// Retrieve the stored product details from the session storage
const product = JSON.parse(sessionStorage.getItem('product'));

// Update the cart page with the selected product details
const cartItemImage = document.querySelector('.cart-item-image');
const cartItemPrice = document.querySelector('.cart-item-price');
const cartItemColor = document.querySelector('.cart-item-color');
const cartItemSize = document.querySelector('.cart-item-size');
const cartItemWidth = document.querySelector('.cart-item-width');

cartItemImage.src = product.image;
cartItemColor.innerHTML = `Color: ${product.color}`;
cartItemSize.innerHTML = `Select Size: ${product.size}`;
cartItemWidth.innerHTML = `Select Width: ${product.width}`;

// Increment and Decrement Buttons
const decrementCount = document.getElementById('decrease-count');
const incrementCount = document.getElementById('increase-count');
const totalCount = document.getElementById('total-count');
const cartCountIndicator = document.getElementById('cart-count'); // Cart count indicator element

// Variable to track count and update price
let count = 1; // Set the initial count to 1

// Function to update price display and cart count indicator
const updatePriceAndCount = () => {
  const totalPrice = product.price * count;
  cartItemPrice.innerHTML = `x${count} = <b>&#8358;${totalPrice.toLocaleString()}<b>`;
  cartCountIndicator.textContent = count; // Update cart count indicator
};

// Function to decrement count
const handleDecrement = () => {
  if (count > 1) {
    count -= 1;
    totalCount.innerHTML = count;
    updatePriceAndCount();
  }
};

// Function to increment count
const handleIncrement = () => {
  count += 1;
  totalCount.innerHTML = count;
  updatePriceAndCount();
};

// Display initial count value and update price display
totalCount.innerHTML = count;
updatePriceAndCount();

// Add click event to buttons
decrementCount.addEventListener('click', handleDecrement);
incrementCount.addEventListener('click', handleIncrement);

// Add event listener to remove items button
const removeItemsButton = document.getElementById('remove-items');
const cartItem = document.querySelector('.cart-item');

removeItemsButton.addEventListener('click', () => {
  // Clear the session storage
  sessionStorage.clear();

  // Reset count and update cart count indicator
  count = 0;
  totalCount.innerHTML = count;
  updatePriceAndCount();
  cartCountIndicator.textContent = count;
  // Create a new message element
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `
    <p>It seems you have not added anything to your cart.</p>
    <p>Nothing in your cart...</p>
    <p id='contdShop'>Continue shopping?</p>
  `;

  // Replace cartItem content with the message
  cartItem.innerHTML = '';
  cartItem.appendChild(message);
});

// Push to Checkout Page
const checkoutButton = document.querySelector('.checkout-button button');
checkoutButton.addEventListener('click', () => {
  const checkoutProduct = {
    price: product.price,
    size: product.size,
    width: product.width,
    quantity: count,
    color: product.color,
    image: product.image,
  };

  // Set the product details in the session storage
  sessionStorage.setItem('checkoutProduct', JSON.stringify(checkoutProduct));

  // Navigate to the checkout page
  window.location.href = '/resources/html/checkout.html';
});