let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
}


let searchform= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitems.classList.remove('active');
}

let cartitems= document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick=()=>{
    cartitems.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}
window.onscroll=()=>{ 
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
}