document.querySelectorAll('.third_nav a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.third_nav a.selected').classList.remove('selected');
        event.target.classList.add('selected');
    });
});