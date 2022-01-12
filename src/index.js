import './style.css';
import homePage from './home.js'
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';

let content=document.querySelector('#content');

content=(() =>{
    const footer=document.createElement('div');
    footer.classList.add("footer");
    footer.textContent="Copyright © Matteo Bacchetti - The Odin Project 2021";
    document.body.appendChild(footer);
    homePage();
    const name=document.querySelector('.name');
    name.addEventListener('click',()=>{homePage();});
    const option=document.querySelectorAll('.option');
    option.forEach((option)=>{
        option.addEventListener('click',()=>{
            if(option.value=="1"){
                menu();
            }else if(option.value=="2"){
                about();
            }else if(option.value=="3"){
                contact();
            }
        })
    })
})();
