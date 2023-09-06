import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log('server is running on ${port}');
})

// this is how we set up the server but if we want to redirect it to local host then 
// refer the http code 
