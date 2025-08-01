let quotes = ["The only way to do great work is to love what you do. - Steve Jobs", "In the end, we only regret the chances we didn't take. - Lewis Carroll", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", "Life is what happens when you're busy making other plans. - John Lennon", "You miss 100% of the shots you don't take. - Wayne Gretzky", "The purpose of our lives is to be happy. - Dalai Lama", "In the middle of difficulty lies opportunity. - Albert Einstein", "Don’t let yesterday take up too much of today. - Will Rogers", "Believe you can and you're halfway there. - Theodore Roosevelt", "Do what you can, with what you have, where you are. - Theodore Roosevelt", "The best way to predict the future is to create it. - Peter Drucker", "You must be the change you wish to see in the world. - Mahatma Gandhi", "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama", "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson", "Dream big and dare to fail. - Norman Vaughan", "It does not matter how slowly you go as long as you do not stop. - Confucius", "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius", "The journey of a thousand miles begins with one step. - Lao Tzu", "What we think, we become. - Buddha", "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"];

// function quoteGenerator(){
//     let quote = document.getElementById("quote");
//     quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
// }

// setInterval(quoteGenerator,3000)


// random = function(){
//     return Math.floor(Math.random()*256);
// }


// function changeColor(){
//     let color = `rgb(${random()},${random()},${random()})`;
//     document.body.style.backgroundColor = color;
// }

// setInterval(changeColor,3000)

// function containercolor(){
//     let color= `rgb(${random()},${random()},${random()})`;
//     document.getElementsByClassName("container")[0].style.backgroundColor = color;
// }

// setInterval(containercolor,3000)

const button = document.querySelector("button");
button.addEventListener('click',(event)=>{
    let quote=document.getElementById("quote");
    quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.key);
    console.log(event.clientX);
    console.log(event.clientY);
})

