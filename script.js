const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list')

const navToggle = function () {
    navList.classList.toggle('active')
}

hamburger.addEventListener('click', navToggle)