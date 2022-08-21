var header = document.getElementById("header");
var white = document.getElementById("white");
// console.log(white)
window.onscroll =function(){
    if(window.scrollY >= 2){
        header.style.backgroundColor = "black";
        header.style.transition = ".5s";
        white.classList.add("wh");
    }else{
        header.style.backgroundColor = "transparent";
        white.classList.remove("wh");  
    }
}
