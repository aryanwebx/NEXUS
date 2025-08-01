const container = document.getElementById('container');
container.addEventListener('click', (event) => {
   if(event.target.tagName==='BUTTON'){
        const id = event.target.id;
       const body= document.querySelector('body');
       body.style.backgroundColor = id;
   }
} );