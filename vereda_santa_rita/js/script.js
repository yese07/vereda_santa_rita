var btn_menu = document.querySelector('.btn_menu');
var menu_items = document.getElementById('menu_items');

btn_menu.addEventListener('click', () => {
            menu_items.classList.toggle('show')
        })
