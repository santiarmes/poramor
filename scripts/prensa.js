


const basePathPrensa = '/img/prensa/prensa-thumbnails/';
const imagePrensaNames = Array.from({ length: 18 }, (_, i) => `prensaThumbnail${i + 1}`);
const cardsData = [
    //1
    {
        title: "Perez Celis",
        subtitle: "",
        imageUrl: "img/prensa/prensa1.gif",
        description: "El famoso pintor y escultor Argentino, reconocido internacionalmente, se sumó a la campaña haciendo un enorme cuadro, que plasma la frase POR AMOR USA PRESERVATIVO."
    },
    //2
    {
        title: `Doscientos jóvenes pintaron graffiti en prevención del sida`,
        subtitle: "Clarín, 27 de Septiembre de 1994",
        imageUrl: "img/prensa/prensa2.gif",
        description: `“Sida, por amor usá preservativo”. El lema apareció ayer en buena parte de los barrios porteños, gracias a una campaña casi espontanea de prevención de la enfermedad y que contó con la adhesión de numerosos artistas como: Antonio Gasalla, Luis Brandoni, Gerardo Romano, y Horacio Fontova. El artista plástico Pérez Céliz donó al grupo un enorme collage alegórico que se convirtió en emblema de la campaña.

        ...La idea recibió también el apoyo de centros de estudiantes secundarios y universitarios y las adhesiones de mucha gente del arte...
        
        ...Silvia Armoza y Federico Schrager quienes pensaron este proyecto apuntan a la prevención. “No queremos hacer política- enfatizan - La mayoría de los contagios se producen por vía sexual, por eso creemos que es necesario y urgente que se recuerde el uso del preservativo” Además de los graffiti, los jóvenes filmaron un vídeo de un minuto para difundirlo en los medios.
        Muchos barrios fueron graffiteados con una sola condición: no molestar a los vecinos y no pintar los frentes de las casas y negocios.`
    },
    //3
    {
        title: `Los Hechos mas importandes de 1994`,
        subtitle: `Clarín, Revista del Domingo. 31 de diciembre de 1994`,
        imageUrl: "img/prensa/prensa3.gif",
        description: `El Diario Clarin, en la revista del domingo, Destaca la campaña de Grafitti: POR AMOR, USA PRESERVATIVO como uno de los hechos mas importantes de año.`
    },
    //4
    {
        title: `Muchas contradicciones`,
        subtitle: `Clarín, 18 de noviembre de 1994`,
        imageUrl: "img/prensa/prensa4.gif",
        description: `-La campaña oficial fracasó- opinan la Doctora Aztarloa, a cargo del programa nacional de Sida y el Doctor Pedro Cahn, Jefe de Infectología del Hospital Fernandez y director científico de La Fundación Huésped.

        En los últimos tiempos las campañas oficiales brillaron por su ausencia. Cobró mas fuerza la costumbre de los graffiti callejeros y justamente uno referido al sida que aparecido en toda la ciudad por la espontaneidad de 200 jóvenes: Por amor usa preservativo`
    },
    //5
    {
        title: `Duras críticas al gobierno`,
        subtitle: `Clarín, 19 noviembre del 1994`,
        imageUrl: "img/prensa/prensa5.gif",
        description: `El diario clarin, utiliza una foto de los graffiti, para ilustrar un articulo referido a la realidad del Sida en la Argentina.`
    },
    //6    
    {
        title: `Día mundial de la lucha contra el Sida`,
        subtitle: `Página 12, tapa. 1ero de Diciembre de 1994`,
        imageUrl: "img/prensa/prensa6.gif",
        description: `El diario Pagina 12, en el dia mundial de la lucha contra el Sida, Uso para su tapa, la idea de los graffiti y ofrecio una revista informativa sobre todos los aspectos de la lucha contra el Sida.`
    },
    //7
    {
        title: `ESTUDIANTES USAN GRAFFITI, EN LA LUCHA CONTRA EL SIDA`,
        subtitle: `NEW YORK TIMES, 19 de Enero de 1995`,
        imageUrl: "img/prensa/prensa7.gif",
        description: `“Por amor, usa preservativo” Se lee en los graffitis pintados en las paredes de casi todos los barrios de esta ciudad. Este mensaje, puede ser la herramienta mas efectiva en la lucha contra el Sida, en la cual funcionarios del Gobierno reconocen que ha alcanzado proporciones gigantezcas.

        Este mensaje fue escrito por jovenes, en todas las paredes disponibles que pudieron encontrar.
        
        Concepción, una chica de 16 años, dijo que escribió la frase, en más de 20 paredes de la ciudad, y que su hermano se hubiese salvado, de haber usado un preservativo.
        
        Organizaciones No Gubernamentales y activistas del Sida, cuestionan al gobierno por llevar adelante una campaña medieval, en la que ni siquiera mencionan el uso del preservativo.        
        `
    },
    //8
    {
        title: `400 paredes piden que, por
        amor,se usen preservativos`,
        subtitle: `Página 12, 27 de Septiembre de 1994`,
        imageUrl: "img/prensa/prensa8.gif",
        description: `Esta semana la ciudad amaneció con una nueva consigna pintada en las calles. “Por amor, usá preservativos” piden desde ayer los graffiti, una idea que comenzó con una charla informal entre el músico y Dj Federico Schrager y Silvia Armoza, y que termino con 360 personas, fijando lo que fue un happening preventivo sobre los paredones de Buenos Aires. Quedaron excluidos los frentes de las casas.

        ...“Formaron el grupo mas grande dedicado al graffiti que no tuviera que ver con una consigna política... muchos famosos adhirieron a la propuesta: Julio Boca, Pérez Celis, Caloi, Horacio Fontova, Luis Brandoni, Cipe Lincovsky, Eduardo Milewich, Carlos Gorostiza, Douglas Vinci, Dalmiro Saenz y Gabriela Toscano entre otros. También profesionales como Laura Abrhanson, Claudia Grosman y Esther y Juan Carlos Kustnetzoff ”
        
        ...”Sentíamos que casi nadie hacia nada- señala Federico- ni las instituciones, ni la gente. En esta oportunidad, cada uno, a la misma hora, puso un granito de arena tratando de hacer algo por la vida. Me encanta pensar que cuando los chicos salgan a la calle se van a acordar que al hacer el amor tienen que ponerse un forro”...
        
        `
    },
    //9 
    {
        title: `SIDA: La lucha continúa`,
        subtitle: `Suplemento SI, 2 de Diciembre 1994`,
        imageUrl: "img/prensa/prensa9.gif",
        description: `En una producción realizada por Silvia Armoza y Federico Schrager,para el suplemento Joven del diario Clarin, juntaron a varias de las figuras mas importantes del Rock y del Pop argentino.haciendo que cada uno adhiera a la campaña, con su propio graffiti. Y logrando que el Suplemento SI, se dedique en su totalidad a la lucha contra el Sida.`
    },
    //10 graffitis por amor
    {
        title: `Graffitis por amor`,
        subtitle: `La Maga, contratapa. 7 de Junio de 1995`,
        imageUrl: "img/prensa/prensa10.gif",
        description: `El 25 de septiembre de 1994, alrededor de quinientos jóvenes de Capital Federal y el gran Buenos Aires organizados en brigadas esperaban que el reloj diera las doce de la noche. El objetivo: Lanzar una campaña espontanea de prevención del Sida. El arma: un tubo de pintura en aerosol. El medio: Cualquier paredón libre. El mensaje: “Sida, Por amor usá preservativo”. El éxito se plasmó en dos pintadas mas, en las que participaron mil quinientas personas.

        Silvia Armoza y Federico Schrager organizaron el primer grupo de graffiteros, convocado por razones no políticas ,bajo la consigna. SIDA, por amor, usá preservativo.
        La cruzada comenzó el 25 de septiembre de 1994 y se repitió el 1º de diciembre de mismo año, Día Mundial del Sida y el 7 de abril del 95, Día Mundial de la Salud...
        ...Establecieron una cadena de comunicación, armando una red de graffiteros que cubriría Capital Federal, el Gran Buenos Aires, algunas ciudades de la costa atlántica como Mar del Plata y Villa Gessel, alcanzando inclusive Montevideo y Punta del Este. Fue así como la mañana del 26 la ciudad amaneció por primera vez cubierta por un mensaje en grandes letras rojas, negras, blancas, dobles o simples.....:"Sida: por Amor usá preservativo" Las pautas del trabajo eran cuatro: No pintar frentes de casas, cada pintor compraría sus aerosoles, no salir a pintar solo y al terminar, llamar a los organizadores, para dar por terminada la tarea.
        Muchos medios nacionales y extranjeros se hicieron eco de la campaña y escritores, músicos, periodista, fundaciones, médicos y representantes de varias universidades dieron su apoyo. Hasta Clemente, el personaje de Caloi y Lukas, el protagonista de la tira de Rep, se sumaron a la graffiteadas desde sus cuadritos de historieta en Clarín y Pagina 12.
        La inclusión de la palabra AMOR como parte del mensaje no fue casual. La frase involucra el afecto ,el amor de pareja, el amor a uno mismo, el amor a tus hijos, a la humanidad....y lo relaciona con el uso del preservativo. Porque hasta ahora lo que se a dicho sobre el, es que es molesto, que es difícil ponerselo, que disminuye la sensibilidad. Además se lo relacionó estrictamente con lo medico y se lo separó del erotismo. Esto, a los efectos de la prevención es contraproducente. Por amor usa preservativo: Sintetiza todas estas cosas que queríamos decir, coinciden Schrager y Armoza`
    },
    //prensa 11
    {
        title: `Jóvenes contra el Sida; promueven el uso de preservativo`,
        subtitle: `Crónica, 16 de octubre de 1994`,
        imageUrl: "img/prensa/prensa11.gif",
        description: `Crónica -¿Quiénes participaron de la campaña?-
        Licenciada Abramzon - En esta patriada participaron como un movimiento independiente, jóvenes de centros de estudiantes, secundarios, de centros de la universidad, de teatros, profesores, voluntarios de distintas fundaciones.... llamé a otros profesionales del campo de la prevención del Sida y los apoyamos plenamente-
        Crónica - ¿Cuál es su opinión sobre el texto de las leyendas?
        Licenciada Abramzon - Menciona que el Sida se puede prevenir a través del preservativo: Invoca al amor, a uno mismo, al prójimo y el amor a la humanidad. Esta enfermedad no discrimina razas, clases sociales, edades ni creencias religiosas. Sería importante que otros grupos se adhieran a esta iniciativa. Atravez de la Universidad, otros jóvenes, compraron adhesivos en los que escribieron las mismas leyendas de las pintadas.       
        `
    },
//prensa 12
{
    title: `Por amor usa preservativo`,
    subtitle: `La Maga, tapa. 7 de junio de 1995`,
    imageUrl: "img/prensa/prensa12.gif",
    description: `La revista La Maga, tomó la frase de la campaña de graffiti y la convirtió en tapa con un preservativo de regalo. Adhiriendo de esta manera a esta cruzada para prevenir el Sida.       
    `
},
//prensa 13
{
    title: `Las discotecas se unen para prevenir el Sida`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa13.gif",
    description: `Los clubes nocturnos mas importantes de Buenos Aires, se sumaron a la convocatoria hecha por poramor.org, con el apoyo de la Fundaciones Huésped y Red, regalando preservativos (suministrados por la fábrica Tulipán) en las entradas de todos ellos, y recolectando fondos para la campaña.   
    `
},
//prensa 14
{
    title: `Por amor al amor
    Ecos internacionales de una campaña Argentina contra el Sida`,
    subtitle: `Clarín, Suplemento Joven. 27 enero de 1995`,
    imageUrl: "img/prensa/prensa14.gif",
    description: `El suplemento Si y el NEW YORK TIMES, reflejaron el descontento juvenil, que clamaba desde las paredes de buenos aires.
    “Dos jovenes amantes se abrazan, bajo un grafiti que pide, Por amor, usa forro”
    La foto se recorta desde las paginas del NEW YORK TIMES del 19 de enero del 95       
    `
},
//prensa 15
{
    title: `Pedro Cahn`,
    subtitle: `El Expreso, Miercoles 25 de Junio de 1995`,
    imageUrl: "img/prensa/prensa15.gif",
    description: `Doctor Pedro Cahn ,Jefe de Infectologia del Hospital Fernandez y director cientifico de La Fundación Huésped. En una nota realizada por la periodista Any Ventura junto a los organizadores de la campaña POR AMOR USA PRESERVATIVO      
    `
},
//prensa 16
{
    title: `Un minuto...
    para prevenir el Sida`,
    subtitle: `Concurso de cine y video`,
    imageUrl: "img/prensa/prensa16.gif",
    description: `Poramor.org, junto a la Universidad del Cine, convocaron a cineastas y videastas a participar en el certamen “Un minuto, para prevenir el Sida”. Con el objetivo de difundir las obras premiadas en cines y canales de Television.     
    `
},
//prensa 17
{
    title: `Clemente`,
    subtitle: `Clarín, contratapa. 27 de Septiembre de 1994`,
    imageUrl: "img/prensa/prensa17.gif",
    description: `El dibujante Caloi, padre del famoso personaje “Clemente” que siempre a acompaña con humor y profundidad la realidad argentina desde la Contratapa del matutino Clarín adhirió el mismo día de la campaña, con una historieta alusiva.      
    `
},
//prensa 18
{
    title: `Rep`,
    subtitle: `Página 12, contratapa. 27 de Septiembre de 1994`,
    imageUrl: "img/prensa/prensa18.gif",
    description: `Rep, el dibujante de Lukas, el comic de la contratapa del diario Argentino Página 12, se sumo también desde su espacio, a la campaña de prevención.      
    `
},
];

let currentIndexprensa = 0;

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery-prensa');

    if (gallery) {
        imagePrensaNames.forEach((name, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('thumbnail-prensa');

            const img = document.createElement('img');
            img.src = `${basePathPrensa}${name}.jpg`;
            img.alt = `prensa${index + 1}`;
            img.onclick = () => showImagePrensa(index);

            thumbnailDiv.appendChild(img);
            gallery.appendChild(thumbnailDiv);
        });
    } else {
        console.error('Element with id "gallery-prensa" not found.');
    }

    //  Cerrar el lightbox cuando se hace clic en el botón de cierre
    //  const closeBtn = document.getElementById('closeBtn');
    //  closeBtn.onclick = () => {
    //      const lightbox = document.getElementById('lightbox-prensa');
    //      lightbox.style.display = 'none';
    // };

    // Cerrar el lightbox cuando se hace clic fuera del contenido del lightbox
    const lightbox = document.getElementById('lightbox-prensa');
    lightbox.addEventListener('click', hidePrensa);
});



function showImagePrensa(index) {
    currentIndexprensa = index;
    const lightbox = document.getElementById('lightbox-prensa');
    const lightboxContent = document.getElementById('lightbox-inner-content');

    const card = cardsData[index];

    
    if (card) {
        lightboxContent.innerHTML = `
        <div class="infoPrensa">
        <button id="closeBtnPrensa"  onclick="closeLightboxPrensa()"><i class="fa-solid fa-xmark"></i></button> 
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h2>${card.title}</h2>
                    <h3>${card.subtitle}</h3>
                    <p>${card.description}</p>
                </div>
                <div class="col-md-6 col-sm-12 text-center">
                    <img src="${card.imageUrl}" alt="${card.title} class="">
                </div>
                
            </div>
        </div>
        `;

        lightbox.style.display = 'flex';
    } else {
        console.error('No data found for the selected index');
    }
}


function prevprensa(event) {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cardsData.length - 1;
    }
    console.log('Current index:', currentIndex);  // Verificar el valor de currentIndex
    showImagePrensa(currentIndex);
}

function nextprensa(event) {
    if (currentIndex < cardsData.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    console.log('Current index:', currentIndex);  // Verificar el valor de currentIndex
    showImagePrensa(currentIndex);
}

function closeLightboxPrensa(){
    const lightbox = document.getElementById('lightbox-prensa');
    lightbox.style.display = 'none';  
  }


function hidePrensa(event) {
    if (event.target.id === 'lightbox-prensa') {
        const lightbox = document.getElementById('lightbox-prensa');
        lightbox.style.display = 'none';
    }
}



//----------------------------------------------------------------------//
    


const basePathPrensa2004 = '/img/prensa/prensa2004/prensaThumbnails/';
const imagePrensa2004Names = Array.from({ length: 46 }, (_, i) => `prensa${i + 1}`);
const cardsPrensa2004Data = [
    //1
    {
        title: "Campaña",
        subtitle: "",
        imageUrl: "img/prensa/prensa2004/prensa1.jpg",
        description: ""
    },
    //2
    {
        title: `Cuyo noticias`,
        subtitle: "Mendoza",
        imageUrl: "img/prensa/prensa2004/prensa2.jpg",
        description: ``
    },
    //3
    {
        title: `Recorte`,
        subtitle: ``,
        imageUrl: "img/prensa/prensa2004/prensa3.jpg",
        description: ``
    },
    //4
    {
        title: `Recorte`,
        subtitle: ``,
        imageUrl: "img/prensa/prensa2004/prensa4.jpg",
        description: ``
    },
    //5
    {
        title: `Recorte`,
        subtitle: ``,
        imageUrl: "img/prensa/prensa2004/prensa5.jpg",
        description: ``
    },
    //6    
    {
        title: `Paredes que hablan`,
        subtitle: ``,
        imageUrl: "img/prensa/prensa2004/prensa6.jpg",
        description: ``
    },
    //7
    {
        title: `Siempre con globito`,
        subtitle: ``,
        imageUrl: "img/prensa/prensa2004/prensa7.jpg",
        description: ``
    },
    //8
    {
        title: `x amor usá`,
        subtitle: `Suplemento NO`,
        imageUrl: "img/prensa/prensa2004/prensa8.jpg",
        description: ``
    },
    //9 
    {
        title: `Ponele la firma`,
        subtitle: ``,
        imageUrl: "img/prensa/prensa2004/prensa9.jpg",
        description: ``
    },
    //prensa 10 
    {
        title: `Diario El Sureño`,
        subtitle: `Ushuaia`,
        imageUrl: "img/prensa/prensa2004/prensa10.jpg",
        description: ``
    },
    //prensa 11
    {
        title: `Pintadas de campaña`,
        subtitle: `Tiempos`,
        imageUrl: "img/prensa/prensa2004/prensa11.jpg",
        description: ` `
    },
//prensa 12
{
    title: `Por amor`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa12.jpg",
    description: ``
},
//prensa 13
{
    title: `Fiesta Electron`,
    subtitle: `Flyer`,
    imageUrl: "img/prensa/prensa2004/prensa13.jpg",
    description: ``
},
//prensa 14
{
    title: `Graffiti`,
    subtitle: `Brasil`,
    imageUrl: "img/prensa/prensa2004/prensa14.jpg",
    description: ``
},
//prensa 15
{
    title: `Pintan murales en escuelas`,
    subtitle: `Palermo online`,
    imageUrl: "img/prensa/prensa2004/prensa15.jpg",
    description: ` `
},
//prensa 16
{
    title: `Agencia de noticias da AIDS `,
    subtitle: `Brasil`,
    imageUrl: "img/prensa/prensa2004/prensa16.jpg",
    description: ``
},
//prensa 17
{
    title: `Análisis de la actualidad`,
    subtitle: `Paraná, Entre Ríos`,
    imageUrl: "img/prensa/prensa2004/prensa17.jpg",
    description: ``
},
//prensa 18
{
    title: `Botella Mar`,
    subtitle: `Gobierno de Tierra del fuego`,
    imageUrl: "img/prensa/prensa2004/prensa18.jpg",
    description: ``
},
//prensa 19
{
    title: `Catamarca al día`,
    subtitle: `Catamarca`,
    imageUrl: "img/prensa/prensa2004/prensa19.jpg",
    description: ``
},
//prensa 20
{
    title: `Pintar paredes`,
    subtitle: `Clarin.com`,
    imageUrl: "img/prensa/prensa2004/prensa20.jpg",
    description: ``
},
//prensa 21
{
    title: `Alumnos de la UNSJ participaran en un testeo masivo de VIH`,
    subtitle: `Yahoo noticias`,
    imageUrl: "img/prensa/prensa2004/prensa21.jpg",
    description: `Jueves 25 de Noviembre de 2004`
},
//prensa 22
{
    title: `La revolución peligrosa`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa22.jpg",
    description: ``
},
//prensa 23
{
    title: `Pintata`,
    subtitle: `Paraguay`,
    imageUrl: "img/prensa/prensa2004/prensa23.jpg",
    description: ``
},
//prensa 24
{
    title: `El despertador`,
    subtitle: `Córdoba`,
    imageUrl: "img/prensa/prensa2004/prensa24.jpg",
    description: ``
},
//prensa 25
{
    title: `La Unión`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa25.jpg",
    description: ``
},
//prensa 26
{
    title: `Una pincelada de conciencia`,
    subtitle: `Estilo`,
    imageUrl: "img/prensa/prensa2004/prensa26.jpg",
    description: ``
},
//prensa 27
{
    title: `La foto del día`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa27.jpg",
    description: ``
},
//prensa 28
{
    title: `El liberal on line`,
    subtitle: `Santiago del estero`,
    imageUrl: "img/prensa/prensa2004/prensa28.jpg",
    description: `10-11-2004`
},
//prensa 29
{
    title: `El arte se suma a la lucha contra el HIV`,
    subtitle: `El litoral`,
    imageUrl: "img/prensa/prensa2004/prensa29.jpg",
    description: `05-11-2004`
},
//prensa 30
{
    title: `Entregaran preservativos en boliches bailables`,
    subtitle: `El once`,
    imageUrl: "img/prensa/prensa2004/prensa30.jpg",
    description: ``
},
//prensa 31
{
    title: `Río Gallegos adhirió a la campaña mundial`,
    subtitle: `El periódico austral`,
    imageUrl: "img/prensa/prensa2004/prensa31.jpg",
    description: ``
},
//prensa 32
{
    title: `Pintan murales y "graffits"`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa32.jpg",
    description: ``
},
//prensa 33
{
    title: `Prevención de SIDA`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa33.jpg",
    description: `08-11-2004`
},
//prensa 34
{
    title: `Programa provincial`,
    subtitle: `La opinión austral`,
    imageUrl: "img/prensa/prensa2004/prensa34.jpg",
    description: `23-10-2004`
},
//prensa 35
{
    title: `Día mundial del SIDA`,
    subtitle: `El Mercurio, calama`,
    imageUrl: "img/prensa/prensa2004/prensa35.jpg",
    description: ``
},
//prensa 36
{
    title: `Río Gallegos adhirió a la campaña mundial`,
    subtitle: `Santa cruz`,
    imageUrl: "img/prensa/prensa2004/prensa36.jpg",
    description: `16-11-2004`
},
//prensa 37
{
    title: `Por Amor Usa Preservativos`,
    subtitle: `Noticias Paraguayas(NP)`,
    imageUrl: "img/prensa/prensa2004/prensa37.jpg",
    description: ``
},
//prensa 38
{
    title: `NO`,
    subtitle: `Pagina 12`,
    imageUrl: "img/prensa/prensa2004/prensa38.jpg",
    description: ``
},
//prensa 39
{
    title: `En los bosques de palermo.Rock y danza`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa39.jpg",
    description: ``
},
//prensa 40
{
    title: `Un graffiti como herramienta de prevención del SIDA`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa40.jpg",
    description: `08-11-2004`
},
//prensa 41
{
    title: `Artistas locales comenzaron un mural`,
    subtitle: `Primera Linea online`,
    imageUrl: "img/prensa/prensa2004/prensa41.jpg",
    description: `16-11-2004`
},
//prensa 42
{
    title: `Gran repercusión`,
    subtitle: ``,
    imageUrl: "img/prensa/prensa2004/prensa42.jpg",
    description: ``
},
//prensa 43
{
    title: `Por amor usá preservativo`,
    subtitle: `Provincia 23`,
    imageUrl: "img/prensa/prensa2004/prensa43.jpg",
    description: `26-11-2004`
},
//prensa 44
{
    title: `Por amor usá preservativo`,
    subtitle: `Primera Linea online`,
    imageUrl: "img/prensa/prensa2004/prensa44.jpg",
    description: `16-11-2004`
},
//prensa 45
{
    title: `Pintan paredes por campaña del SIDA`,
    subtitle: `Tiempo Fueguino`,
    imageUrl: "img/prensa/prensa2004/prensa45.jpg",
    description: ``
},
//prensa 46
{
    title: `Por amor usa preservativo`,
    subtitle: `Tiempo Fueguino`,
    imageUrl: "img/prensa/prensa2004/prensa46.jpg",
    description: ``
},
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryPrensa2004 = document.getElementById('gallery-prensa-2004');

    if (galleryPrensa2004) {
        imagePrensa2004Names.forEach((names, index2004) => {
            const thumbnailDiv2004 = document.createElement('div');
            thumbnailDiv2004.classList.add('thumbnail-prensa');

            const img = document.createElement('img');
            img.src = `${basePathPrensa2004}${names}.jpg`;
            img.alt = `prensa${index2004 + 1}`;
            img.onclick = () => showImagePrensa2004(index2004);

            thumbnailDiv2004.appendChild(img);
            galleryPrensa2004.appendChild(thumbnailDiv2004);
        });
    } else {
        console.error('Element with id "gallery-prensa" not found.');
    }

    // // Cerrar el lightbox cuando se hace clic en el botón de cierre
    // const closeBtn = document.getElementById('lightbox-close');
    // closeBtn.onclick = () => {
    //     const lightbox2004 = document.getElementById('lightbox-prensa-2004');
    //     lightbox2004.style.display = 'none';
    // };

    // Cerrar el lightbox cuando se hace clic fuera del contenido del lightbox
    const lightbox2004 = document.getElementById('lightbox-prensa-2004');
    lightbox2004.addEventListener('click', hidePrensa2004);
});

function showImagePrensa2004(index2004) {
    const lightbox2004 = document.getElementById('lightbox-prensa-2004');
    const lightboxContent2004 = document.getElementById('lightbox-inner-content-2004');

    const card2004 = cardsPrensa2004Data[index2004];

    if (card2004) {
        lightboxContent2004.innerHTML = `
            <div class="infoPrensa">
            <button id="closeBtnPrensa2004"  onclick="closeLightboxPrensa2004()"><i class="fa-solid fa-xmark"></i></button> 
                <div class="row">
                    <div class="col-12">
                        <h2>${card2004.title}</h2>
                        <h3>${card2004.subtitle}</h3>
                        <p>${card2004.description}</p>
                    </div>
                    <div class="col-12  text-center">
                        <img src="${card2004.imageUrl}" alt="${card2004.title} class="">
                    </div>
                </div>
            </div>
        `;

        lightbox2004.style.display = 'flex';
    } else {
        console.error('No data found for the selected index');
    }
    
}

function prevprensa2004(event) {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cardsPrensa2004Data.length - 1;
    }
    console.log('Current index:', currentIndex);  // Verificar el valor de currentIndex
    showImagePrensa2004(currentIndex);
}

function nextprensa2004(event) {
    if (currentIndex < cardsData.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    console.log('Current index:', currentIndex);  // Verificar el valor de currentIndex
    showImagePrensa2004(currentIndex);
}

function closeLightboxPrensa2004(){
    const lightbox = document.getElementById('lightbox-prensa-2004');
    lightbox.style.display = 'none';  
  }

function hidePrensa2004(event) {
    if (event.target.id === 'lightbox-prensa-2004') {
        const lightbox2004 = document.getElementById('lightbox-prensa-2004');
        lightbox2004.style.display = 'none';
    }
}




