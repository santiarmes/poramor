
  window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("show");
    });
  });


  const imageNames = Array.from({ length: 151 }, (_, i) => `image${i + 1}`);
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

 
 const closeBtn = document.getElementById('closeBtn');

  function closeLightbox(){
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';  
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
  
function openTab(evt, tabName) {
  // Declarar todas las variables
  var i, tabcontent, tablinks;

  // Ocultar todo el contenido de las solapas
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Eliminar la clase "active" de todos los enlaces de las solapas
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostrar la solapa actual y añadir una clase "active" al botón que abrió la solapa
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Mostrar la primera solapa por defecto
document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName("tab-content")[0].style.display = "block";
});




//backgrounds

document.addEventListener("DOMContentLoaded", function() {
  // Definimos un objeto con los IDs y las URLs de las imágenes de fondo
  const backgrounds = {
      participa: 'img/sections/participa-fondo.jpg',
      contacto: 'img/sections/contacto-fondo.jpg',
        };

  // Seleccionamos todos los elementos con la clase 'section'
  const infoboxs = document.querySelectorAll('.info-box');

  infoboxs.forEach(infobox => {
      // Obtenemos el ID del elemento actual
      const id = infobox.id;
      console.log();

      // Si el ID está en el objeto backgrounds, cambiamos la imagen de fondo
      if (backgrounds[id]) {
          infobox.style.backgroundImage = `url(${backgrounds[id]})`;
      }
  });
});



//adhesiones

function openTabadh(evt, tabName) {
  // Declarar todas las variables
  var i, tabcontentadh, tablinksadh;

  // Ocultar todo el contenido de las solapas
  tabcontentadh = document.getElementsByClassName("tab-content-adh");
  for (i = 0; i < tabcontentadh.length; i++) {
      tabcontentadh[i].style.display = "none";
  }

  // Eliminar la clase "active" de todos los enlaces de las solapas
  tablinksadh = document.getElementsByClassName("tab-link-adh");
  for (i = 0; i < tablinksadh.length; i++) {
      tablinksadh[i].className = tablinksadh[i].className.replace(" active", "");
  }

  // Mostrar la solapa actual y añadir una clase "active" al botón que abrió la solapa
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



// Mostrar la primera solapa por defecto
document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName("tab-content-adh")[0].style.display = "block";
});



