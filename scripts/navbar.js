    // Obtener todos los enlaces de la navbar
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Función para remover la clase 'active' de todos los enlaces y añadirla al seleccionado
    function setActiveLink() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }

    // Añadir el evento click a todos los enlaces de la navbar
    navLinks.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });

    // Usar IntersectionObserver para detectar la visibilidad de las secciones
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5 // Ajustar este valor para cambiar cuándo se activa la observación
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

