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
