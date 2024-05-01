const hamburger = document.body.querySelector('.hamburger');
const mobLinks = document.body.querySelector('.mob_nav_links');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobLinks.classList.toggle('active');
    scrollY = hidden;
});


