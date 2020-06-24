const barraMenu = document.querySelector('.menu_flex_header');

window.onscroll = function anime()
{
    var windowTop = window.pageYOffset;
    switch (windowTop) {
        case 0: 
        barraMenu.style.background= 'rgba(41, 21, 107, 0.0)',
        barraMenu.style.height='73px'
            break;
        default:
        barraMenu.style.background= 'rgba(41, 21, 107, 0.8)',
        barraMenu.style.height='75px'
            break;
    }
}

