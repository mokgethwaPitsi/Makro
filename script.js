function calculateTotal() {
    const name = document.getElementById("customerName").value.trim();
    const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
    const accepted = document.getElementById("acceptTerms").checked;

    if (!accepted) {
        alert("Please accept the terms to proceed.");
        return false;
    }

    const productPrices = {
        "Black Crown Gin": 200,
        "Kirlwall": 500,
        "Tonic": 20.99,
        "Royal Crown": 900,
        "Kinahans": 600,
        "Loch Lomond": 1000,
        "Black Crown 24": 380,
        "Black Crown 6": 120
    };

    const selectedProducts = Array.from(document.querySelectorAll('input[name="product"]:checked'))
        .map(input => input.value);

    if (selectedProducts.length === 0) {
        alert("Please select at least one product.");
        return false;
    }

    let total = selectedProducts.reduce((sum, product) => sum + productPrices[product], 0);
    if (deliveryMethod === "delivery") total += 50;

    document.getElementById("placeorderResult").textContent =
        `Thank you, ${name}! You ordered: ${selectedProducts.join(", ")}. Total: R${total.toFixed(2)} (${deliveryMethod})`;

    return false; // Prevent form submission
}