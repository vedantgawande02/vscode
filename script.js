let taskbar = document.getElementsByClassName("taskbar")[0]
let menu = document.getElementsByClassName("menu")[0]
console.log("clicked");
taskbar.addEventListener("click", () =>{
    
    if(menu.style.bottom =="50px"){
        menu.style.bottom = "-650px"
    }
    else{
        menu.style.bottom = "50px"
    }
} )