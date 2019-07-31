document.getElementsByTagName('body')[0].classList.remove('loaded');
window.addEventListener('DOMContentLoaded', (e) => {
    document.getElementsByTagName('body')[0].classList.add('loaded');
});