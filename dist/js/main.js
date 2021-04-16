/**********************************
 * 
 *          Menu Movil
 * 
 ************************************/

const menuBtn = document.querySelector('.menu-btn-content');
const menuList = document.querySelector('.items-menu');

let open = false;

menuBtn.addEventListener('click', ()=>{
    if(!open){
        menuBtn.classList.add('open');
        menuList.classList.add('openListMenu')
        open= true;
    }else{
        menuBtn.classList.remove('open');
        menuList.classList.remove('openListMenu');

        open=false;

    }
});


