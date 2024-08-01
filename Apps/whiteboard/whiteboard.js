const whiteboradApp = document.querySelector('.whiteboradApp');
const whiteborad = document.createElement('div');

whiteborad.innerHTML = `
<div class="container">
    <div class="title">Whiteboard</div>
    <div class="buttons">
        <button class="button" id="whiteboradMinimizeBtn">-</button>
        <button class="button" id="whiteboradMaximizeBtn">
            <i class="fa-solid fa-window-maximize"></i>
        </button>
        <button class="button" id="whiteboradCloseBtn">X</button>
    </div>
</div>
<canvas class="whiteBoradCanvas"></canvas>
<div class="whiteBoradButton">
    <input type="color" id="colorPicker">
    <input type="range" id="brushSize" min="1" max="100" value="5">
    <input type="button" id="clearBtn" value="Clear">
</div>
`;

whiteboradApp.appendChild(whiteborad);

const canvas = whiteborad.querySelector('.whiteBoradCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearBtn');

// Set canvas dimensions after whiteboard is visible
function setCanvasDimensions() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

let drawing = false;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) draw(e);
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.beginPath(); // Reset the path
});

function draw(e) {
    context.lineCap = 'round';
    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

colorPicker.addEventListener('input', (e) => {
    context.strokeStyle = e.target.value;
});

brushSize.addEventListener('input', (e) => {
    context.lineWidth = e.target.value;
});

clearBtn.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

const whiteboradCloseBtn = document.querySelector('#whiteboradCloseBtn');
const whiteboardOpening = document.querySelector('#whiteboardOpening');

const whiteboradCloseBtnHandler = () => {
    whiteboradApp.style.display = 'none';
}

const whiteboardOpeningHandler = () => {
    whiteboradApp.style.display = 'block';
    setCanvasDimensions();
}
const whiteboradMaximizeBtn = document.querySelector('#whiteboradMaximizeBtn');
let iswhiteboradMaximize = false; 
const whiteboradMaximizeBtnHandler = () => {
    if (iswhiteboradMaximize) {

        whiteboradApp.style.top = '15%'; // Set to default position
        whiteboradApp.style.left = '30%'; // Set to default position
        whiteboradApp.style.height = '300px'; // Set to default height
        whiteboradApp.style.width = '500px'; // Set to default width
      
    } else {
        notepadApp.style.top = '0px';
        whiteboradApp.style.left = '0px';
        whiteboradApp.style.height = '90%';
        whiteboradApp.style.width= '100%';
  
    }
    iswhiteboradMaximize = !iswhiteboradMaximize;
}
whiteboradCloseBtn.addEventListener('click', whiteboradCloseBtnHandler);
whiteboardOpening.addEventListener('click', whiteboardOpeningHandler);
whiteboradMaximizeBtn.addEventListener('click',whiteboradMaximizeBtnHandler);
