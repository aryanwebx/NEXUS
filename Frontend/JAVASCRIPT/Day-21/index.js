//Create an element



    // const element = document.createElement('li');
    // element.innerHTML = 'hello';

    // const li=document.querySelector('ul');

    // li.appendChild(element);

// Create text node

    // const text = document.createTextNode('Hello World');

    // const li=document.querySelector('ul');
    // li.appendChild(text);


// create attribute Node
// const attribute=document.createAttribute('id');
// attribute.value='div1';

// const div=document.querySelector('div');
// div.setAttributeNode(attribute);

// const div=document.querySelector('div');
// console.log(div.getAttribute('class'));

// div.setAttribute('class','red');
// div.setAttribute('id','div1');

// div.removeAttribute('class');

// Add Node to DOM

const ul=document.querySelector('ul');
// ul.innerHTML+='<li>js</li><li>ts</li>';

// const li=document.createElement('li');
// li.innerHTML='TYPESCRIPT';

// const li1=document.createElement('li');
// li1.innerHTML='JAVASCRIPT';

// ul.append(li,li1);
// ul.prepend(li,li1);

// ul.insertBefore(li,ul.children[1]);

// ul.replaceChild(li,ul.children[1]);


// ul.insertAdjacentElement('beforebegin',li);
// ul.insertAdjacentElement('afterbegin',li1);

// ul.insertAdjacentElement('beforeend',li);
// ul.insertAdjacentElement('afterend',li1);

// ul.insertAdjacentHTML('beforebegin','<li>ts</li>');

// ul.remove();
remove(ul)

ul.removeChild(ul.children[1]);