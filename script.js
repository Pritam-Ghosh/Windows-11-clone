const startBtn = document.querySelector('#startBtn');
const startMenu = document.querySelector('#startMenu');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const navigationPannel = document.querySelector(".navigationPannel");
const navigationMenu = document.querySelector('.navigationMenu')
const desktop = document.querySelector('.desktop');
const cameraAppOpeningIcon = document.querySelector('#cameraApp');
const OpenCamera = document.querySelector('#OpenCamera');
const notepadOpenIcon= document.querySelector('#notepadOpenIcon');
// const cameraWindowOpening = document.querySelector('.cameraWindow');



const startHandler = () => { 
    hideNavigationHandler();
    if(startMenu.style.display === 'block') {
        
        startMenu.style.display = 'none';
        startMenu.value =""
    } else {
        startMenu.style.display = 'block';
    }  
};
const navigationHandler = () =>{
    hideStartMenu();
    if(navigationMenu.style.display === 'block') {
        navigationMenu.classList.remove('animate-window');
        navigationMenu.classList.add('animate-window-reverse'); // Add reverse animation class
        setTimeout(() => {
            navigationMenu.style.display = 'none';
        }, 50); // Wait for animation to finish
    } else {
        navigationMenu.style.display = 'block';
        navigationMenu.classList.remove('animate-window-reverse');
        navigationMenu.classList.add('animate-window'); // Add animation class
    }  
}

function dateTime() {
    const now = new Date();
    // Date
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // January is 0!
    const yyyy = now.getFullYear();
    
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    const formattedTime = hours + ':' + minutes;
    time.innerHTML = formattedTime;

    const formattedDate = dd + '/' + mm + '/' + yyyy;
    date.innerHTML = formattedDate;
}




//hiding component
const hideStartMenu = () => {
    startMenu.style.display = 'none';
};
const hideNavigationHandler = () =>{
    navigationMenu.style.display = 'none'
}


const OpenCameraHandler = () => {
    cameraApp.style.display = 'block'
}




const notepadOpenIconHandler = () => {




    hideStartMenu()
    notepadApp.style.opacity = 0;
    notepadApp.style.transform = 'scale(0)';
    notepadApp.style.display = 'block';
            setTimeout(() => {
                notepadApp.style.opacity = 1; // Start fading in
                notepadApp.style.transform = 'scale(1)'; // Start zooming in
            }, 10);
}

// Call the dateTime function initially and set an interval to update the time every 30 seconds
dateTime();
setInterval(dateTime, 60000);


// Event Listeners
startBtn.addEventListener('click', startHandler);
navigationPannel.addEventListener('click',navigationHandler);
desktop.addEventListener('click',hideStartMenu);
OpenCamera.addEventListener('click',OpenCameraHandler);
notepadOpenIcon.addEventListener('click',notepadOpenIconHandler);
