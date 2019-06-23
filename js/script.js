// MENU: Scroll and hide

let menuLinks = document.querySelectorAll('.navigation__link'),
    navToggle = document.querySelector('#nav-toggle');

menuLinks.forEach(e => {
    let linkId = e.getAttribute('id');
    let sectionId = document.querySelector(`[data-matching-link="#${linkId}"]`);
    e.addEventListener('click', event => {
        event.preventDefault();
        navToggle.checked = false;
        scroll(sectionId);
    }, false);
});

const scroll = (sectionId) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: sectionId.getBoundingClientRect().top + window.scrollY + 100
    });
};

let scrollDown = document.querySelector('#scroll-down');

scrollDown.addEventListener('click', event => {
    let sectionId = document.querySelector(`[data-matching-link="#about-link"]`);
    event.preventDefault();
    scroll(sectionId);
}, false);


// POPUP

let btnBook = document.querySelectorAll('.btn-book-now'),
    popup = document.querySelector('#popup'),
    popupClose = document.querySelector('.popup__close');

btnBook.forEach(el => {
    el.addEventListener('click', () => {
        popup.classList.add('popup--open');
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup--open');
});