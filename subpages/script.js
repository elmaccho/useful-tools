const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const nav = document.querySelector('nav')

const openMenuWrapper = () => {
    nav.classList.add('openTimeOut')
    openMenu.style.opacity = '0'
    setTimeout(() => {
        nav.classList.add('open')
    }, 100);
}

const closeMenuWrapper = () => {
    openMenu.style.opacity = '1'
    nav.classList.remove('open')
    setTimeout(() => {
        nav.classList.remove('openTimeOut')
    }, 100);
}

openMenu.addEventListener('click', openMenuWrapper)
closeMenu.addEventListener('click', closeMenuWrapper)