document.addEventListener('DOMContentLoaded', function() {
    // Данные товаров
    const products = [
        {
            id: 1,
            name: "Чипсеки Lay's со вкусом бекона",
            price: 179,
            image: "",
            description: "Мммм... Вы бы знали как они заходят со светленьким фильтрованным..."
        },
        {
            id: 2,
            name: "Чипсеки Lay's со вкусом зеленого лучка",
            price: 179,
            image: "",
            description: "Ну не красота ли? Ну сочненький лучок, с бабушкиного огорода чисто. Мамой клянусь кайфанешь!"
        },
        {
            id: 3,
            name: "Чипсеки NELay's со вкусом хрена",
            price: 999999,
            image: "",
            description: "Ну звучит же? К пенному как будто самое то (Цена соответственная)"
        }
    ];

    // Инициализация продуктов
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price} руб.</div>
            <button class="add-to-cart" data-product-id="${product.id}">
                Добавить в корзину
            </button>
        </div>
    `).join('');

    // Обработчики корзины
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.productId);
            const product = products.find(p => p.id === productId);
            if (product) cart.addItem(product);
        }
    });

    // Управление корзиной
    const cartButton = document.getElementById('cartButton');
    const closeCart = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');
    const checkoutButton = document.getElementById('checkoutButton');

    cartButton.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.getTotalCount() === 0) {
            alert('Корзина пуста!');
            return;
        }
        
    });
});