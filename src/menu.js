import homePage from './home.js'
import about from './about.js';
import contact from './contact.js';

export default function menu(){
    let content=document.querySelector('#content')
    while(content.firstChild){
        content.removeChild(content.firstChild); 
    }
    class pizzas{
        constructor(img,name,description,price){
            this.img=img;
            this.name=name;
            this.description=description;
            this.price=price;
        };
    }
    const myMenu=[];
    let index=0;
    function addPizza(pizza){
        myMenu[index]=pizza;
        index=index+1;
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
    <div class="page2">
    </div> `;
    const marghe= new pizzas('./images/margherita.jpg','Margherita','Mozzarella and tomato on a Classic base ','6€');
    const formaggi= new pizzas('./images/Picante.jpg','4 Formaggi Piccante','Pecorino, Italian blue cheese, mozzarella and Gran Milano cheese with tomato and rosemary. Drizzled with smoky chilli jam.','8€')
    const Salami=new pizzas('./images/Salami.jpg','Salami','Pepperoni, mozzarella and tomato on a Classic base.','8€')
    const Pancetta=new pizzas('./images/Pancetta.jpg','Pollo Pancetta','Chicken, crispy Italian pancetta, tomato with garlic, red & yellow roasted peppers, mozzarella and parsley.','10€')
    const Veneziana=new pizzas('./images/veneziana.jpg','Veneziana','Pine kernels, red onion, capers, black olives, sultanas, mozzarella and tomato on a Classic base .','8€')
    const Sbocco=new pizzas('./images/sbocco.jpg','Sloppy Giuseppe','Hot spiced beef, green pepper, red onion, mozzarella and tomato on a Classic base.','10€')
    addPizza(marghe);
    addPizza(formaggi);
    addPizza(Salami);
    addPizza(Pancetta);
    addPizza(Veneziana);
    addPizza(Sbocco);
    const page2=document.querySelector('.page2');
   for(let i=0;i<index;i++){
        let menu=document.createElement('div');
        menu.classList.add("pizza");
        menu.innerHTML=`
            <div><img class="pizzaPic" src="${myMenu[i].img}"></div>
            <div class ="text1">
                <div><div class="Title">${myMenu[i].name}</div>
                <div class="description">${myMenu[i].description}</div></div>
                <div class="sub">${myMenu[i].price}</div>
            </div>`
        page2.appendChild(menu);
    }
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