document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');
    const studycount = document.querySelector('#study-count');

    studybtn.addEventListener('click', function() {
        
        studycount.textContent = studycount + 1;
    });

    breakbtn.addEventListener('click', function() {
        console.log('Break was clicked!')
    });
});