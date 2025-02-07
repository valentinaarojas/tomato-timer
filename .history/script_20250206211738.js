document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');
    const studycount = document.querySelector('#study-count');

    studybtn.addEventListener('click', function() {
        studycount.textContent = studycou;
    });

    breakbtn.addEventListener('click', function() {
        console.log('Break was clicked!')
    });
});