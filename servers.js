const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para servir la página web
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir el archivo APK
app.get('/tu_apk.apk', (req, res) => {
    res.download(path.join(__dirname, 'ruta_a_tu_apk.apk'), 'tu_apk.apk');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});