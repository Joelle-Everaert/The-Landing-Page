// function background aléatoir
random_bg();

function random_bg() {
    const bg = [
        'url("./assets/background1.jpeg")',
        'url("./assets/background2.jpeg")',
        'url("./assets/background3.jpeg")',
        'url("./assets/background4.jpeg")',
        'url("./assets/background5.jpeg")',
        'url("./assets/background6.jpeg")',
        'url("./assets/background7.jpeg")',
    ]
    const body = document.body;
    const random_img = bg[Math.floor(Math.random() * bg.length)];
    
    body.style.backgroundImage = random_img;
    
} 
setInterval(random_bg, 60000);




