const open = document.querySelector('.open');
const close = document.querySelector('.close');
const popupBg = document.querySelector('.popup-background');

open.addEventListener('click', () => {
    popupBg.style.display = 'block';
})

close.addEventListener('click', () => {
    popupBg.style.display = 'none';
})