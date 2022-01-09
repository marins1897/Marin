var hamburger = document.querySelector (".hamburger ");
var mobile_menu = document.querySelector (".nav-list ul ");
var menu_item = document.querySelectorAll (".nav-list ul a");
var header = document.querySelector (".header.container ");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle ("active");
    mobile_menu.classList.toggle ("active");
});

document.addEventListener(" scroll" , () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";

    }
    else {
        header.style.backgroundColor = "transparent" ;
    }
});
 
menu_item.forEach((item) => {
    item.addEventListener("click", ()=> {
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
});

