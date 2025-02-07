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
        let currCount = parseInt(studycount.textContent);
        currCount++;
        studycount.textContent = currCount;
    });
});