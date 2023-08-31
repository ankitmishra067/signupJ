const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send("Okay")
})

const port =8080;

app.listen(port,()=>{
    console.log("Server is listening on port 8080");
});