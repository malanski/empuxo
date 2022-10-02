const canvas = document.getElementById('canvas1'); // Canvas SetUp
const ctx = canvas.getContext('2d'); // Canvas SetUp
canvas.width = window.innerWidth; // Canvas SetUp
canvas.height = window.innerHeight; // Canvas SetUp
ctx.globalCompositeOperation = 'destination-over'


const canvas2 = document.getElementById('canvas2'); // Canvas SetUp
const ctx2 = canvas2.getContext('2d'); // Canvas SetUp
canvas2.width = window.innerWidth / 2 ; // Canvas SetUp
canvas2.height = window.innerHeight / 2; // Canvas SetUp
ctx2.globalCompositeOperation = 'destination-over'

// let size = 20;
// let positionX = canvas.width/2;
// let positionY = canvas.height/2;
// let angle = 0;

// let hue = 120;
let  hue = parseInt(Math.random() * 360)
// let number = 0;
let number = parseInt(Math.random() * 2);
let scale = 10;

function drawingFlower() {
    // Draw each frame
    let angle = number *  0.9; // intervalos para flores diferentes
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/4;
    let positionY = radius * Math.cos(angle) + canvas.height/4;

    ctx.fillStyle = 'hsl('+ hue + 5 + ', 100%, 50%';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2); // X ,  Y,  raio, cut, ??cut?? 
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    number++
    // hue++
    hue+=0.5
}
    //let scale = 10;

function drawingFlower2() {
    // Draw each frame
    let angle = number *  0.7; // intervalos para flores diferentes
    let radius = scale * Math.sqrt(number);
    let positionX2 = radius * Math.sin(angle) + canvas2.width/5;
    let positionY2 = radius * Math.cos(angle) + canvas2.height/5;

    ctx2.fillStyle = 'hsl('+ hue +', 100%, 50%';
    ctx2.strokeStyle = 'blue';
    ctx2.lineWidth = 3;
    ctx2.beginPath();
    ctx2.arc(positionX2, positionY2, parseInt(number), 0, Math.PI * 2); // X ,  Y,  raio, cut, ??cut?? 
    ctx2.closePath();
    ctx2.fill();
    ctx2.stroke();
    
    number++
    // hue++
    hue+=0.5
}

function animate() {
    // Draw each frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height );
    
    // size += 0.15;
    // positionX += 5 * Math.sin(angle);
    // positionY += 5 * Math.cos(angle);
    drawingFlower();
    if (number > 150) return
    requestAnimationFrame(animate);
}
function animate2() {
    // Draw each frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height );
    
    // size += 0.15;
    // positionX += 5 * Math.sin(angle);
    // positionY += 5 * Math.cos(angle);
    drawingFlower2();
    if (number > 10) return
    requestAnimationFrame(animate);
}

animate();
console.log(hue)
animate2();

// desenha retangulos
// ----------X,Y,width,height
// ctx.fillRect(100, 500, 160, 100);
