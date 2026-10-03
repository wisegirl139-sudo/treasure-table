let per=document.getElementById("per");
let x=50;
let l=false;
let r=false;
document.addEventListener("keydown",function(e){
    //i like to move it move it(defomade this joke before) doin keys now tho
    if(e.key=="ArrowRight"){
        r=true;
    }
    if(e.key=="ArrowLeft"){
        l=true;
    }
    per.style.left=x+"px";
});
document.addEventListener("keyup",function(e){
    if(e.key=="ArrowRight"){
        r=false;
    }
    if(e.key=="ArrowLeft"){
        l=false;
    }
});
function move(){
    if(r){
        x+=3;
    }
    if(l){
        x-=3;
    }
    per.style.left=x+"px";
    requestAnimationFrame(move);
};
move();
