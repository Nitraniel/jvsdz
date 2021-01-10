var coke = {
    company: "coca-cola",
    volume: 0.5,
    price: 50,
}

var pepsi = {
    company: "pepsi",
    volume: 2,
    price: 120,
}

var rich = {
    company: "coca-cola",
    volume: 1,
    price: 140,
}

function countBasketPrice() {
    let sc = document.createElement('div');
    var body = document.body;
    var n = arguments.length;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    if (sum == 0) {
        sc.appendChild(document.createTextNode("Корзина пуста"));
    } else {
        sc.appendChild(document.createTextNode('В корзине: ' + n + ' товаров на сумму ' + sum + ' рублей'))
    }
    body.appendChild(sc);
}




let cart = [];
cart.push(coke.price, pepsi.price, rich.price)
cart.push(pepsi.price)
cart.push(rich.price)
console.log(cart)



countBasketPrice(...cart);