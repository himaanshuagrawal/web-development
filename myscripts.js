// Get cart element
const cart = document.querySelector('.cart ul');

// Get all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.products button');

// Add click event listener to each add-to-cart button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
});

// Add item to cart
function addToCart(event) {
    // Get product details
    const product = event.target.parentNode;
    const productName = product.querySelector('h3').innerText;
    const productPrice = product.querySelector('span').innerText;

    // Create cart item
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <img src="${product.querySelector('img').src}" alt="${productName}">
        <h3>${productName}</h3>
        <p>${productPrice}</p>
        <button class="remove">Remove</button>
    `;

    // Add remove event listener to remove button
    const removeButton = cartItem.querySelector('.remove');
    removeButton.addEventListener('click', removeItem);

    // Add cart item to cart
    cart.appendChild(cartItem);

    // Update cart total
    updateCartTotal();
}

// Remove item from cart
function removeItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

// Update cart total
function updateCartTotal() {
    const cartItems = cart.querySelectorAll('li');
    let total = 0;
    cartItems.forEach((item) => {
        const itemPrice = item.querySelector('p').innerText;
        total += parseFloat(itemPrice.replace('$', ''));
    });
    const cartTotal = document.querySelector('.cart span');
    cartTotal.innerText = `$${total.toFixed(2)}`;
}
