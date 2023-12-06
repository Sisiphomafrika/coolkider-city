function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let creditCard = document.getElementById('creditCard').value;
    let expiryDate = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;

    
    // For simplicity, let's just check if all fields are filled
    if (name === '' || email === '' || address === '' || creditCard === '' || expiryDate === '' || cvv === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // You can add more specific validation rules for each field if needed

    // If all validations pass, you can proceed with the form submission
    alert('Order placed successfully!');
    return true;
}