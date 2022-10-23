const express = require("express")

const app = express()
const port = 5000;


app.get("/api/msn", (req, res) => {
 
    return res.status(200).json({message:`Hola ${req.query.name},¿Como estas?`})
})
 

function captura(){    

    let name = document.getElementById("name").value

     const url = `http://127.0.0.1:5000/api/msn/${name}`;

    fetch (url)

    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
    })
    
  
} 
app.listen(port,() => console.log(`Servidor escuchando por el puerto `,port));


