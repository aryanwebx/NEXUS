// Practice 

const http = require("http");

const server = http.createServer((req,res)=>{

    res.end("HEllo EVEryone");
})

server.listen(3000,()=>{
    console.log("I'm Listening at Port Number 3000");
    
})