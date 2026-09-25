let wave =document.getElementById("wave");
window.addEventListener("scroll",function(){
    wave.style.top=(-1500+window.scrollY/2)+"px";
});