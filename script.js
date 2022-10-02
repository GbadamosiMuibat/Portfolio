var header = document .querySelector("header");
window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})

let menuBtn = document .querySelector("#menu-icon");
let navBar = document .querySelector(".navbar");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    navBar.classList.toggle('active');
 };

 window.onscroll = () =>{
    menuBtn.classList.remove('bx-x');
    navBar.classList.remove('active');
 };

 var loader = document .querySelector(".preloader")

     loader.classList.add("loader-hidden")
 window.addEventListener("transitioned" , function(){
    document.body.removeChild(loader)
 })

