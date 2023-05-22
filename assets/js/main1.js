// const heartIcon = document.querySelector('.heart-icon');
// heartIcon.addEventListener('click', function() {
//   heartIcon.classList.toggle('active');
// });

let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


const cardList = document.querySelector('.card-list');
const cards = cardList.querySelectorAll('.card');

cards.forEach(card => {
card.addEventListener('touchstart', function() {
    cards.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
});
});

/*-------giỏ hàng------ */
const btn = document.querySelectorAll("insert_products-total")
//console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = Event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("title_text").innerText
        var productPrice = product.querySelector("cost_main").innerText
        //console.log(btn)
        addcart(productPrice,productImg,productName)
    }})
        
})

function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="/web/assets/img/iphone12_xanhngoc.webp" alt="">iphone12</td><td><p><span>14.590.000</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cardtable = document.querySelector("tbody")
    cardtable.append(addtr)
}





/*------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
async function fetchProducts() {
    const response = await fetch("https://api.exhttps://rapidapi.com/blog/most-popular-api/ample.com/products");
    const products = await response.json();
    return products;
}

document.addEventListener("DOMContentLoaded", async function() {
    const products = await fetchProducts();
    renderProducts(products);
});

function renderProducts(products) {
    const productsContainer = document.querySelector(".products");
    let html = "";

    products.forEach((product) => {
        html += `
        <a href="/product/${product.id}" class="product-card">
          <img src="${product.imageUrl}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price} VND</p>
        </a>
      `;
    });
    
    productsContainer.innerHTML = html;
}

/*---tra cuu---*/

 