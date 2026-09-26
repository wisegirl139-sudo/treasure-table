let wave =document.getElementById("wave");
let st=-window.innerHeight*0.8;
wave.style.top="20vh";
window.addEventListener("scroll",function(){
    
    let pos=20+window.scrollY/window.innerHeight*100;
    if(pos>100){
        pos=100;
    }
    wave.style.top=pos+"vh";
});