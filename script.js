function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onmousemove = e => {
    var cursor = document.getElementById('mouseCursor');
    console.log();
    document.getElementById('mouseCursor').style.top = (e.y-200).toString()+"px";
    document.getElementById('mouseCursor').style.left = (e.x-125).toString()+"px";
;
}

document.querySelector('h1').addEventListener("mouseover",async function(){
    n = Math.floor(Math.random()*2)+1;
    for (let i = 0; i<2;i++){
       
        this.classList.add('glitchEffectGreen');
        this.classList.remove('glitchEffectRed');
        await sleep(Math.floor(Math.random()*50)+40);
        this.classList.remove('glitchEffectGreen')
        this.classList.add('glitchEffect');
        await sleep(Math.floor(Math.random()*50)+40);
        this.classList.remove('glitchEffect');
        this.classList.add('glitchEffectRed');
    }
    

})