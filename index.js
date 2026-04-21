const express = require('express');
const app = express();

app.get('/estado', (req, res) => {
    res.json({
        maquina: "Cinta transportadora",
        estado: "ENCENDIDA"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor funcionando");
});