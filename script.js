var modal = document.getElementById("modalBlock");
var button = document.getElementById("modal-button");
var span = document.getElementsByClassName("close")[0];
var myModel = document.querySelector(".modal-content");

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },
});

const headerSwiper = new Swiper('.swiper-container-header', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-header',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nx',
        prevEl: '.swiper-button-pr',
    },
});

button.onclick = function(){
    modal.classList.add('visible');
}
span.onclick = function (){

    modal.classList.remove('visible');
}
window.onclick = function (event){
    if(event.target == modal){
        modal.classList.remove("visible");
    }
}