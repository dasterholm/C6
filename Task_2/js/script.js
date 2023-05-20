const btn = document.querySelector('.j-btn-test');
const screen_width = window.screen.width;
const screen_height = window.screen.height;


btn.addEventListener('click', () => {
    alert(`Размеры вашего экрана\nШирина: ${screen_width}px\nВысота: ${screen_height}px`);
});