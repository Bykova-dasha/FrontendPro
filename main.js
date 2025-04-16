let actualTime = 85;

const timerElement = document.getElementById('timer');

function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

function rerenderTimer() {
    timerElement.textContent = formatTime(actualTime);
}

rerenderTimer();
const interval = setInterval(() => {
    actualTime--;

    rerenderTimer();

    if (actualTime <= 0) {
        clearInterval(interval);
    }
}, 1000);