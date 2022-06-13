const hamburger = document.querySelector(".button1")
const navMenu = document.querySelector(".orders")
const cross = document.querySelector(".x-button") 
const link = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    cross.classList.toggle("active");
    navMenu.classList.toggle("active");
    
} ) 

cross.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    cross.classList.toggle("active");
    navMenu.classList.toggle("active");
    
} ) 



for (var i=0; i < link.length; i++){
    link[i].addEventListener("click",function(){
        hamburger.classList.toggle("active");
        cross.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
}