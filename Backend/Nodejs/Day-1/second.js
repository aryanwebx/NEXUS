console.log("I'm second file");

function add(a,b){
    console.log(a+b);
}

function subtract(a,b){
    console.log(a-b);
}

module.exports={add,subtract}
console.log(module.exports)