const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res)=>{
    res.send('hello');
});

app.listen(port, ()=>{
    console.log("Server is listerning on port "+port);
})