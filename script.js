const menu = document.querySelector('.hamburger-menu')
const container = document.querySelector('.container')

menu.addEventListener('click', () => {
    container.classList.toggle('change')
})