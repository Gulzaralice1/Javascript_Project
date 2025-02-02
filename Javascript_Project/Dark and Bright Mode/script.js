const body = document.querySelector("body");
const btn = document.getElementById("btn");
let toggle = true;
function modeToggle(){
    if(body.classList.contains("dark") || toggle){
        body.classList.remove("dark");
        body.classList.add("bright")
        btn.style.marginRight = "0px";
        btn.style.marginLeft = "10px";

    }else{
        body.classList.remove("bright");
        body.classList.add("dark")
        btn.style.marginRight = "20px";
        btn.style.marginLeft = "0px";
    }
    toggle = !toggle
    // body.classList.toggle("dark");
}