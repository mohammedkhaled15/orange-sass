let menuBtn = document.querySelector("header .menu-btn")
let navbar = document.querySelector("ul.navbar")
let header  = document.querySelector("header")

menuBtn.addEventListener("click", function(){
    if(getComputedStyle(navbar).visibility === "hidden"){
        navbar.style.cssText = " visibility:visible; top: calc(100% + 25px); opacity:1 "
        header.style.cssText = "padding-bottom:250px"
    }else{
        navbar.style.cssText = " visibility:hidden; top:100%; opacity:0 "
        header.style.cssText = "padding-bottom:0px"
    }
})
