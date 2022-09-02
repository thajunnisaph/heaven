const myform=document.querySelector('#myform');

const name=document.querySelector('#name');

const email=document.querySelector('#email');

const msg=document.querySelector('.msg');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();

    if(name.value===''||email.value==='')

{msg.innerHTML='please enter all fields';

setTimeout(() => msg.remove(),3000);   

}

else{

console.log(`name: ${name.value} email:${email.value} `);

}

name.value='';

email.value='';

}