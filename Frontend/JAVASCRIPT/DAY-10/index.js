// //Creating Objects
// //Object Literal Syntax
// let obj = {
//     Name: "Aryan",
//     Branch: "CSE-AIML",
//     RollNo: "2300971530036",
//     CGPA: "7.55",
//     Year: "2nd"
// }


//<---- Creation of object using class ---->

// class Student{
//     constructor(name,age,roll_no){
//         this.name=name;
//         this.age=age;
//         this.roll_no=roll_no;
//     }
// }

// let student1 = new Student("Aryan",21,1);
// let student2 = new Student("Amarjeet",20,2);
// console.log(student1,student2);

// console.log(obj)

// //new Object() syntax
// let obj1 = new Object();
// obj1.Name="Amarjeet";
// obj1.Branch="CSE-AIML";
// obj1.RollNo="2300971530020";
// obj1.CGPA="7.59";
// obj1.Year="2nd";

// console.log(obj1)

// // class syntax to make object creation more structured.
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
// }
// const myCar = new Car("Ford", "Mustang", 2021);
// console.log(myCar)

// let obj={
//     car:"Mercedes Benz",
//     model:"ZY123",
//     year:2020
// };

// console.log(Object.keys(obj)) //give array of keys
// console.log(Object.values(obj)) //give array of values
// console.log(Object.entries(obj)) //give nested array with key-value pair e.g. [ [ 'car', 'Mercedes Benz' ], [ 'model', 'ZY123' ], [ 'year', 2020 ] ]

// //destructuring of an object

// const {car,model}=obj;
// console.log(car);
// console.log(model);



// <------- Spread operator -------->

// const arr=[1,2,3,4,5,6];
// const arr1=[...arr] //cloning

// console.log(arr1);

// const arr1=[1,2,3];
// const arr2=[5,6,7];
// const merged = [...arr1, ...arr2] // merging

// console.log(merged);

// const num=[1,2,3];

// console.log(Math.max(...num));// used to pass as an function argument



//for objects

// const obj1={
//     id:1,
//     name:"Aryan"
// }

// const obj2={...obj1};
// console.log(obj2)


// const account={
//     id:23,
//     Balance:24,
//     name:"himanshu"
// }

// const marks={
//     english:34,
//     math:23
// }

// const mergedObject={...account,...marks}
// console.log(mergedObject)




//<---------- Rest operator ---------->

//function Parameter

// function sum(...nums) {
//     return nums.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10




