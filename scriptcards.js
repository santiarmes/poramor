

const cardsData = [
    {
      title: "Perez Celis",
      subtitle: "",
      imageUrl: "img/prensa/foto-sida-perez-celis.gif",
      description: "El famoso pintor y escultor Argentino, reconocido internacionalmente, se sumó a la campaña haciendo un enorme cuadro, que plasma la frase POR AMOR USA PRESERVATIVO."
    },
    {
        title: `Doscientos jóvenes pintaron graffiti en prevención del sida`,
        subtitle: "Clarín, 27 de Septiembre de 1994",
        imageUrl: "img/prensa/clarin-sida.gif",
        description: `“Sida, por amor usá preservativo”. El lema apareció ayer en buena parte de los barrios porteños, gracias a una campaña casi espontanea de prevención de la enfermedad y que contó con la adhesión de numerosos artistas como: Antonio Gasalla, Luis Brandoni, Gerardo Romano, y Horacio Fontova. El artista plástico Pérez Céliz donó al grupo un enorme collage alegórico que se convirtió en emblema de la campaña.

        ...La idea recibió también el apoyo de centros de estudiantes secundarios y universitarios y las adhesiones de mucha gente del arte...
        
        ...Silvia Armoza y Federico Schrager quienes pensaron este proyecto apuntan a la prevención. “No queremos hacer política- enfatizan - La mayoría de los contagios se producen por vía sexual, por eso creemos que es necesario y urgente que se recuerde el uso del preservativo” Además de los graffiti, los jóvenes filmaron un vídeo de un minuto para difundirlo en los medios.
        Muchos barrios fueron graffiteados con una sola condición: no molestar a los vecinos y no pintar los frentes de las casas y negocios.`
      },
      {
        title: `Los Hechos mas importandes de 1994`,
        subtitle: `Clarín, Revista del Domingo. 31 de diciembre de 1994`,
        imageUrl: "img/prensa/lomejordel94.gif",
        description: `El Diario Clarin, en la revista del domingo, Destaca la campaña de Grafitti: POR AMOR, USA PRESERVATIVO como uno de los hechos mas importantes de año.`
      },
      
    // Add more card data as needed
  ];
  

  
  // Function to generate HTML markup for a card
  function createCardHTML(card) {
    return `
      <div class="col-md-12">
        <div class="card rounded-0 border-2 border-light text-light">
          <img src="${card.imageUrl}" class="card-img-top" alt="${card.title}">
          <div class="card-body">
          <h5 class="fs-6">${card.subtitle}</h5>
            <h4>${card.title}</h4>
            <p class="card-text">${card.description}</p>
          </div>
        </div>
      </div>
    `;
  }
  
// Function to add cards to the carousel
function addCardsToCarousel() {
    cardsData.forEach((card, index) => {
      const cardHTML = createCardHTML(card);
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (index === 0) {
        carouselItem.classList.add('active');
      }
      carouselItem.innerHTML = `
        <div class="row">
          ${cardHTML}
        </div>
      `;
      document.querySelector('.prensa-carousel-inner').appendChild(carouselItem);
    });
  }
  
  // Call the function to add cards to the carousel
  addCardsToCarousel();
  