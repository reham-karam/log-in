const wr = document.querySelector('.wr');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wr.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wr.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wr.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wr.classList.remove('active-popup');
});