// HTML structure
const cameraApp = document.querySelector('.cameraApp');
const cameraWindow = document.createElement('div');
cameraWindow.classList.add('cameraWindow');
cameraWindow.innerHTML = `
    <div class="container">
        <div class="title">Camera</div>
        <div class="buttons">
            <button class="button" id="minimizeBtn">-</button>
            <button class="button" id="maximizeBtn">
                <i class="fa-solid fa-window-maximize"></i>
            </button>
            <button class="button" id="closeBtn">X</button>
        </div>
    </div>

    <div class="cameraMain">
        <video id="video" autoplay playsinline></video>
        <div class="photoView" style="display:none;">
            <canvas id="canvas"></canvas>
        </div>
    </div>

    <div class="cameraFotter">
        <div class="cameraBtn">
            <button id="click"><i class="fa-solid fa-circle"></i></button>
            <button id="save"><i class="fa-solid fa-file-arrow-down"></i></button>
        </div>
    </div>      
`;

cameraApp.appendChild(cameraWindow);

// Access the video and canvas elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const click = document.getElementById('click');
const save = document.getElementById('save');

// Start video stream
// navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//         video.srcObject = stream;
//     })
//     .catch(err => {
//         console.error("Error accessing the camera: ", err);
//     });

// Capture photo
click.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    document.querySelector('.photoView').style.display = 'block';
    video.style.display = 'none';
});

// Save photo
save.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'photo.png';
    link.click();
});


