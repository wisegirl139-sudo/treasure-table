

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";


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
let printdata={
    cableClip:{
        10:{weight:7.34 ,time:"00:23:17"},
        15:{weight:7.76,time:"00:23:56"},
        30:{weight:8.85 ,time:"00:27:10"},
        50:{weight:10.2 , time:"00:32:37"}
    },
    cableClipScrew:{
        10:{weight:1.87, time:"00:13:27"},
        15:{weight:1.88, time:"00:13:27"},
        30:{weight:1.88, time:"00:13:27"},
        50:{weight:1.88, time:"00:13:27"}
    },
    cableClipScrewSingle:{
        10:{weight:0.68, time:"00:05:20"},
        15:{weight:0.68, time:"00:05:20"},
        30:{weight:0.68, time:"00:05:20"},
        50:{weight:0.68, time:"00:05:20"}
    },
    cupHolder:{
        10:{weight:106.41, time:"05:06:00"},
        15:{weight:117.23, time:"00:05:50"},
        30:{weight:149, time:"00:08:30"},
        50:{weight:191.12, time:" 00:11:56"}
    },
    dowelGrip:{
        10:{weight:4.86,time:"00:20:32"},
        15:{weight:4.97, time:"00:20:51"},
        30:{weight:5.33, time:"00:22:31"},
        50:{weight:5.78, time:"00:24:38"}    
    },
    dowelGripBolt :{
        10:{weight:2.88,time:"00:16:15"},
        15:{weight:2.90,time:"00:16:23"},
        30:{weight:3.00,time:"00:16:46"},
        50:{weight:3.10,time:"00:17:29"}    
    },
    dowelGripNut:{
        10:{weight:2.51,time:"00:12:54"},
        15:{weight:2.59,time:"00:12:56"},
        30:{weight:2.87,time:"00:13:18"},
        50:{weight:3.19,time:"00:13:50"}    
    },
    draw :{
        10:{weight:359.15,time:"10:15:00"},
        15:{weight:379.53,time:"11:37:00"},
        30:{weight:447.66,time:"16:38:00"},
        50:{weight:530.69,time:"22:42:00"}    
    },
    flangeHanger :{
        10:{weight:51.28,time:"02:13:00"},
        15:{weight:58.35,time:"02:28:00"},
        30:{weight:79.21,time:"03:55:00"},
        50:{weight:105.85,time:"06:04:00"}    
    },
    headphoneAmpMount :{
        10:{weight:68.75,time:"02:21:00"},
        15:{weight:74.51,time:"02:42:00"},
        30:{weight:92.00,time:"03:58:00"},
        50:{weight:112.34,time:"05:30:00"}    
    },
    headphoneClamp :{
        10:{weight:101.03,time:"04:40:00"},
        15:{weight:113.98,time:"05:04:00"},
        30:{weight:151.29,time:"07:08:00"},
        50:{weight:199.59,time:"10:24:00"}    
    },
    laptopMount:{
        10:{weight:445.55,time:"15:51:00"},
        15:{weight:499.12,time:"19:13:00"},
        30:{weight:659.20,time:"31:38:00"},
        50:{weight:863.56,time:"47:56:00"}    
    },
    micClip:{
        10:{weight:13.43,time:"00:57:28"},
        15:{weight:13.57,time:"00:57:54"},
        30:{weight:14.21,time:"01:00:00"},
        50:{weight:14.81,time:"01:04:00"}    
    },
    penHolder:{
        10:{weight:81.43,time:"07:54:00"},
        15:{weight:83.12, time:"08:01:00"},
        30:{weight:88.29, time:"08:25:00"},
        50:{weight:95.21, time:"08:56:00"}
    }, 
    phoneStandCharger:{
        10:{weight:58.67,time:"03:14:00"},
        15:{weight:61.02, time:"03:19:00"},
        30:{weight:67.36, time:"03:39:00"},
        50:{weight:74.86, time:"04:08:00"}
    }, 
    screenTopMount:{
        10:{weight:9.56, time:"00:58:02"},
        15:{weight:9.80, time:"00:58:49"},
        30:{weight:10.69, time:"00:59:00"},
        50:{weight:11.73, time:"01:01:00"}
    }, 
    sdHolder:{
        10:{weight:38.30, time:"01:32:00"},
        15:{weight:41.48, time:"01:44:00"},
        30:{weight:50.99, time:"02:27:00"},
        50:{weight:63.18, time:"03:21:00"}
    }, 
    snapFit:{
        10:{weight:2.43, time:"00:25:10"},
        15:{weight:2.43, time:"00:25:10"},
        30:{weight:2.43, time:"00:25:10"},
        50:{weight:2.43, time:"00:25:10"}
    }, 
    speakerMount:{
        10:{weight:176.15, time:"06:55:00"},
        15:{weight:181.36, time:"07:14:00"},
        30:{weight:200.54, time:"08:37:00"},
        50:{weight:222.27, time:"10:27:00"}
    }, 
    tabletStand:{
        10:{weight:216.42, time:"08:00:00"},
        15:{weight:222.73, time:"08:33:00"},
        30:{weight:255.08, time:"10:50:00"},
        50:{weight:292.06, time:"13:36:00"}
    }, 
    topPlate:{
        10:{weight:112.06, time:"05:17:00"},
        15:{weight:123.04, time:"05:19:00"},
        30:{weight:124.95, time:"05:29:00"},
        50:{weight:126.76, time:"05:48:00"}
    }, 
    verticalStand:{
        10:{weight:58.74, time:"01:56:00"},
        15:{weight:66.70, time:"02:26:00"},
        30:{weight:88.26, time:"04:01:00"},
        50:{weight:116.52,time:"06:07:00"}
    } 
}
let infil=document.getElementById("infil");
function updateWeights(){
    let per=infil.value;
    document.querySelectorAll(".item[data-part]").forEach(function(item){
        let part =item.dataset.part;
        let data=printdata[part];
        if(!data||!data[per]){
            console.log("missing data for" , part,percent);//precautions andwarnings are very very important
            return;
        }
        let weight=data[per].weight;
        let p=item.querySelector(".weight");
        if(p){
            p.textContent=weight+"g";
        }
    });
}
infil.value="10";
updateWeights();
infil.addEventListener("change",updateWeights);
//fih timee
let wh=document.getElementById("wave");
let img=wh.querySelector("img");


let fih=document.getElementById("fih");
let fs=[];
let fw=45;
let gx=90;
let gy=75;
let ft=["1.png","2.png","3.png"];
function fishies(){
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
};
if(img.complete&&img.naturalWidth>0){
    fishies();
}else{
    img.addEventListener("load",fishies,{once:true});
}
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

document.querySelectorAll(".model[data-model]").forEach(box=>{
    const sce= new THREE.Scene();
    const lca = new THREE.PerspectiveCamera(45,1,0.5,100); //lca stands for lights camera action i can do these now bc i dont have to worrry tm abt getting first time logic wrong
    const render= new THREE.WebGLRenderer({
        alpha:true,
        antialias:false
    });
    render.setPixelRatio(1);
    render.setSize(box.clientWidth,box.clientHeight);
    box.appendChild(render.domElement);
    sce.add(new THREE.HemisphereLight(0xffffff, 0x604020, 3));
    const load= new OBJLoader();
    const pivot=new THREE.Group();
    sce.add(pivot);
    load.load(box.dataset.model.trim(),obj=>{
        obj.traverse(part=>{
            if(part.isMesh){
                part.material=new THREE.MeshStandardMaterial({
                    color:0xa66b38
                });
            }
        });
        const bounds= new THREE.Box3().setFromObject(obj);//done this section like 10 times omg overall(not even a hyperbole) 
        const size= bounds.getSize(new THREE.Vector3());
        const maxsize=Math.max(size.x,size.y,size.z);
        if(!maxsize||!Number.isFinite(maxsize)) return;
        obj.scale.setScalar(1.5/maxsize);
        const newbounds= new THREE.Box3().setFromObject(obj);
        const centre= newbounds.getCenter(new THREE.Vector3());
        obj.position.sub(centre);
        pivot.add(obj);
        lca.position.set(3,2,4);
        lca.lookAt(0,0,0);
        
    },undefined,error => {
        console.error("Model failed:",box.dataset.model,error);
    });
    const controls= new OrbitControls(lca,render.domElement);
    controls.minPolarAngle=0.3;
    controls.target.set(0,0,0);
    controls.maxPolarAngle=Math.PI/2;
    controls.minDistance=2;
    controls.maxDistance=10;
    controls.enableDamping=true; //rather damp in here no?
    controls.autoRotate=false;
    //animating time!!!!
    function animate(){
        requestAnimationFrame(animate);
        const wid= box.clientWidth;
        const hei= box.clientHeight;
        if(wid>0&&hei>0){
            render.setSize(wid,hei,false);
            lca.aspect=wid/hei;
            lca.updateProjectionMatrix(); //bet you cant escape the matrix
            pivot.rotation.y+=0.01;
            controls.update();
            render.render(sce,lca);
        }
    }
    animate();

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