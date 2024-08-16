function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onmousemove = e => {
    if (document.getElementById('customCursor').classList.contains('mouseCursor')){
    document.getElementById('customCursor').style.transition = '0s';
    document.getElementById('customCursor').style.top = (e.y-125).toString()+"px";
    document.getElementById('customCursor').style.left = (e.x-125).toString()+"px";}

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

document.getElementById('pythonButton').addEventListener('click',async function(){
    document.getElementById('customCursor').style.transition = '0.1s'

    document.getElementById('customCursor').classList.add('screenInverted');
    document.getElementById('customCursor').classList.remove('mouseCursor');
    
    document.getElementById('customCursor').style.left = "0px";
    document.getElementById('customCursor').style.top = "0px";
    await sleep(100);
    document.getElementById('customCursor').style.transition = '0s';

})

document.getElementById('webDevButton').addEventListener('click',async function(e){
    document.getElementById('customCursor').style.transition = '0.1s'

    document.getElementById('customCursor').classList.add('mouseCursor');

    document.getElementById('customCursor').classList.remove('screenInverted');

    document.getElementById('customCursor').style.left = (e.clientX-125).toString() +"px";
    document.getElementById('customCursor').style.top = (e.clientY-125).toString() +"px";
    await sleep(100);
    document.getElementById('customCursor').style.transition = '0s';



})