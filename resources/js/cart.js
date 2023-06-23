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