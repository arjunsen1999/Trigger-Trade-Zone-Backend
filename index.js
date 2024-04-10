import express from "express";
const app = express();

app.get("/", (req, res) =>{
    return res.send("<h1>Hello From backend</h1>")
})

app.listen(8000, () =>{
    console.log({server : `server listening at the http://localhost:8000`})
})