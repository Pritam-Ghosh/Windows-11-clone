document.addEventListener('DOMContentLoaded', () => {
    // Create and append the camera window
    const cameraApp = document.querySelector('.cameraApp');
    const cameraWindow = document.createElement('div');
    cameraWindow.classList.add('cameraWindow');
    cameraWindow.innerHTML = `
        <div class="container">
            <div class="title">Camera</div>
            <div class="buttons">
                <button class="button" id="cameraMinimizeBtn">-</button>
                <button class="button" id="cameraMaximizeBtn">
                    <i class="fa-solid fa-window-maximize"></i>
                </button>
                <button class="button" id="CameracloseBtn">X</button>
            </div>
        </div>

        <div class="cameraMain">
            <video id="webCam" autoplay playsinline></video>
            <canvas id="canvas"></canvas>
        </div>

        <div class="cameraFooter">
            <div class="cameraBtn">
                <a download id="clickPhoto">
                    <button id="click"><i class="fa-solid fa-circle"></i></button>
                </a>
            </div>
        </div>
    `;

    cameraApp.appendChild(cameraWindow);

    // Access the video and canvas elements
    const webCamElem = document.querySelector('#webCam');
    const canvasElem = document.querySelector('#canvas');
    const downloadLink = document.querySelector('#clickPhoto');
    const cameraMinimizeBtn = document.querySelector('#cameraMinimizeBtn')
const cameraMaximizeBtn = document.querySelector('#cameraMaximizeBtn')


    const webcam = new Webcam(webCamElem, 'user', canvasElem);

    let webcamStarted = false;
        // Function to start the webcam
    function startWebcam() {
        if (!webcamStarted) {
            webcam.start().then(result => {
                console.log('Webcam started');
                webcamStarted = true;
            }).catch(err => {
                console.error(err);
            });
        }
    }
    
const OpenCameraHandler = () => {
    cameraApp.style.display = 'block'
    startWebcam() 
}
OpenCamera.addEventListener('click',OpenCameraHandler);

function stopWebcam() {
    if (webcamStarted) {
        webcam.stop().then(() => {
            console.log('Webcam stopped');
            webcamStarted = false;
        }).catch(err => {
            console.error(err);
        });
    }
}

const cameraMinimizeBtnHandler = () => {
    cameraApp.style.display = 'none'
}
cameraMinimizeBtn.addEventListener('click',cameraMinimizeBtnHandler);
const CameracloseBtnHandler = () => {
    cameraApp.style.display = 'none'
    stopWebcam()
    }
    CameracloseBtn.addEventListener('click',CameracloseBtnHandler)

    // Function to capture and download photo
    function takePicture() {
        const picture = webcam.snap();
        downloadLink.href = picture;
    }

    // Event listener for the capture button
    document.querySelector('#click').addEventListener('click', function() {
        takePicture();
    });
});

const OpeningCameraHandler = () => {
    cameraApp.style.display = 'block'
}



const OpeningCamera = document.querySelector('#OpeningCamera');
OpeningCamera.addEventListener('click',OpeningCameraHandler);
cameraMaximizeBtn.addEventListener('click',cameraMaximizeBtnHandler)
