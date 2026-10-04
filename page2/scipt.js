let per=document.getElementById("per");
let x=50;
let l=false;
let r=false;
let y=75;
let v=0;
let j=false;
document.addEventListener("keydown",function(e){
    //i like to move it move it(defomade this joke before) doin keys now tho
    per.style.left=x+"px";
    if(e.key=="ArrowUp"&& !j){
        v=12;
        j=true;
    }
});
let ob= document.createElement("img");
ob.src="4.png";
ob.style.position="absolute";
ob.style.left="850px";
ob.style.bottom="75px";
ob.style.width="70px";
document.getElementById("game").appendChild(ob);
let bg =0;
function move(){
    bg-=3;
    if(bg<=-851){
        bg=0;
    }//loop de loop
    document.getElementById("game").style.backgroundPosition=bg+"px 0px";
    v-=0.5;
    y+=v;
    if(y<=75){
        y=75;
        v=0;
        j=false
    }
    per.style.bottom=y+"px";
    ob.style.left=(parseInt(ob.style.left)-3)+"px";
    requestAnimationFrame(move);
};
move();
