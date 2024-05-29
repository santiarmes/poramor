
  window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("show");
    });
  });


  const imageNames = Array.from({ length: 154 }, (_, i) => `image${i + 1}`);
  let currentIndex = 0;
  
  document.addEventListener('DOMContentLoaded', () => {
      const gallery = document.getElementById('gallery');
  
      imageNames.forEach((name, index) => {
          const thumbnailDiv = document.createElement('div');
          thumbnailDiv.classList.add('thumbnail');
          
          const img = document.createElement('img');
          img.src = `${basePath}${name}.jpg`; // Corregido aquí
          img.alt = `image${index + 1}`; // También corrige aquí si quieres que el alt sea solo el nombre de la imagen
          img.onclick = () => showImage(index);
          
          thumbnailDiv.appendChild(img);
          gallery.appendChild(thumbnailDiv);
      });
  });
  
  
  const basePath = '/img/gallery/';
  
  function showImage(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = `${basePath}${imageNames[currentIndex]}.jpg`;
    lightbox.style.display = 'flex';
  }
  
 
  
  function prevImage(event) {
    // event.stopPropagation();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageNames.length - 1;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = `${basePath}${imageNames[currentIndex]}.jpg`;
  }
  
  function nextImage(event) {
    // event.stopPropagation();
    currentIndex = (currentIndex < imageNames.length - 1) ? currentIndex + 1 : 0;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = `${basePath}${imageNames[currentIndex]}.jpg`;
  }


function hideImage(event) {
  if (event.target.id === 'lightbox') {
      const lightbox = document.getElementById('lightbox');
      lightbox.style.display = 'none';
  }
}
  


