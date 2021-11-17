let overlayOne = document.getElementById("overlay-one");
let itemOne = document.getElementById("item-one");
let overlayTwo = document.getElementById("overlay-two");
let itemThree = document.getElementById("item-three");
let currentDate = document.getElementById("current-date");
let date = new Date();
let addCart = document.getElementsByClassName("add-cart");
let cartCounter = document.getElementById("cart-counter");
let addFav = document.getElementsByClassName("add-fav");
let favCounter = document.getElementById("fav-counter");

itemOne.onmouseover = function() {
    overlayOne.style.display = "block";
}

itemOne.onmouseout = function() {
    overlayOne.style.display = "none";
}

itemThree.onmouseover = function() {
    overlayTwo.style.display = "block";
}

itemThree.onmouseout = function() {
    overlayTwo.style.display = "none";
}

currentDate.innerHTML = `&copy; Copyright ${date.getFullYear()}`;

let cartPlus = function () {
    cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1;
};

for (var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', cartPlus);
};

let favPlus = function () {
    favCounter.innerHTML = Number(favCounter.innerHTML) + 1;
};

for (var i = 0; i < addFav.length; i++) {
    addFav[i].addEventListener('click', favPlus);
}