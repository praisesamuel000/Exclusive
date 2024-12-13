// initialize an empty cart
let cart = [];
let totalPrice = 0;

// function to add items to the cart
function addToCart(productName, productPrice){
    // add the product to the cart array
    cart.push({ name: productName, price: productPrice});

    // updte the total price
    totalPrice += productPrice;

    // update the cart display
    updateCart();
}


// function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    // clear current cart items
    cartItems.innerHTML = '';

// add each item to the cart display
cart.forEach((item, index) => {
    const li = document.getElementById('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
});

// update total price display
totalPriceDisplay.textContent = totalPrice;
}