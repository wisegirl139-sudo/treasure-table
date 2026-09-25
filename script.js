let wave =document.getElementById("wave");
let st=-window.innerHeight*0.8;
wave.style.top="-80%";
window.addEventListener("scroll",function(){
    wave.style.top=(st+window.scrollY*1)+"px";
});