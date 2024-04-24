const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;


// Middleware per servire i file statici dalla directory "public"
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  (req, res) => {
    const hostHeader = req.headers.host; // Otteniamo l'header "Host" della richiesta
    const originHeader = req.headers.origin; // Otteniamo l'header "Origin" della richiesta
    console.log('Host Header:', hostHeader); // Stampiamo l'header "Host" nei log del server
    console.log('Origin Header:', originHeader); // Stampiamo l'header "Origin" nei log del server
    res.send(`Header Host: ${hostHeader}<br>Header Origin: ${originHeader}`); // Inviamo gli header come risposta HTTP
    //res.sendFile(path.join(__dirname, "public", 'index.html')); // Invia il file HTML come risposta
});

app.listen(PORT, () => {
    console.log(`Server A in esecuzione...`);
});
