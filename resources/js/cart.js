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
  cartItemPrice.innerHTML = `<b>&#8358;<b>${product.price} x ${count} = &#8358;${totalPrice}`;
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
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const backButton = document.createElement('button');

removeItemsButton.addEventListener('click', () => {
  // Clear the session storage
  sessionStorage.clear();
  // Hide the section
  section1.classList.add('hidden');
  // Reset count and update cart count indicator
  count = 0;
  totalCount.innerHTML = count;
  updatePriceAndCount();
  cartCountIndicator.textContent = count;
  // Apply conditional styling to section-2
  section2.classList.add('section-2-adjusted');
  // Add back arrow button
  backButton.innerHTML = '< Back';
  backButton.classList.add('back-button');
  backButton.addEventListener('click', () => {
    // Go back to the product page
    window.history.back();
  });
  section2.prepend(backButton);
});

// Add event listener to checkout button
const checkoutButton = document.querySelector('.checkout-button button');
checkoutButton.addEventListener('click', () => {
  // Perform checkout process here
  // Redirect to the checkout page and checkout logic
});
