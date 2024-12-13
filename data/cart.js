export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        },
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
        }
        ];
    }
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();
};

export function addToCartMainPage(productId) {
    let addedMessageTimeoutId;
    let matchingItem;
    const quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantitySelector;
    } else {
        cart.push({
            productId: productId,
            quantity: quantitySelector,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();

    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('added-to-cart-after');

    if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
    }

    const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-after');
    }, 2000);

    addedMessageTimeoutId = timeoutId;
};


export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}


export function calculateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity = cartQuantity + cartItem.quantity;
    });

    return cartQuantity;
}


export function updateQuantity(productId, newQuantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (!matchingItem) {
        return;
    }

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();
    const displayQuantity = document.querySelector('.js-cart-quantity');

    if (cartQuantity === 0) {
        displayQuantity.innerHTML = '0';
    } else {
        displayQuantity.innerHTML = cartQuantity
    }
}

export function resetCart() {
    cart = [];
    saveToStorage();
}