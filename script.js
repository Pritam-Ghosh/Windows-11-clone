const startBtn = document.querySelector('#startBtn');
const startMenu = document.querySelector('#startMenu');
const date = document.querySelector('#date');
const time = document.querySelector('#time');

const startHandler = () => { 
    if(startMenu.style.display === 'block') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'block';
    }  
};

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

// Event Listeners
startBtn.addEventListener('click', startHandler);

// Call the dateTime function initially and set an interval to update the time every 30 seconds
dateTime();
setInterval(dateTime, 60000);
