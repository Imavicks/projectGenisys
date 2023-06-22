// function to change grid images on gridA to images on gridB
/* eslint-disable */
function changeGridA(imageNumber) {
/* eslint-enable */
  const gridAImages = [
    document.getElementById('grid1'),
    document.getElementById('grid2'),
    document.getElementById('grid3'),
    document.getElementById('grid4'),
  ];

  let imageSet = [];

  if (imageNumber === 1) {
    imageSet = ['resources/assets/white 15.jpg', 'resources/assets/white 15.jpg', 'resources/assets/white 20.png', 'resources/assets/white 21.png'];
  } else if (imageNumber === 2) {
    imageSet = ['resources/assets/black 5.png', 'resources/assets/black 5.png', 'resources/assets/black 15.png', 'resources/assets/black 8.png'];
  } else if (imageNumber === 3) {
    imageSet = ['resources/assets/red 18.png', 'resources/assets/red 18.png', 'resources/assets/red 15.png', 'resources/assets/red 14.png'];
  } else if (imageNumber === 4) {
    imageSet = ['resources/assets/blue 12.png', 'resources/assets/blue 12.png', 'resources/assets/blue 10.png', 'resources/assets/blue 11.png'];
  }

  for (let i = 0; i < gridAImages.length; i += 1) {
    gridAImages[i].style.border = ''; // Reset the border '1px solid' on gridA
  }

  // Set grid A images to the imageSet if condition matches
  for (let i = 0; i < imageSet.length; i += 1) {
    if (i < gridAImages.length) {
      gridAImages[i].src = imageSet[i];
    }
  }
}

// Function to highlight images on gridA
/* eslint-disable */
function changeToGrid1(newImageSrc) {
  /* eslint-enable */
    const changeToGrid1 = document.getElementById('grid1');
    changeToGrid1.src = newImageSrc;
  }
  
  // Variable to keep track of the currently clicked gridA element
  let currentGrid = null;
  /* eslint-disable */
  function addBorder(element) {
    // Remove border from the previous grid if there was one
    if (currentGrid !== null) {
      currentGrid.style.border = '';
    }
  
    // Add border to the clicked grid element
    element.style.border = '1px solid black';
  
    // Update the currentGrid variable to the clicked grid element
    currentGrid = element;
  }
  
  // Function to change the colour description based on the image clicked
  /* eslint-disable */
  function changeGridBtxt(colorId) {
  /* eslint-enable */
    const color = document.getElementById('color');
  
    if (colorId === 1) {
      color.innerHTML = '<b>Colour:</b> Nimbus cloud with white';
    } else if (colorId === 2) {
      color.innerHTML = '<b>Colour:</b> Black and white';
    } else if (colorId === 3) {
      color.innerHTML = '<b>Colour:</b> Burgundy with white';
    } else if (colorId === 4) {
      color.innerHTML = '<b>Colour:</b> Navy with white';
    } else {
      color.textContent = '';
    }
  }

  // Variable to keep track of the currently clicked gridB element
let currentGridB = null;
let rating = 0;
/* eslint-disable */
function addBorderB(element) {
  if (currentGridB !== null) {
    currentGridB.style.border = '';
    resetRating();
  }

  element.style.border = '1px solid black';
  currentGridB = element;
}

// function to rate shoes
function rateShoes(value) {
  rating = value;
  updateStars();
  // Perform any other actions based on the rating value
}

