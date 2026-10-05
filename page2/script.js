let wave =document.getElementById("wave");
wave.style.top="0"; 
wave.style.transform="translateY(-85%)";
function move(){
    let pos=-85+window.scrollY/5;
    if(pos>0){
        pos=0;
    }
    wave.style.transform="translateY("+pos+"%)";
}
move();
window.addEventListener("scroll",function(){
    move();
});

//TOTAL cinema( ik its absolute but wtv wtv)
let less=document.getElementById("less")
let but=document.getElementById("add");
let scr=document.getElementById("scr");
let lis=document.getElementById("list");
let nco=document.getElementById("ncomp");
let sel=document.querySelectorAll(".select");
let tot=document.getElementById("total");
sel.forEach(function(s){
    s.addEventListener("change",function(){
        let item=s.closest(".item");
        if(s.checked){
            item.style.transform="translateY(-10px)";
            item.style.boxShadow="18px 18px 0 #2d1902, inset 0 0 0 3px #a66b38";
        }
        else{
            item.style.transform="translateY(0)";
            item.style.boxShadow="6px 6px 0 #2d1902, inset 0 0 0 3px #a66b38";
        }
    });
});
but.addEventListener("click",function(){
    let num=0;
    let count = 0;
    lis.innerHTML="";
    sel.forEach(function(sels){

        if(sels.checked){            
            let item=sels.closest(".item");
            let qty=Number(item.querySelector(".qty").textContent);
            let p=document.createElement("p");
            p.textContent="component"+(count+1)+"x"+qty+"="+Number(sels.dataset.weight)*qty+"g";
            lis.appendChild(p);

            num+=Number(sels.dataset.weight)*qty;
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
let gx=90;
let gy=75;
let ft=["1.png","2.png","3.png"];
img.addEventListener("load",function(){
    let ww=img.offsetWidth;
    let hh=img.offsetHeight;
    for(let y=100; y<hh-50;y+=gy){
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
                sp:0.3+Math.random()*1.5
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
        f.el.style.top=f.y+"px";
    });
    requestAnimationFrame(swim);
}
let items=document.querySelectorAll(".item");
items.forEach(function(item){
    let minus=item.querySelector(".minus");
    let plus=item.querySelector(".plus");
    let qty=item.querySelector(".qty");
    plus.addEventListener("click",function(){
        let num=Number(qty.textContent);
        num++;
        qty.textContent=num;
    });
    minus.addEventListener("click",function(){
        let num =Number(qty.textContent);
        if(num>1){
            num--;
        }
        qty.textContent=num
    });
});
//let current=0;
//let its=document.querySelectorAll(".item");
//document.addEventListener("keydown",function(e){
    //if(e.key=="ArrowRight"){
      //  current++;
        //if(current>=its.length){
          //  current=0;
        //}
    //}
    //if(e.key=="ArrowLeft"){
      //  current--;
        //if(current<0){
          //  current=its.length-1;
        //}
    //}
    //its.forEach(function(item){
      //  item.style.transform="translateY(0)";
        //item.style.boxShadow="6px 6px 0 #2d1902"
    //})
//})