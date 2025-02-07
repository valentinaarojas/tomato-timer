document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');
    const studycount = document.querySelector('#study-count');
    const breakcount = document.querySelector('#break-count');

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
        timeLeft.text
    }
});