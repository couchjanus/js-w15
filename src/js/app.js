function el(selector) {
    return document.querySelector(selector);
}

function openCart() {
    el(".sidebar").classList.add("active");
    el(".overlay").classList.add("active")
}

function closeCart() {
    el(".sidebar").classList.remove("active");
    el(".overlay").classList.remove("active");
}

(function () {
    el("#sidebarCollapse").addEventListener('click', function () {
        openCart();
    });
    el(".dismiss").addEventListener('click', function () {
        closeCart();
    });
    el(".overlay").addEventListener('click', function () {
        closeCart();
    });

    let addToCarts = document.querySelectorAll('.add-to-cart');
    addToCarts.forEach(function(addToCart){
        addToCart.addEventListener('click', function() {
            let y = 180;
            this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
        });
    });

    let plus = document.querySelectorAll('.plus');
    plus.forEach(function(el){
        el.addEventListener('click', function(e) {
            let price = 55.00;
            let val = parseInt(this.previousElementSibling.innerText);
            val = this.previousElementSibling.innerText = val+1;
            this.parentNode.nextElementSibling.querySelector('.item-price').innerText = parseFloat(price*val).toFixed(2);

            // console.log(this.parentNode.nextElementSibling.querySelector('.item-price').innerText);
        });
    });

    let minus = document.querySelectorAll('.minus');
    minus.forEach(function(el){
        el.addEventListener('click', function(e) {
            let price = 55.00;
            let val = parseInt(this.nextElementSibling.innerText);
            if (val > 1) {
                val = this.nextElementSibling.innerText = val-1;
            }
            this.parentNode.nextElementSibling.querySelector('.item-price').innerText = parseFloat(price*val).toFixed(2);
        });
    });

})();
