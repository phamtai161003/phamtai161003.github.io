//slide----------------------------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
let index = 0;

rightbtn.addEventListener("click", function() {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
});

leftbtn.addEventListener("click", function() {
    index = index - 1;
    if (index < 0) {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
});

// ---------------------------------------------------//
const imgNumberli = document.querySelectorAll('.slider-content-left-bottom li');

imgNumberli.forEach(function(image, index) {
    image.addEventListener("click", function() {
        removeactive();
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
        image.classList.add("active");
    });
});

function removeactive() {
    let imgactive = document.querySelector('.active');
    imgactive.classList.remove("active");
}

// -----------------------------slider product ----------------------------------//
const rightbtntwo = document.querySelector('.fa-chevron-right-two');
const leftbtntwo = document.querySelector('.fa-chevron-left-two');
const imgNumbertwo = document.querySelectorAll(".slider-product-one-content-items");
let indexTwo = 0;

rightbtntwo.addEventListener("click", function() {
    indexTwo = indexTwo + 1;
    if (indexTwo > imgNumbertwo.length - 1) {
        indexTwo = 0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = indexTwo * 100 + "%";
});

leftbtntwo.addEventListener("click", function() {
    indexTwo = indexTwo - 1;
    if (indexTwo < 0) {
        indexTwo = imgNumbertwo.length - 1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = indexTwo * 100 + "%";
});

const rightbtnthree = document.querySelector('.fa-chevron-right-three');
const leftbtnthree = document.querySelector('.fa-chevron-left-three');
const imgNumberthree = document.querySelectorAll(".slider-product-two-content-items");
let indexThree = 0;

rightbtnthree.addEventListener("click", function() {
    indexThree = indexThree + 1;
    if (indexThree > imgNumberthree.length - 1) {
        indexThree = 0;
    }
    document.querySelector(".slider-product-two-content-items-content").style.right = indexThree * 100 + "%";
});

leftbtnthree.addEventListener("click", function() {
    indexThree = indexThree - 1;
    if (indexThree < 0) {
        indexThree = imgNumberthree.length - 1;
    }
    document.querySelector(".slider-product-two-content-items-content").style.right = indexThree * 100 + "%";
});


const rightbtnfour = document.querySelector('.fa-chevron-right-four');
const leftbtnfour = document.querySelector('.fa-chevron-left-four');
const imgNumberfour = document.querySelectorAll(".slider-product-three-content-items");
let indexfour = 0;

rightbtnfour.addEventListener("click", function() {
    indexfour = indexfour + 1;
    if (indexfour > imgNumberfour.length - 1) {
        indexfour = 0;
    }
    document.querySelector(".slider-product-three-content-items-content").style.right = indexfour * 100 + "%";
});

leftbtnfour.addEventListener("click", function() {
    indexfour = indexfour - 1;
    if (indexfour < 0) {
        indexfour = imgNumberfour.length - 1;
    }
    document.querySelector(".slider-product-three-content-items-content").style.right = indexfour * 100 + "%";
});