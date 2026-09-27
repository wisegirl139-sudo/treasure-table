let wave =document.getElementById("wave");
let st=-window.innerHeight*0.8;
wave.style.top="20vh";
window.addEventListener("scroll",function(){
    let pos=-95+window.scrollY/5;
    if(pos>-35){
        pos=-35;
    };
    wave.style.transform="translateY("+pos+"%)";
});
//TOTAL cinema( ik its absolute but wtv wtv)
let but=document.getElementById("add");
let scr=document.getElementById("scr");
let lis=document.getElementById("list");
let nco=document.getElementById("ncomp");
let sel=document.querySelectorAll(".select");
let tot=document.getElementById("total");
but.addEventListener("click",function(){
    let num=0;
    let count = 0;
    lis.innerHTML="";
    sel.forEach(function(sels){

        if(sels.checked){
            
            let p=document.createElement("p");
            p.textContent="component"+(count+1)+"-"+sels.dataset.weight+"g";
            lis.appendChild(p);
            num+=Number(sels.dataset.weight);
            count++;
        }
    });
    nco.textContent=count+"components";
    tot.textContent="total:"+num+"g";
    scr.style.display="block";
});
less.addEventListener("click",function(){
    scr.style.display="none";
})
//fih timee
let wh=document.getElementById("wave");
let img=wh.querySelector("img");


let fih=document.getElementById("fih");
let fs=[];
let fw=45;
let gx=35;
let gy=35;
let ft=["1.png","2.png","3.png"];
img.addEventListener("load",function(){
    let ww=img.offsetWidth;
    let hh=img.offsetHeight;
    for(let y=80; y<hh-180;y+=gy){
        let row=Math.floor(y/gy);
        for (let x=20;x<ww;x+=gx){
            let f=document.createElement("img");
            f.src=ft[Math.floor(Math.random()*ft.length)];
            f.className="fishh";
            let xx=x;
            if(row %2 ==1){
                xx+=gx/2;
            };
            f.style.left=xx+"px";
            f.style.top=y+"px";
            fih.appendChild(f);
            fs.push({
                el:f,
                x:xx,
                y:y,
                sp:0.3+Math.random()*0.8
            });
        }
    }
    swim();
});
//fishies move
function swim(){
    fs.forEach(function(f){
        f.x+=f.sp;
        if(f.x>fih.offsetWidth){
            f.x=-50;
        }
        f.el.style.left=f.x+"px";
    });
    requestAnimationFrame(swim);
}
