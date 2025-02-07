document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');

    studybtn.addEventListener('click', function() {
        let studyCount = parseInt(studycount.textContent);
        studyCount++;
        studycount.textContent = studyCount;
    });

    breakbtn.addEventListener('click', function() {
        let breakCount = parseInt(studycount.textContent);
        currCount++;
        studycount.textContent = currCount;
    });
});