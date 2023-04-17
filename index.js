const http=require("http");
const fs=require("fs");
const express= require("express");
const app= express();
const server = http.createServer(app);



let homePage=fs.readFileSync("./index.html","UTF-8",)



app.get("/",(req,res)=>{
    res.statusCode=200;
   
    res.end(homePage)
})
server.listen(8000,()=>{
console.log("connected")
})