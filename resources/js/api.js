// Import the functions from script.js
import {
  changeGridA, changeGridBtxt, addBorderB, selectImage, selectWidth, selectSize, addToCart,
} from './script.js';

const url = 'http://102.36.176.228:4444/products/get/2';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // Update product name
    document.getElementById('productName').innerText = data.productName;

    // Update product details
    document.getElementById('productPrice').innerHTML = `&#8358;${data.discountedPrice}`;
    document.getElementById('discountPercentage').innerHTML = `${((data.discountedPrice / data.productPrice) * 100).toFixed(0)}%`;
    document.getElementById('originalPrice').innerHTML = `&#8358;${data.productPrice}`;
    document.getElementById('colorName').innerHTML = data.productColors[0].color;

    // Update color images
    const colorImagesContainer = document.getElementById('colorImages');
    data.productColors.forEach((color) => {
      const img = document.createElement('img');
      img.src = color.image;
      img.alt = 'Product Image';
      img.onclick = () => {
        changeGridA(color.id);
        changeGridBtxt(color.id);
        addBorderB(img);
        selectImage(img);
      };
      colorImagesContainer.appendChild(img);
    });

    // Update size buttons
    const sizeButtonsContainer = document.getElementById('sizeButtons');
    data.productSizes.forEach((size) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.innerText = size;
      button.onclick = () => selectSize(button);
      sizeButtonsContainer.appendChild(button);
    });

    // Update width buttons and attach event listeners
    const widthButtons = document.querySelectorAll('.select-width button');
    widthButtons.forEach((button) => {
      button.addEventListener('click', () => selectWidth(button));
    });

    // Attach event listener to 'Add to Cart' button
    const addToCartButton = document.querySelector('.add-cart button');
    addToCartButton.addEventListener('click', addToCart);
  });

/*
  .catch((error) => {
    console.log('Error', error);
  }); */