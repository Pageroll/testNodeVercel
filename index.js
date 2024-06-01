const express = require("express");
const app = express();
app.use(express.json());

app.get('/', ()=>{
    res.send("Hello")
})

app.listen(9000,()=>{
    console.log("Port connected")
})