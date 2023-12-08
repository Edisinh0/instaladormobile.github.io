document.addEventListener("DOMContentLoaded", function() {
    // Detección del user-agent
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // URL del APK (reemplazar con la URL real)
    var apkUrl = "tu_url_del_apk.apk";

    // Elementos DOM
    var downloadButton = document.getElementById("downloadButton");

    // Configurar el enlace de descarga
    downloadButton.addEventListener("click", function() {
        if (isMobile) {
            // Si es un dispositivo móvil, redirige a la página de descarga
            window.location.href = apkUrl;
        } else {
            // Si es un navegador web, muestra un mensaje de error
            alert("La descarga solo está disponible en dispositivos móviles.");
        }
    });
});