function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.querySelector('h1').addEventListener("mouseover",async function(){
    n = Math.floor(Math.random()*2)+1;
    for (let i = 0; i<n;i++){
        this.classList.add('glitchEffectGreen');
        this.classList.remove('glitchEffectRed');
        await sleep(Math.floor(Math.random()*50)+90);
        this.classList.remove('glitchEffectGreen')
        this.classList.add('glitchEffect');
        await sleep(Math.floor(Math.random()*50)+70);
        this.classList.remove('glitchEffect');
        this.classList.add('glitchEffectRed');
    }
})