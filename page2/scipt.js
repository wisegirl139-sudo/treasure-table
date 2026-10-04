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
        v=13.5;
        j=true;
    }
    if(e.key=="q"&& dead){
        location.reload();
    }
});

function spawn(){
    let ob= document.createElement("img");
    ob.src="4.png";
    ob.style.position="absolute";
    ob.style.left=document.getElementById("game").offsetWidth+"px";
    ob.style.bottom="75px";
    ob.style.width="70px";
    document.getElementById("game").appendChild(ob);
    return ob;
}
let loser=document.getElementById("loser");
let ob=spawn();
let bg =0;
let dead=false;
function move(){
    console.log("move runss");//also temporary 
    bg-=5;
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
    ob.style.left=(parseInt(ob.style.left)-5)+"px";
    if(parseInt(ob.style.left)<-80){
        ob.remove();
        ob=spawn();
    }    
    let p=per.getBoundingClientRect();
    let o=ob.getBoundingClientRect();
    console.log("pirate:",p.left,p.right,p.top,p.bottom,"obstacle:",o.left,o.right,o.top,o.bottom);
    p.right-=3;    
    o.left+=5;
    console.log("p bottom:",p.bottom,"ob top:",o.top);

    if(p.right>o.left && p.left<o.right&& p.bottom>o.top&& p.top<o.bottom && !dead){
        console.log("hit",p.right,o.left);//moree temporaryyyy
        dead=true;
        loser.style.display="block";
    }
    requestAnimationFrame(move);
};
move();
