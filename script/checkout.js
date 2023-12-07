// Function to clear the cart
//function clearCart() {
    // Logic to clear the cart goes here
    // For example: document.getElementById('cart').innerHTML = '';
//}

// Function to show a thank-you alert
//function showThankYouAlert() {
   // alert('Thank you for purchasing!');
//}
 // Sample cart data (replace with actual cart data)
 const ShoppingCart = [
    { name: "Product 1", category: "Category A", quantity: 2, price: 50.00 },
    { name: "Product 2", category: "Category B", quantity: 1, price: 30.00 }
    // Add more products as needed
];

// Function to dynamically populate the cart table
function AddToCart() {
    const items = document.getElementById('items');
    let totalAmount = 0;

    // Create an array of HTML strings using map
    const rows = ShoppingCart.map(product => {
        const amount = product.quantity * product.price;
        totalAmount += amount;

        return `
            <tr>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>$${amount.toFixed(2)}</td>
            </tr>
        `;
    });

    // Set the innerHTML by joining the array
    cartBody.innerHTML = rows.join('');

    // Update total amount
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

// Function to clear the cart
function clearCart() {
    // Clear cart data
    cart.length = 0;

    // Repopulate the cart table
    AddToCart();
}

// Function to display a thank-you alert
function placeOrder() {
    // Additional logic for placing the order goes here
    alert('Thank you for purchasing!');
}

// Initial population of the cart table
AddToCart();