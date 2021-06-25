const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const grey = document.querySelector(".greyColor");
const red = document.querySelector(".redColor");
const yellow = document.querySelector(".yellowColor");
const green = document.querySelector(".greenColor");
const blue = document.querySelector(".blueColor");
const orange = document.querySelector(".orangeColor");
const home= document.querySelector(".homeColor");
const kleur = document.querySelector(".kleur")

console.log(kleur);
    hamburger.addEventListener('click', function(){
    menu.classList.toggle("menu");
})

grey.addEventListener('click', function(){
    document.body.style.backgroundColor = "grey";
    kleur.innerHTML = "Grey";
    menu.classList.toggle('menu');
})

red.addEventListener('click', function (){
    document.body.style.backgroundColor = "red";
    kleur.innerHTML = "Red";
    menu.classList.toggle('menu');
})

yellow.addEventListener('click', function (){
    document.body.style.backgroundColor = "yellow";
    kleur.innerHTML = "Yellow";
    menu.classList.toggle('menu');
})

green.addEventListener('click', function (){
    document.body.style.backgroundColor = "green";
    kleur.innerHTML = "Green";
    menu.classList.toggle('menu');
})

blue.addEventListener('click', function (){
    document.body.style.backgroundColor = "blue";
    kleur.innerHTML = "Blue";
    menu.classList.toggle('menu');
})

orange.addEventListener('click', function (){
    document.body.style.backgroundColor = "orange";
    kleur.innerHTML = "Orange";
    menu.classList.toggle('menu');
})

home.addEventListener('click', function (){
    document.body.style.backgroundColor = "white";
    kleur.innerHTML = "";
    menu.classList.toggle('menu');
})