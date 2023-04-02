if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}
function ready() {
    var removeCart = document.getElementsByClassName('far fa-times-circle')
    //  console.log(removeCart)
    for (var i = 0; i < removeCart.length; i++) {
        var button = removeCart[i]
        button.addEventListener('click', removeCartItem)
            
        }

    }

function removeCartItem(event){
    var buttonClicked = event.target
            // buttonClicked.parentElement.parentElement.remove()
            document.getElementById("myTable").deleteRow(0);
            
}
updateCartTotal()
function updateCartTotal() {
    var cartContainer = document.getElementById("myTable")[0]
    var cartRows = document.getElementsByClassName('far fa-times-circle')
    var total = 0
     for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-item-quantity')[0]
    //     //var price = parseFloat(priceElement.innerText.replace('$', ''))
    //     var quantity = quantityElement.value
    //     total = total + (price * quantity)
        console.log(priceElement)
    }
    // document.getElementsByClassName('cart-total')[0].innerText = total
}
