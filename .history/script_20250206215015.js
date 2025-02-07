document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');
    const studycount = document.querySelector('#study-count');
    const breakcount = document.querySelector('#break-count');
    const timeLeft = document.querySelector('#time-left');

    let timer;
    let minutes;
    let seconds;

    studybtn.addEventListener('click', function() {
        let currCount = parseInt(studycount.textContent);
        currCount++;
        studycount.textContent = currCount;
    });

    breakbtn.addEventListener('click', function() {
        let currCount = parseInt(breakcount.textContent);
        currCount++;
        breakcount.textContent = currCount;
    });

    function updateTimerDisplay(minutes, seconds) {
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        timeLeft.textContent = `${displayMinutes}:${displaySeconds}`;
    }

    function startTimer(duration) {
        clearInterval(timer); //clear existing timer
        minutes = duration; //set timer
        seconds = 0;
        updateTimerDisplay(minutes, seconds);

        timer = setInterval(function() {
            if(seconds === 0) {
                if(minutes === 0) {
            }
        }
    }
});