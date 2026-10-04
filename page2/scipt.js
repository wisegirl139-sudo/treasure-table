let per=document.getElementById("per");
let x=50;
let l=false;
let r=false;
let y=75;
let v=0;
let j=false;
let rst=document.getElementById("rst");
let loser=document.getElementById("loser");
document.addEventListener("keydown",function(e){
    //i like to move it move it(defomade this joke before) doin keys now tho
    per.style.left=x+"px";
    if(e.key=="ArrowUp"&& !j){
        v=14;
        j=true;
    }
    if(e.key=="q"&& dead){
        rst.classList.add("getbig");
        setTimeout(function(){
            location.reload();
        },500);
    }
});
let obs=[];
function spawn(){
    let ob= document.createElement("img");
    let num=Math.floor(Math.random()*4)+1;
    ob.src=num+".png";
    ob.style.position="absolute";    
    let pos=document.getElementById("game").offsetWidth;
    if(obs.length>0){
        let last =obs[obs.length-1];
        let gap=Math.random()*500+150;
        pos=parseInt(last.style.left)+70+gap;
    }
    ob.style.left=pos+"px";
    ob.style.bottom="75px";
    ob.style.width="70px";

    document.getElementById("game").appendChild(ob);
    obs.push(ob);
    return ob;
}
spawn();
spawn();
spawn();
let bg =0;
let dead=false;
let no=0;
function move(){
    if(dead){
        return;
    }
    console.log("move runss");//also temporary 
    bg-=5;
    if(bg<=-851){
        bg=0;
    }//loop de loop
    document.getElementById("game").style.backgroundPosition=bg+"px 0px";
    v-=0.6;
    y+=v;
    if(y<=75){
        y=75;
        v=0;
        j=false
    }
    per.style.bottom=y+"px";
    let p=per.getBoundingClientRect();
    for(let ob of obs){
        let o=ob.getBoundingClientRect();
        let pr=p.right-=3;
        let ol=o.left+=5;
        ob.style.left=(parseInt(ob.style.left)-5)+"px";  
        if(parseInt(ob.style.left)<-80){
            ob.remove();
            obs.splice(obs.indexOf(ob),1);
            no++;
            if(no>=15){
                window.location.href="../index.html";
                return;
            }
            spawn();
        }     
        if(pr>ol && p.left<o.right&& p.bottom>o.top&& p.top<o.bottom && !dead){
            console.log("hit",p.right,o.left);//moree temporaryyyy
            dead=true;
            loser.style.display="block";
        }
    } 


    requestAnimationFrame(move);
};
move();
