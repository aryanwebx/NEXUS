// Creating server using Nodejs using http module


const http = require("http");

const server = http.createServer((req,res)=>{
    if (req.url=="/"){
        res.end("Hello Coder army");
    }
    else if(req.url=="/contact"){
        res.end("This is Contact Page");
    }
    else if(req.url=="/about"){
        res.end("This is About Page");
    }
    else{
        res.end("This Page is not found");
    }
});

server.listen(4000,()=>{
    console.log("Im listening at port number 4000");    
})