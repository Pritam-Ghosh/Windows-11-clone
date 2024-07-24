const startBtn = document.querySelector('#startBtn');
const startMenu = document.querySelector('#startMenu');
const startHandler = () => {
    
    if(startMenu.style.display === 'block') {
startMenu.style.display = 'none'
    }
    else 
    {
        startMenu.style.display = 'block'
    }  
}

//Event
startBtn.addEventListener('click', startHandler);