const startBtn = document.querySelector('#startBtn');
const startMenu = document.querySelector('#startMenu');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const navigationPannel = document.querySelector(".navigationPannel");
const navigationMenu = document.querySelector('.navigationMenu')
const desktop = document.querySelector('.desktop');
const cameraAppOpeningIcon = document.querySelector('#cameraApp');
const OpenCamera = document.querySelector('#OpenCamera');
const notepadOpenIcon = document.querySelector('#notepadOpenIcon');
const showHiddenIcon = document.querySelector('.showHiddenIcon');
const widgets = document.querySelector('#widgets');
const soundProfile = document.getElementById('soundProfile');
const soundIcon = document.getElementById('soundIcon');


// const cameraWindowOpening = document.querySelector('.cameraWindow');


const startHandler = () => {
    hideWidgetsHandler();
    hideNavigationHandler();
    if (startMenu.style.display === 'block') {
startMenu.classList.remove('animate-window');
startMenu.classList.add('animate-window-reverse');
setTimeout(() => {
    startMenu.style.display = 'none';
},50)
      
    
    } else {
        startMenu.classList.remove('animate-window-reverse');
startMenu.classList.add('animate-window');
        startMenu.style.display = 'block';
    }
};
const navigationHandler = () => {
    hideWidgetsHandler();
    hideStartMenu();
    if (navigationMenu.style.display === 'block') {
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
const hideNavigationHandler = () => {
    navigationMenu.style.display = 'none'
}

const hideWidgetsHandler = () => {
    widgetsWindow.style.display = 'none';
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


const showHiddenIconHandler = () => {
    if (showHiddenIconUp.style.display === 'block') {
        showHiddenIconUp.style.display = 'none';
    } else {
        showHiddenIconUp.style.display = 'block';
    }
}


//widgets
const widgetsBtn = document.querySelector('.widgetsBtn');
const widgetsWindow = document.createElement('div');
widgetsWindow.classList.add('widgetsWindow');
widgetsWindow.innerHTML = ``
widgetsBtn.appendChild(widgetsWindow);

const controlBar = document.querySelector('.controlBar');
const showHiddenIconUp = document.createElement('div')
showHiddenIconUp.classList.add('showHiddenIconUp')
showHiddenIconUp.innerHTML = ``;
controlBar.appendChild(showHiddenIconUp)


const widgetsHandler = () => {
    hideNavigationHandler();
    hideStartMenu()
    if (widgetsWindow.style.display === 'block') {
        widgetsWindow.classList.remove('animate-widgetsWindow');
        widgetsWindow.classList.add('animate-widgetsWindow-reverse'); // Add reverse animation class
        setTimeout(() => {
            widgetsWindow.style.display = 'none';
        }, 100); // Delay should match the animation duration
    } else {
        widgetsWindow.style.display = 'block';
        widgetsWindow.classList.remove('animate-widgetsWindow-reverse');
        widgetsWindow.classList.add('animate-widgetsWindow');
    }
}





soundProfile.addEventListener('click', () => {
    if (soundIcon.classList.contains('fa-bell-slash')) {
        soundIcon.classList.remove('fa-bell-slash');
        soundIcon.classList.add('fa-bell');
    } else {
        soundIcon.classList.remove('fa-bell');
        soundIcon.classList.add('fa-bell-slash');
    }
});


// Stop click event propagation for the widgets window
widgetsWindow.addEventListener('click', (e) => {
    e.stopPropagation();
});



// Event Listeners
startBtn.addEventListener('click', startHandler);
navigationPannel.addEventListener('click', navigationHandler);
desktop.addEventListener('click', hideStartMenu);
notepadOpenIcon.addEventListener('click', notepadOpenIconHandler);
showHiddenIcon.addEventListener('click', showHiddenIconHandler);
widgets.addEventListener('click', widgetsHandler);
widgetsBtn.addEventListener('click', widgetsHandler);