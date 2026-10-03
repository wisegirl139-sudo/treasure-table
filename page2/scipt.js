let per=document.getElementById("per");
let x=50;
document.addEventListener("keydown",function(){
    //i like to move it move it(defomade this joke before) doin keys now tho
    if(e.key=="arrowright"){
        x+=5;
    }
    if(e.key=="arrowleft"){
        x-=5;
    }
    per.style.left=x+"px"
})