const hamburger = document.body.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
});