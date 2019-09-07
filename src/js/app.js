import { data } from './data.js';

function el(selector) {
    return document.querySelector(selector);
}

function openCart() {
    el('.sidebar').classList.add('active');
    el('.overlay').classList.add('active');
}

function closeCart() {
    el('.sidebar').classList.remove('active');
    el('.overlay').classList.remove('active');
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

(function() {
    el('#sidebarCollapse').addEventListener('click', function() {
        openCart();
    });
    el('.dismiss').addEventListener('click', function() {
        closeCart();
    });
    el('.overlay').addEventListener('click', function() {
        closeCart();
    });

    const content = document.getElementById('cartItem').content;

    document.querySelector('.cart-items').addEventListener(
        'click',
        function(e) {
            if (e.target && e.target.matches('.remove-item')) {
                e.target.parentNode.parentNode.remove();
            }
            if (e.target && e.target.matches('.plus')) {
                let el = e.target;
                let price = parseFloat(
                    el.parentNode.nextElementSibling
                        .querySelector('.item-price')
                        .getAttribute('price')
                );
                let val = parseInt(el.previousElementSibling.innerText);
                val = el.previousElementSibling.innerText = val + 1;
                el.parentNode.nextElementSibling.querySelector(
                    '.item-price'
                ).innerText = parseFloat(price * val).toFixed(2);
            }

            if (e.target && e.target.matches('.minus')) {
                let el = e.target;
                let price = parseFloat(
                    el.parentNode.nextElementSibling
                        .querySelector('.item-price')
                        .getAttribute('price')
                );
                let val = parseInt(el.nextElementSibling.innerText);
                if (val > 1) {
                    val = el.nextElementSibling.innerText = val - 1;
                }
                el.parentNode.nextElementSibling.querySelector(
                    '.item-price'
                ).innerText = parseFloat(price * val).toFixed(2);
            }
        },
        false
    );

    let addToCarts = document.querySelectorAll('.add-to-cart');

    function addProductToCart(content, item) {
        content.querySelector('.item-title').textContent = item.querySelector(
            '.product-name'
        ).textContent;

        content.querySelector('.item-price').textContent = item.querySelector(
            '.product-price'
        ).textContent;

        content
            .querySelector('.item-price')
            .setAttribute(
                'price',
                item.querySelector('.product-price').textContent
            );

        content.querySelector('.item-img').style.backgroundImage =
            'url(' + item.querySelector('img').getAttribute('src') + ')';
        return content;
    }

    addToCarts.forEach(function(addToCart) {
        addToCart.addEventListener('click', function() {
            this.closest('.card').firstElementChild.style.transform =
                'rotateY(180deg)';
            document
                .querySelector('.cart-items')
                .append(
                    document.importNode(
                        addProductToCart(content, this.closest('.card')),
                        true
                    )
                );
        });
    });
})();

//=====================================================

// (function() {
//     el('#sidebarCollapse').addEventListener('click', function() {
//         openCart();
//     });
//     el('.dismiss').addEventListener('click', function() {
//         closeCart();
//     });
//     el('.overlay').addEventListener('click', function() {
//         closeCart();
//     });

//     function makeProductItem($template, product) {
//         $template
//             .querySelector('.col-md-4')
//             .setAttribute('productId', product.id);
//         $template.querySelector('.product-name').textContent = product.name;
//         $template
//             .querySelector('.card-img-top')
//             .setAttribute('src', 'images/' + product.picture[0]);
//         $template.querySelector('img').setAttribute('alt', product.name);
//         $template.querySelector('.product-price').textContent = product.price;
//         return $template;
//     }

//     const template = document.getElementById('productItem').content;

//     data.forEach(function(el) {
//         document
//             .querySelector('.showcase')
//             .append(makeProductItem(template, el).cloneNode(true));
//     });

//     const content = document.getElementById('cartItem').content;

//     document.querySelector('.cart-items').addEventListener(
//         'click',
//         function(e) {
//             if (e.target && e.target.matches('.remove-item')) {
//                 e.target.parentNode.parentNode.remove();
//             }
//             if (e.target && e.target.matches('.plus')) {
//                 let el = e.target;
//                 let price = parseFloat(
//                     el.parentNode.nextElementSibling
//                         .querySelector('.item-price')
//                         .getAttribute('price')
//                 );
//                 let val = parseInt(el.previousElementSibling.innerText);
//                 val = el.previousElementSibling.innerText = val + 1;
//                 el.parentNode.nextElementSibling.querySelector(
//                     '.item-price'
//                 ).innerText = parseFloat(price * val).toFixed(2);
//             }

//             if (e.target && e.target.matches('.minus')) {
//                 let el = e.target;
//                 let price = parseFloat(
//                     el.parentNode.nextElementSibling
//                         .querySelector('.item-price')
//                         .getAttribute('price')
//                 );
//                 let val = parseInt(el.nextElementSibling.innerText);
//                 if (val > 1) {
//                     val = el.nextElementSibling.innerText = val - 1;
//                 }
//                 el.parentNode.nextElementSibling.querySelector(
//                     '.item-price'
//                 ).innerText = parseFloat(price * val).toFixed(2);
//             }
//         },
//         false
//     );

//     let addToCarts = document.querySelectorAll('.add-to-cart');

//     function addProductToCart(content, item) {
//         content.querySelector('.item-title').textContent = item.querySelector(
//             '.product-name'
//         ).textContent;

//         content.querySelector('.item-price').textContent = item.querySelector(
//             '.product-price'
//         ).textContent;

//         content
//             .querySelector('.item-price')
//             .setAttribute(
//                 'price',
//                 item.querySelector('.product-price').textContent
//             );

//         content.querySelector('.item-img').style.backgroundImage =
//             'url(' + item.querySelector('img').getAttribute('src') + ')';
//         return content;
//     }

//     addToCarts.forEach(function(addToCart) {
//         addToCart.addEventListener('click', function() {
//             this.closest('.card').firstElementChild.style.transform =
//                 'rotateY(180deg)';
//             document
//                 .querySelector('.cart-items')
//                 .append(
//                     document.importNode(
//                         addProductToCart(content, this.closest('.card')),
//                         true
//                     )
//                 );
//         });
//     });

//     const viewDetails = document.querySelectorAll('.view-detail');

//     function slideItem(content, item, i) {
//         content.querySelector('.carousel-item__title').textContent = item.name;
//         content.querySelector('.carousel-item__subtitle').textContent =
//             item.subtitle[i];

//         content.querySelector('.carousel-item__description').textContent =
//             item.description;

//         content.querySelector('.carousel-item__image').style.backgroundImage =
//             'url(images/' + item.picture[i] + ')';

//         return content;
//     }

//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let dataId = this.closest('.col-md-4').getAttribute('productId');
//             let dataItem = data[dataId];

//             let carouselItem = document.getElementById('carouselItem').content;

//             let detailTemplate = document.getElementById('productDetail')
//                 .content;

//             for (let i = 0; i < dataItem.picture.length; i++) {
//                 detailTemplate
//                     .querySelector('.carousel-detail')
//                     .append(
//                         document.importNode(
//                             slideItem(carouselItem, dataItem, i),
//                             true
//                         )
//                     );
//             }

//             document.querySelector('.showcase').innerHTML = '';

//             document
//                 .querySelector('.showcase')
//                 .append(document.importNode(detailTemplate, true));

//             document
//                 .querySelectorAll('.carousel-detail-item')[0]
//                 .classList.add('active-slide');

//             var total = document.querySelectorAll('.carousel-detail-item')
//                 .length;

//             var current = 0;

//             document
//                 .getElementById('moveRight')
//                 .addEventListener('click', function() {
//                     let next = current;
//                     current = current + 1;
//                     setSlide(next, current);
//                 });

//             document
//                 .getElementById('moveLeft')
//                 .addEventListener('click', function() {
//                     let prev = current;
//                     current = current - 1;
//                     setSlide(prev, current);
//                 });

//             function setSlide(prev, next) {
//                 let slide = current;
//                 if (next > total - 1) {
//                     slide = 0;
//                     current = 0;
//                 }
//                 if (next < 0) {
//                     slide = total - 1;
//                     current = total - 1;
//                 }
//                 document
//                     .querySelectorAll('.carousel-detail-item')
//                     [prev].classList.remove('active-slide');
//                 document
//                     .querySelectorAll('.carousel-detail-item')
//                     [slide].classList.add('active-slide');
//             }
//         });
//     });
// })();
//
// ====================================================
// (function() {
//     el('#sidebarCollapse').addEventListener('click', function() {
//         openCart();
//     });
//     el('.dismiss').addEventListener('click', function() {
//         closeCart();
//     });
//     el('.overlay').addEventListener('click', function() {
//         closeCart();
//     });

//     function makeProductItem($template, product) {
//         $template
//             .querySelector('.col-md-4')
//             .setAttribute('productId', product.id);
//         $template.querySelector('.product-name').textContent = product.name;
//         $template
//             .querySelector('.card-img-top')
//             .setAttribute('src', 'images/' + product.picture[0]);
//         $template.querySelector('img').setAttribute('alt', product.name);
//         $template.querySelector('.product-price').textContent = product.price;
//         return $template;
//     }

//     const template = el('#productItem').content;

//     data.forEach(function(item) {
//         el('.showcase').append(makeProductItem(template, item).cloneNode(true));
//     });

//     const content = el('#cartItem').content;

//     el('.cart-items').addEventListener(
//         'click',
//         function(e) {
//             if (e.target && e.target.matches('.remove-item')) {
//                 e.target.parentNode.parentNode.remove();
//             }
//             if (e.target && e.target.matches('.plus')) {
//                 let el = e.target;
//                 let price = parseFloat(
//                     el.parentNode.nextElementSibling
//                         .querySelector('.item-price')
//                         .getAttribute('price')
//                 );
//                 let val = parseInt(el.previousElementSibling.innerText);
//                 val = el.previousElementSibling.innerText = val + 1;
//                 el.parentNode.nextElementSibling.querySelector(
//                     '.item-price'
//                 ).innerText = parseFloat(price * val).toFixed(2);
//             }

//             if (e.target && e.target.matches('.minus')) {
//                 let el = e.target;
//                 let price = parseFloat(
//                     el.parentNode.nextElementSibling
//                         .querySelector('.item-price')
//                         .getAttribute('price')
//                 );
//                 let val = parseInt(el.nextElementSibling.innerText);
//                 if (val > 1) {
//                     val = el.nextElementSibling.innerText = val - 1;
//                 }
//                 el.parentNode.nextElementSibling.querySelector(
//                     '.item-price'
//                 ).innerText = parseFloat(price * val).toFixed(2);
//             }
//         },
//         false
//     );

//     let addToCarts = document.querySelectorAll('.add-to-cart');

//     function addProductToCart(content, item) {
//         content.querySelector('.item-title').textContent = item.querySelector(
//             '.product-name'
//         ).textContent;

//         content.querySelector('.item-price').textContent = item.querySelector(
//             '.product-price'
//         ).textContent;

//         content
//             .querySelector('.item-price')
//             .setAttribute(
//                 'price',
//                 item.querySelector('.product-price').textContent
//             );

//         content.querySelector('.item-img').style.backgroundImage =
//             'url(' + item.querySelector('img').getAttribute('src') + ')';
//         return content;
//     }

//     addToCarts.forEach(function(addToCart) {
//         addToCart.addEventListener('click', function() {
//             this.closest('.card').firstElementChild.style.transform =
//                 'rotateY(180deg)';
//             el('.cart-items').append(
//                 document.importNode(
//                     addProductToCart(content, this.closest('.card')),
//                     true
//                 )
//             );
//         });
//     });

//     const viewDetails = document.querySelectorAll('.view-detail');

//     function slideItem(content, item, i) {
//         content.querySelector('.carousel-item__title').textContent = item.name;
//         content.querySelector('.carousel-item__subtitle').textContent =
//             item.subtitle[i];

//         content.querySelector('.carousel-item__description').textContent =
//             item.description;

//         content.querySelector('.carousel-item__image').style.backgroundImage =
//             'url(images/' + item.picture[i] + ')';

//         return content;
//     }

//     function carousel(dataItem) {
//         let carouselItem = el('#carouselItem').content;

//         let detailTemplate = el('#productDetail').content;

//         for (let i = 0; i < dataItem.picture.length; i++) {
//             detailTemplate
//                 .querySelector('.carousel-detail')
//                 .append(
//                     document.importNode(
//                         slideItem(carouselItem, dataItem, i),
//                         true
//                     )
//                 );
//         }

//         el('.showcase').replaceWith(document.importNode(detailTemplate, true));

//         document
//             .querySelectorAll('.carousel-detail-item')[0]
//             .classList.add('active-slide');

//         var total = document.querySelectorAll('.carousel-detail-item').length;

//         var current = 0;
//         moveLR('#moveRight', 1);
//         moveLR('#moveLeft', -1);

//         function moveLR(eId, step) {
//             el(eId).addEventListener('click', function() {
//                 let prev_next = current;
//                 current = current + step;
//                 setSlide(prev_next, current);
//             });
//         }

//         function setSlide(prev, next) {
//             let slide = current;
//             if (next > total - 1) {
//                 slide = 0;
//                 current = 0;
//             }
//             if (next < 0) {
//                 slide = total - 1;
//                 current = total - 1;
//             }
//             document
//                 .querySelectorAll('.carousel-detail-item')
//                 [prev].classList.remove('active-slide');
//             document
//                 .querySelectorAll('.carousel-detail-item')
//                 [slide].classList.add('active-slide');
//         }
//     }

//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let dataId = this.closest('.col-md-4').getAttribute('productId');
//             carousel(data[dataId]);
//         });
//     });
// })();
