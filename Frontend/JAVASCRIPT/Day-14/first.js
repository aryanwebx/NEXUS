// const obj={};

// Object.defineProperty(obj,"name",{
//     value:"Aryan",
//     writable:true,
//     enumerable:true,
//     configurable:true
// })

// console.log(Object.keys(obj))


// const obj={
//     name:"Aryan",
//     profession:"Developer",
//     work:"Problem Solving"
// }

// console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// console.log(obj.hasOwnProperty("name")) Used to know whether this property exist in object or not

// const obj = {};

// Object.defineProperties(obj,
//     {
//         "name":
//         {
//             value: "Aryan",
//             writable: false,
//             enumerable: true,
//             configurable: true
//         },
//         "Age":
//         {
//             value:20,
//             writable:true,
//             enumerable:true,
//             configurable:true
//         },
//         "place":
//         {
//             value:"Noida",
//             writable:true,
//             enumerable:true,
//             configurable:false
//         }
//     }
// )


const obj={
    name:"Aryan",
    age:23,
    city:"Noida"
}

Object.defineProperty(obj,"name",{
    writable:false,
    enumerable:true,
    configurable:true
})

Object.defineProperty(obj, "name", {
    
    enumerable:false
})


obj.name="Rohan"

for (let key in obj){
    console.log(key,":",obj[key])
}