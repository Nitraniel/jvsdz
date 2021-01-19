const cart = [];
var coke = {
    company: "coca-cola",
    volume: 0.5,
    price: 50,
}

var pepsi = {
    company: "pepsi",
    volume: 0.5,
    price: 60,
}

var rich = {
    company: "coca-cola",
    volume: 1,
    price: 140,
}

var buy1 = document.querySelector('#coke');
var buy2 = document.querySelector('#pepsi');
var buy3 = document.querySelector('#rich');


buy1.addEventListener('click', function addItem() {
    cart.push(coke.price);
    console.log(cart);
    countBasketPrice(...cart);
});

buy2.addEventListener('click', function addItem() {
    cart.push(pepsi.price)
    console.log(cart)
    countBasketPrice(...cart);
});

buy3.addEventListener('click', function addItem() {
    cart.push(rich.price);
    console.log(cart);
    countBasketPrice(...cart);
}, true);

function countBasketPrice() {
    let sc = document.createElement('div');
    sc.setAttribute("id", "div1");
    let body = document.body;
    let n = arguments.length;
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    if (sum == 0) {
        sc.appendChild(document.createTextNode("Корзина пуста"));
    } else {
        document.getElementById("div1").remove();
        sc.appendChild(document.createTextNode('В корзине: ' + n + ' товаров на сумму ' + sum + ' рублей'));
    }
    body.appendChild(sc);
}




countBasketPrice(...cart);
