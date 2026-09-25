let wave =document.getElementById("wave");
window.addEventListener("scroll",function(){
    wave.style.top=(-100+window.scrollY/5)+"px";
});