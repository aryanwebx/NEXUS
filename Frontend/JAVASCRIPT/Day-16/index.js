/*
<-------------------- Reduce -------------------->

The reduce() method in JavaScript is used to reduce an array to a single value by executing a callback function on each element of the array.It is very useful for operations like summing numbers, flattening arrays, counting instances, and more.

On each iteration, reduce:
1.takes the accumulator(the result from the previous iteration),
2.the current value(element of the array),
3.processes them through the callback,
4.and returns a new accumulator value for the next iteration.

 Important Note : If you omit the initial value, the first element of the array will be used as the initial accumulator, and the loop will start from the second element.


arr = [10, 20, 30, 40, 50];

const result = arr.reduce((acc, curr) => {
    return acc+=curr
}, 0)

console.log(result);

arr = ["orange", "apple", "orange", "mango", "orange", "apple", "orange", "mango", "orange", "apple"];

const result = arr.reduce((acc, curr) => {

    if (acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr] = 1;
    return acc;
}, {})



const result=arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr)?acc[curr]++:acc[curr]=1;
    return acc;
},{})
console.log(result);

*/