const fs =require("fs");

let a = 10;
let b = "hello Kaisse hai aap sab log";

console.log(b);

function sum(a, b) {
    return a + b;
}

fs.readFile("./data.json","utf-8",(err,res)=>{
    console.log(res);
})

setTimeout(()=>{
    console.log("I'm setTimeout");
},3000);

console.log(a);
console.log(sum(3,4));