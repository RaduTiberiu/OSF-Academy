let plusBut = document.getElementById("qty-plus");
let minBut = document.getElementById("qty-minus");
let qty = document.getElementById("qty-nr");
let addToCart = document.getElementById("add-to-cart");

// Adding products to cart

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

// Read more

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

// Scroll to top

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const imgs = document.querySelectorAll('.carousel-item img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});