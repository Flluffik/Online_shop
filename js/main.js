document.addEventListener('DOMContentLoaded', function() {
    // Инициализация продуктов
    initializeProducts();
    
    // Настройка обработчиков событий
    setupEventListeners();
});

function initializeProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price} руб.</div>
            <button class="add-to-cart" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                Добавить в корзину
            </button>
        `;
        productsGrid.appendChild(productCard);
    });
}

function setupEventListeners() {
    const cartButton = document.getElementById('cartButton');
    const closeCart = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');
    const checkoutButton = document.getElementById('checkoutButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const orderForm = document.getElementById('orderForm');

    // Открытие/закрытие корзины
    cartButton.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Оформление заказа
    checkoutButton.addEventListener('click', () => {
        if (cart.getTotalCount() === 0) {
            alert('Корзина пуста!');
            return;
        }
        cartSidebar.classList.remove('active');
        modalOverlay.classList.add('active');
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    // Обработка формы заказа
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном приложении здесь была бы отправка данных на сервер
        alert('Заказ создан!');
        
        // Очищаем корзину и форму
        cart.clearCart();
        orderForm.reset();
        modalOverlay.classList.remove('active');
    });

    // Закрытие модального окна при клике на оверлей
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}