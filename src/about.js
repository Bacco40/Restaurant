import homePage from './home.js'
import menu from './menu.js';
import contact from './contact.js';

export default function about(){
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
    <div class="page3">
        <div><img class="about" src="../src/god2.png"><div>
        <div class="text2">
            <div class="Title">For the love of pizza</div>
            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. Incidunt recusandae quibusdam ab, ad quod sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat!</div>
        </div>
    </div> ` ;
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