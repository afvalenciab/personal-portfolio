console.log('Ingreso java script')
const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.getElementById('menu')
const burgerMenu = document.getElementById('burger-button')

// burgerMenu.addEventListener('click', showHide)
ipad.addListener(validation)

function validation(event){
    console.log(event.matches)
    if(event.matches){
        burgerMenu.addEventListener('click', showHide)
    }else{
        burgerMenu.removeEventListener('click', showHide)
    }
}
validation(ipad)

function showHide(){    
    menu.classList.toggle('is-active')
}