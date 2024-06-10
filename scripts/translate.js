        // Obtén el parámetro de idioma de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');

        if (lang) {
            // Construye la URL de traducción de Google Translate
            const currentUrl = window.location.href;
            const originalUrl = currentUrl.replace(window.location.search, ''); // Remueve los parámetros de la URL
            const translateUrl = "https://translate.google.com/translate?sl=auto&tl=" + lang + "&u=" + encodeURIComponent(originalUrl);
            window.location.href = translateUrl;
        } else {
            // Si no hay parámetro de idioma, muestra un mensaje de error o redirige a un idioma predeterminado
            document.body.innerHTML = "<p>Error: No se ha especificado un idioma.</p>";
        }
  