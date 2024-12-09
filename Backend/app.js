const express = require("express");
const path = require("path");
const {Client} = require("pg");

const app = express();
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Empresa',
    password: '1234',
    port: 5432,
});

client.connect()
    .then(()=>{
        console.log('Conectado a PostgreSQL');
    })
    .catch(err =>{
        console.error('Error al conectar a PostgreSQL')
    });
    
    app.use(express.static(path.join(__dirname, '../Frontend')));

    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname + "/Frontend", "/index.html"));
    });//hola

app.get("/usuarios", async (req,res)=>{

try{
    const result = await client.query('SELECT * FROM empleados');
    res.json(result.rows);
} catch(err){
    console.error('error en la consulta', err);
    res.status(500).send('error en la consulta de datos');
}

});

app.listen(3000, ()=>{
    console.log("server running on port", 3000);
});