/* const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '../img/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let framex = 0;
let framey = 0;
let gameFrame = 0;
const staggerFrame = 4;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, framex * spriteWidth, framey * spriteHeight,
         spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrame == 0){
        if (framex < 6) framex++;
        else framex = 0;
    }
    
    gameFrame++;
    requestAnimationFrame(animate);
};

animate(); */