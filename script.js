let wave =document.getElementById("wave");
let st=-window.innerHeight*0.8;
wave.style.top="20vh";
window.addEventListener("scroll",function(){
    wave.style.top=(20+window.scrollY/window.innerHeight*100)+"vh";
});