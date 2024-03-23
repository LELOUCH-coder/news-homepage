const menubtn = document.querySelector(".menu-btn");
const closebtn = document.querySelector(".close-btn");
const wh = document.querySelector(".white-space");

menubtn.addEventListener("click", function() {
    wh.classList.add("show-white-space"); 
});

closebtn.addEventListener("click", function() {
    wh.classList.remove("show-white-space"); 
});