const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'HotPink';
ctx.beginPath();
ctx.ellipse(200, 210, 70, 70, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'HotPink';
ctx.beginPath();
ctx.ellipse(155, 100, 30, 60, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'HotPink';
ctx.beginPath();
ctx.ellipse(240, 100, 30, 60, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.ellipse(200, 215, 50, 40, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'HotPink';
ctx.beginPath();
ctx.ellipse(200, 350, 80, 80, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(180, 210, 9, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = 'chocolate';
ctx.fill();

ctx.beginPath();
ctx.arc(220, 210, 9, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = 'chocolate';
ctx.fill();
