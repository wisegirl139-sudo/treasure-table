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
let fih=document.getElementById("fih");
let img=document.querySelector("#wave img");

function sizeFish(){
    fih.style.height=img.offsetHeight+"px";
}

if(img.complete){
    sizeFish();
}
else{
    img.addEventListener("load",sizeFish);
}

window.addEventListener("resize",sizeFish);