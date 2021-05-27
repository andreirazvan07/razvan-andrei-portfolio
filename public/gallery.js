// Background-Gallery

function changeBg(){
    
    const images=[
    'url("./carousel/1.png")',
    'url("./carousel/2.png")',
    'url("./carousel/3.png")',
    'url("./carousel/4.png")',
    'url("./carousel/5.png")',
    'url("./carousel/6.png")',
    'url("./carousel/7.png")',
    'url("./carousel/8.png")',
    'url("./carousel/9.png")'
]

const section=document.querySelector('.container-left-img')
const bg=images[Math.floor(Math.random()*images.length)];
section.style.backgroundImage = bg;
};

setInterval(changeBg, 800);



