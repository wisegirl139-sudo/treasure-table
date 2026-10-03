let per=document.getElementById("per");
let x=50;
document.addEventListener("keydown",function(e){
    //i like to move it move it(defomade this joke before) doin keys now tho
    if(e.key=="ArrowRight"){
        x+=5;
    }
    if(e.key=="ArrowLeft"){
        x-=5;
    }
    per.style.left=x+"px";
});