const express = require ("express");
const app = express();

const fs= require("fs");


app.get("/",(req, res)=> {
   
    fs.readFile('./index.html','utf8',(err,data)=>{
        if(err) throw err
        res.send(`${data}`);
    })
})

app.get('/ofir',(req, res)=> {

})

let port = process.env.PORT|| 3000;

app.listen(port,function(){
    console.log('server listen on port',port)
})


