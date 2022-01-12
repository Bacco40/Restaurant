import homePage from './home.js'
import menu from './menu.js';
import about from './about.js';

export default function contact(){
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
    <div class="page4">
        <div class="text4">
            <div class="Title">Address</div>
            <div class="description">Via Roma 59</div>
            <div class="description">Forno D'ono BS</div>
            <div class="description">25078</div> 
            <div>
                <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11134.787260093215!2d10.3740072!3d45.7572238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc80bdad73b04f690!2sPizzeria%20La%20Bussola!5e0!3m2!1sit!2sit!4v1641836239977!5m2!1sit!2sit" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </div>
        <div class="contact">
            <div class="text3">
                <div class="Title">Opening Hours:</div>
                <div class="hours">
                    <div class="day"><div class="sub1">Thursday:</div><div class="desc2"> 18:00 - 22:00</div></div>
                    <div class="day"><div class="sub1">Friday: </div><div class="desc2">18:00 - 23:30</div></div>
                    <div class="day"><div class="sub1">Saturday:</div><div class="desc2"> 18:00 - 23:30</div></div>
                    <div class="day"><div class="sub1">Sunday:</div><div class="desc2"> 18:00 - 23:30</div></div>
                </div>
            </div>
            <div class="text3">
                <div class="Title">Contact Us:</div>
                <div class="hours">
                    <div class="day"><div class="sub1">Phone:</div><div class="desc2"> 123-456-7890</div></div>
                    <div class="day"><div class="sub1">E-mail: </div><div class="desc2">labussola@notarealemail.com</div></div>
                </div>
            </div>
        </div>
    </div> `;
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
};