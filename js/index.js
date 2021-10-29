const navMenu = document.querySelector('.nav');
const navButton = document.querySelector('.burger-button');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('open');
    navMenu.classList.toggle('active')
})

// Additional functionality of the site goes here