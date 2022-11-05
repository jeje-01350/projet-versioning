const NAV = document.querySelector('nav');
const NAV_BUTTON = NAV.querySelector('button');
const NAV_LIST = NAV.querySelector('ul')
const NAV_LINK = NAV_LIST.querySelectorAll('a')

NAV_LINK.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("active")
    }
})

NAV_BUTTON.onclick = () => {
    if(NAV_LIST.offsetHeight === 0){
        NAV_LIST.style.height = NAV_LIST.scrollHeight + "px"
    } else {
        NAV_LIST.style.height = 0
    }
}