;(function(){
    'use strict';

    const $noNav = document.querySelector('.view-dasktop');
    const $hamburguerMenu = document.querySelector('.hamburguer-menu');
    const $btnClose = document.querySelector('.btn-close');
    const $nav = document.querySelector('.nav-top');
    const $titleListContainer = Array.from(document.querySelectorAll('.title-list-container'));
    const $iconArrow = Array.from(document.querySelectorAll('.icon-arrow'));
    const $listContainer = Array.from(document.querySelectorAll('.list-container'));

    $nav.setAttribute('style', 'display:none');

    $listContainer.forEach(container => {
        container.setAttribute('style', 'height: 0');
    });

    $iconArrow.forEach(icon => {
        icon.setAttribute('style', 'transform: rotate(134deg)')
    });
    
    window.addEventListener('DOMContentLoaded', checksWidthView);
    window.addEventListener('resize', checksWidthView);

    function checksWidthView(){
        return window.innerWidth <= 1300 ? mobileView() : dasktopView();
    };
    
    function mobileView(){
        $hamburguerMenu.removeAttribute('style');
        $btnClose.removeAttribute('style');
        $nav.classList.add('on-js_nav-top');
        $nav.setAttribute('style', 'transform: translateX(110%)');

        $hamburguerMenu.addEventListener('click', e =>{
            e.stopPropagation();

            $nav.setAttribute('style', 'transform: translateX(0%)');

            $noNav.setAttribute('style', 'filter: opacity(.2)');
        });

        $btnClose.addEventListener('click', e => {
            $nav.style.transform = 'translateX(110%)';

            $noNav.removeAttribute('style');
        });

        $noNav.addEventListener('click', e => {
            e.stopPropagation();

            $nav.style.transform = 'translateX(110%)';
            $noNav.removeAttribute('style');
        });
    };

    function dasktopView(){
        $hamburguerMenu.setAttribute('style', 'display: none');
        $nav.setAttribute('style', 'display: block');
        $nav.classList.remove('on-js_nav-top');
        $btnClose.setAttribute('style', 'display: none');
    };

    $titleListContainer.forEach(function(container, index){
        container.addEventListener('click', e =>{
            e.stopPropagation();

            $listContainer[index].style.height === '0px' ? $listContainer[index].style.height = '9em' : $listContainer[index].style.height = '0';

            $iconArrow[index].style.transform === 'rotate(134deg)' ? $iconArrow[index].style.transform = 'rotate(-45deg)' : $iconArrow[index].style.transform = 'rotate(134deg)';
        });
    });
})();