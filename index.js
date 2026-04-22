const express = require('express');
const app = express();

app.use(express.json());

let maquina={
    nombre: "Cinta transportadora",
    estado: "Encendida",
    temperatura: 36.5
};


//GET -> CONSULTAMOS EL ESTADO
app.get('/estado', (req, res) => {
    res.json(maquina);
});

//POST -> CAMBIAMOS EL ESTADO
app.post('/cambiar-estado',(req,res) => {
    maquina.estado=req.body.estado;
    res.json({
        mensaje:"Estado actualizado",
        maquina: maquina
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor funcionando");
});
