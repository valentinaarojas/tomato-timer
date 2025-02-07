document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');

    studybtn.addEventListener('click', function() {
        const studycount = document.querySelector('study-count');
        studycount.textContent = '
    });

    breakbtn.addEventListener('click', function() {
        console.log('Break was clicked!')
    });
});