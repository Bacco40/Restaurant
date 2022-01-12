import menu from './menu.js'
import about from './about.js';
import contact from './contact.js';

export default function homePage(){
    let content=document.querySelector('#content')
    while(content.firstChild){
        content.removeChild(content.firstChild); 
    }
    content.innerHTML=`
    <div class="header">
        <div class="name">Pizzeria La Bussola</div>
        <ul>
            <li class="option" value="1">Menù</li>
            <li class="option" value="2">About</li>
            <li class="option" value="3">Contact</li>
        </ul>
    </div>
    <div class="page">
        <div class="text">
            <div class="Title">Welcome to Pizzeria La Bussola</div>
            <div class="sub">-- Authentic Pizza | Locally Sourced --</div>
            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.</div>
            <div>
                <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11134.787260093215!2d10.3740072!3d45.7572238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc80bdad73b04f690!2sPizzeria%20La%20Bussola!5e0!3m2!1sit!2sit!4v1641836239977!5m2!1sit!2sit" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </div>
        <div ><img class="pic" src="./images/jesus.webp"></div>
    </div> `
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
}

