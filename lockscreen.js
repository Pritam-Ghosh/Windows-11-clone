document.addEventListener('DOMContentLoaded', () => {
    const lockscreen = document.querySelector('.lockscreen');
    const lockscreenElem = document.createElement('div');
    lockscreenElem.classList.add('lockscreenElem');
    lockscreenElem.innerHTML = `
        <img src="images/lockscreen.jpg" alt="Lock Screen Background">
        <div class="time">
            <span id="hour">Hour</span>:<span id="minute">Min</span>
        </div>
    `;
    lockscreen.appendChild(lockscreenElem);

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');

    // Function to update time
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        hourElement.textContent = hours;
        minuteElement.textContent = minutes;
    }

    // Initial time update and set interval for updating every minute
    updateTime();
    setInterval(updateTime, 60000);

    // Click event to slide up and hide lock screen
    lockscreen.addEventListener('click', () => {
        lockscreen.style.transform = 'translateY(-100%)';
        lockscreen.style.transition = 'transform 0.6s ease-in-out';
    });
});
