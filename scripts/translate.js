function translatePage(lang) {
    var currentUrl = window.location.href.replace("index.html", "index-lang.html");
    var translateUrl = "https://translate.google.com/translate?sl=auto&tl=" + lang + "&u=" + encodeURIComponent(currentUrl);
    window.location.href = translateUrl;
}