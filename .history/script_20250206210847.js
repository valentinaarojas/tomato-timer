document.addEventListener('DOMContentLoaded', function() {
    const studybtn = document.getElementById('study-btn');
    const breakbtn = document.getElementById('break-btn');

    studybtn.addEventListener('click', function() {
        const studycount = document.getElementById('study-count');
    });

    breakbtn.addEventListener('click', function() {
        console.log('Break was clicked!')
    });
});