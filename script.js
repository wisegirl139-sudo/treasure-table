let wave =document.getElementById("wave");
let st=-window.innerHeight*0.8;
wave.style.top="20vh";
window.addEventListener("scroll",function(){
    let pos=-95+window.scrollY/5;
    if(pos>-25){
        pos=-25;
    };
    wave.style.transform="translateY("+pos+"%)";
});ss