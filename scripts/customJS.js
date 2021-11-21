let overlayOne = document.getElementById("overlay-one");
let itemOne = document.getElementById("item-one");
let overlayTwo = document.getElementById("overlay-two");
let itemThree = document.getElementById("item-three");
let currentDate = document.getElementById("current-date");
let addCart = document.getElementsByClassName("add-cart");
let cartCounter = document.getElementById("cart-counter");
let addFav = document.getElementsByClassName("add-fav");
let favCounter = document.getElementById("fav-counter");
let loadMore = document.getElementsByClassName("load-more");
let hiddenCard = document.getElementsByClassName("hidden-card");


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

window.addEventListener('load', function(){
    setTimeout(function(){
        document.getElementById('modal-button').click();
    }, 2000);
 });


 let showProds = function () {
    for (var i = 0; i < hiddenCard.length; i++) {
        hiddenCard[i].style.display = "block"
    };
    loadMore[0].style.display = "none";
 };

 loadMore[0].addEventListener('click', showProds);