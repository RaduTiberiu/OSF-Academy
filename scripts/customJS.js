let overlayOne = document.getElementById("overlay-one");
let itemOne = document.getElementById("item-one");
let overlayTwo = document.getElementById("overlay-two");
let itemThree = document.getElementById("item-three");
let currentDate = document.getElementById("current-date");
let date = new Date();

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