console.log('Магазин загружен');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('Товар добавлен в корзину!');
    });
});
