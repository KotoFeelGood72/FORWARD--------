
//Свайпер на странице продукта 

const swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    loop: true,
    spaceBetween: 9,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    // cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});


/*****************************************************/


// Скрытое меню сайта

function openNav() {
    document.querySelector("#mySidenav").style.width = "300px";
}
function closeNav() {
    document.querySelector("#mySidenav").style.width = "0";
}


/*****************************************************/

//Модальное окно с формой

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector('.modal');
            
            modalElem.style.cssText = `
                display: flex;
                visibility: hidden;
                opacity: 0;
                transition: opacity ${time}ms ease-in-out;
            `;
            
            const closeModal = event => {
            const target = event.target;
            
            if (
                target === modalElem ||
                (btnClose && target.closest(btnClose)) ||
                event.code === 'Escape'
            ) {
            
                modalElem.style.opacity = 0;
            
                setTimeout(() => {
                    modalElem.style.visibility = 'hidden';
                }, time);
            
                window.removeEventListener('keydown', closeModal);
                }
            }
            
            const openModal = () => {
                modalElem.style.visibility = 'visible';
                modalElem.style.opacity = 1;
                window.addEventListener('keydown', closeModal)
            };
            
            buttonElems.forEach(btn => {
                btn.addEventListener('click', openModal);
            });
            
            modalElem.addEventListener('click', closeModal);
        };
        
            modalController({
                modal: '.modal',
                btnOpen: '.js-order',
                btnClose: '.modal__close', 
});

// маска формы 
const phone = document.querySelectorAll('#phone');
const imPhone = new Inputmask('+7(999)999-99-99');
imPhone.mask(phone);

/******************************************************************/

// Табы на главной странице

const $tab = $('.choice');
const $tabInput = $tab.find('.choice__top-buttons-input');
const $tabItem = $tab.find('.choice__choice-item');

    showTab();
    $tabInput.on('change', showTab);

    function showTab() {
        $tabInput.each(function(i) {
            $tabItem.eq(i).toggleClass('show', $(this).prop('checked'));
    });
};


/*****************************************************/



