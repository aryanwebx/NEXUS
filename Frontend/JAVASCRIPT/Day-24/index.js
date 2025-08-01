const form = document.querySelector('form');

// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{  
//     console.log(event.target.value);
// })

// form.addEventListener('focus', (event)=>{
//     console.log(event.target.value);
// })

form.addEventListener('submit',(event)=>{       
    event.preventDefault();
    const data = new FormData(form);
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

    for(let [key,value] of data.entries())
        console.log(`${key} : ${value}`);

   
});

