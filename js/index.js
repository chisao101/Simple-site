const navMenu = document.querySelector('.nav');
const navButton = document.querySelector('.burger-button');
// const header = document.querySelector('header');



navButton.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})

// Additional functionality of the site goes here