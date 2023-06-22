/ function to change grid images on gridA to images on gridB
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
