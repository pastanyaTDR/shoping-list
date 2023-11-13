function adjustQuantity(itemId, amount) {
    var quantityElement = document.getElementById(itemId);
    var currentQuantity = parseInt(quantityElement.innerText);
    
    if (currentQuantity + amount >= 0) {
        quantityElement.innerText = currentQuantity + amount;
        updateTotalPrice();
    }
}

function deleteItem(itemId) {
    var itemElement = document.getElementById(itemId);
    itemElement.parentNode.remove();
    updateTotalPrice();
}

function toggleLike1(itemId) {
    var likeButton = document.getElementById('like');
    likeButton.style ="background-color:red"


}


function updateTotalPrice() {
    var total = 0;
    var priceElements = document.querySelectorAll('.item .price');
    var quantityElements = document.querySelectorAll('.item .quantity');

    priceElements.forEach(function (priceElement, index) {
        var price = parseInt(priceElement.innerText.substring(1)); // Remove the dollar sign
        var quantity = parseInt(quantityElements[index].innerText);
        total += price * quantity;
    });

    document.getElementById('total-price').innerText = '$' + total;
}
function adjustQuantity(itemId, amount) {
    var quantityElement = document.getElementById(itemId);
    var currentQuantity = parseInt(quantityElement.innerText);

    if (currentQuantity + amount >= 0) {
        quantityElement.innerText = currentQuantity + amount;
        updateTotalPrice();
    }
}

function deleteItem(itemId) {
    var itemElement = document.getElementById(itemId);
    itemElement.parentNode.remove();
    updateTotalPrice();
}

function toggleLike2(itemId) {
    var likeButton = document.getElementById('like2');
    likeButton.style ="background-color:red"

}

function updateTotalPrice() {
    var total = 0;
    var priceElements = document.querySelectorAll('.item .price');
    var quantityElements = document.querySelectorAll('.item .quantity');

    priceElements.forEach(function (priceElement, index) {
        var price = parseInt(priceElement.innerText.substring(1)); // Remove the dollar sign
        var quantity = parseInt(quantityElements[index].innerText);
        total += price * quantity;
    });

    document.getElementById('total-price').innerText = '$' + total;
}

