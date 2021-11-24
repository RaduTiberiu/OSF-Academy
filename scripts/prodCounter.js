let plusBut = document.getElementById("qty-plus");
let minBut = document.getElementById("qty-minus");
let qty = document.getElementById("qty-nr");
let addToCart = document.getElementById("add-to-cart");

let qtyPlus = function () {
    qty.innerHTML = Number(qty.innerHTML) + 1;
};

let qtyMinus = function () {
    if (Number(qty.innerHTML) > 0) {
    qty.innerHTML = Number(qty.innerHTML) - 1;
    }
};

plusBut.addEventListener('click', qtyPlus);
minBut.addEventListener('click', qtyMinus);

let addAll = function () {
    cartCounter.innerHTML = Number(cartCounter.innerHTML) + Number(qty.innerHTML);
};

addToCart.addEventListener('click', addAll);