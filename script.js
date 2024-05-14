  // List of image filenames
  var images = [
    'image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg',
    'image8.jpg','image9.jpg','image10.jpg','image11.jpg','image12.jpg','image13.jpg','image14.jpg',
    'image15.jpg','image16.jpg','image17.jpg','image18.jpg','image19.jpg','image20.jpg','image21.jpg',
    'image22.jpg','image23.jpg','image24.jpg','image25.jpg','image26.jpg','image27.jpg','image28.jpg',
    'image29.jpg','image30.jpg','image31.jpg','image32.jpg','image33.jpg','image34.jpg','image35.jpg',
    'image36.jpg','image37.jpg','image38.jpg','image39.jpg','image40.jpg','image41.jpg','image42.jpg',
    'image43.jpg','image44.jpg','image45.jpg','image46.jpg','image47.jpg','image48.jpg','image49.jpg',
    'image50.jpg','image51.jpg','image52.jpg','image53.jpg','image54.jpg','image55.jpg','image56.jpg',
    'image57.jpg','image58.jpg','image59.jpg',
    // Add more image filenames here
  ];

  // Function to generate carousel items
  function generateCarouselItems() {
    var carouselInner = document.querySelector('.carousel-inner');

    images.forEach(function(image, index) {
      var carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (index === 0) {
        carouselItem.classList.add('active');
      }

      var img = document.createElement('img');
      img.src = '/img/gallery/' + image; // Assuming images are stored in a folder named 'images'
      img.classList.add('d-block', 'w-100');
      img.alt = 'Image ' + (index + 1);

      carouselItem.appendChild(img);
      carouselInner.appendChild(carouselItem);
    });
  }

  // Call the function to generate carousel items when the page loads
  window.onload = function() {
    generateCarouselItems();
  };

 