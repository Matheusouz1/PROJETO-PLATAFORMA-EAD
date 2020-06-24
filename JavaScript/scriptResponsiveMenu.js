var cancelIcon = document.getElementById('cancelMenu')
var menuIcon = document.getElementById('mostrarMenu')
var menucontainer = document.querySelector('.menu_flex_header .menu')

menuIcon.onclick = function abrirMenu() {
    menucontainer.style.display='flex'
    menucontainer.style.top='73px'
    menuIcon.style.color='rgb(255, 255, 255, 0)'
    setTimeout(trocarIcon,200)
    function trocarIcon(){
        menuIcon.style.display='none'
        cancelIcon.style.display='flex'
        menuIcon.style.color='rgb(255, 255, 255, 1)'
    } 
}
cancelIcon.onclick = function escondermenu(){
    menucontainer.style.display='none'
    // menucontainer.style.top='-300px'
    cancelIcon.style.color='rgb(255, 255, 255, 0)'
    setTimeout(trocarIcon,200)
    function trocarIcon(){
        cancelIcon.style.display='none'
        menuIcon.style.display='flex'
        cancelIcon.style.color='rgb(255, 255, 255, 1)'
    } 
}