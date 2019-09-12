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

function makeProductItem($template, product) {
    $template
        .querySelector('.col-md-4')
        .setAttribute('productId', product.id);
    $template.querySelector('.product-name').textContent = product.name;
    $template
        .querySelector('.card-img-top')
        .setAttribute('src', 'images/' + product.picture[0]);
    $template.querySelector('img').setAttribute('alt', product.name);
    $template.querySelector('.product-price').textContent = product.price;
    return $template;
}
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

function slideItem(content, item, i) {
    content.querySelector('.carousel-item__title').textContent = item.name;
    content.querySelector('.carousel-item__subtitle').textContent =
        item.subtitle[i];

    content.querySelector('.carousel-item__description').textContent =
        item.description;

    content.querySelector('.carousel-item__image').style.backgroundImage =
        'url(images/' + item.picture[i] + ')';

    return content;
}

function carousel(dataItem) {
    let carouselItem = el('#carouselItem').content;

    let detailTemplate = el('#productDetail').content;

    for (let i = 0; i < dataItem.picture.length; i++) {
        detailTemplate
            .querySelector('.carousel-detail')
            .append(
                document.importNode(
                    slideItem(carouselItem, dataItem, i),
                    true
                )
            );
    }

    el('.showcase').replaceWith(document.importNode(detailTemplate, true));

    document
        .querySelectorAll('.carousel-detail-item')[0]
        .classList.add('active-slide');

    var total = document.querySelectorAll('.carousel-detail-item').length;

    var current = 0;
    moveLR('#moveRight', 1);
    moveLR('#moveLeft', -1);

    function moveLR(eId, step) {
        el(eId).addEventListener('click', function() {
            let prev_next = current;
            current = current + step;
            setSlide(prev_next, current);
        });
    }

    function setSlide(prev, next) {
        let slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        document
            .querySelectorAll('.carousel-detail-item')
            [prev].classList.remove('active-slide');
        document
            .querySelectorAll('.carousel-detail-item')
            [slide].classList.add('active-slide');
    }
}

// function _translate(img, offset=-150){
//     let rect = img.getBoundingClientRect();
//     let elements = ['translate3D('];
//     elements.push(rect.left - offset + 'px,');
//     elements.push(rect.top - offset + 'px,0)');
//     return elements.join('');
// }

function _translate(img, offset=-150){
    let rect = img.getBoundingClientRect();
    let elements = ['translate3D('];
    return [...elements, rect.left - offset + 'px,', rect.top - offset + 'px,0)'].join('');
}

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

//=====================================================

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

    const template = el('#productItem').content;

    data.forEach(function(item) {
        el('.showcase').append(makeProductItem(template, item).cloneNode(true));
    });

    const content = el('#cartItem').content;

    el('.cart-items').addEventListener(
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
// ---------------------Step 1-----------------------------------
    // addToCarts.forEach(function(addToCart) {
    //     addToCart.addEventListener('click', function() {
    //         el('.cart-items').append(
    //             document.importNode(
    //                 addProductToCart(content, this.closest('.card')),
    //                 true
    //             )
    //         );

    //         let imgItem = this.closest('.card').querySelector('img');
    //         let rectOrigin = imgItem.getBoundingClientRect();
    //         let leftStart = rectOrigin.left + 'px';
    //         let topStart = rectOrigin.top + 'px';
    //         console.log(leftStart, topStart);

    //         if (imgItem) {
    //             let imgClone = imgItem.cloneNode(true);
    //             imgClone.style.left = 0;
    //             imgClone.style.top = 0;
    //             imgClone.style.height = '150px';
    //             imgClone.style.width = '150px';
    //             document.body.appendChild(imgClone);
    //             imgItem.style.transform = 'rotateY(180deg)';
    //         }
    //     });
    // });
// -------------------Step 2-------------------------------

// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener('click', function() {
//         el('.cart-items').append(
//             document.importNode(
//                 addProductToCart(content, this.closest('.card')),
//                 true
//             )
//         );

//         let imgItem = this.closest('.card').querySelector('img');
//         let rectOrigin = imgItem.getBoundingClientRect();
//         let leftStart = rectOrigin.left + 'px';
//         let topStart = rectOrigin.top + 'px';
//         console.log(leftStart, topStart);

//         if (imgItem) {
//             let imgClone = imgItem.cloneNode(true);
//             imgClone.classList.add('offset-img');
//             this.closest('.card').appendChild(imgClone);
//             imgItem.style.transform = 'rotateY(180deg)';
//         }
//     });
// });
// ----------------------Step 3------------------------------

// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener('click', function() {
//         el('.cart-items').append(
//             document.importNode(
//                 addProductToCart(content, this.closest('.card')),
//                 true
//             )
//         );

//         let imgItem = this.closest('.card').querySelector('img');
//         let rectOrigin = imgItem.getBoundingClientRect();
//         let leftStart = rectOrigin.left + 'px';
//         let topStart = rectOrigin.top + 'px';
//         // console.log(leftStart, topStart);

//         if (imgItem) {
//             let imgClone = imgItem.cloneNode(true);
//             imgClone.classList.add('offset-img');
//             // this.closest('.card').appendChild(imgClone);
//             document.body.appendChild(imgClone);
//             imgItem.style.transform = 'rotateY(180deg)';

//             let rect = document
//                     .querySelector('#sidebarCollapse')
//                     .getBoundingClientRect();

//             let toLeft = rect.left - 50 + 'px';
//             let toTop = rect.top - 50 + 'px';
            
//             imgClone.animate(
//                     [
//                         {
//                             transform:
//                                 'translate3D(' +
//                                 leftStart +
//                                 ',' +
//                                 topStart +
//                                 ', 0)',
//                         },
//                         {
//                             transform:
//                                 'translate3D(' +
//                                 toLeft +
//                                 ',' +
//                                 toTop +
//                                 ',0) perspective(500px) scale3d(0.1, 0.1, 0.2)',
//                         },
//                     ],
//                     {
//                         duration: 2000,
//                     }
//                 )
//         }
//     });
// });

// ---------------------Step 4-------------------------------

// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener('click', function() {
//         el('.cart-items').append(
//             document.importNode(
//                 addProductToCart(content, this.closest('.card')),
//                 true
//             )
//         );

//         let imgItem = this.closest('.card').querySelector('img');
//         let rectOrigin = imgItem.getBoundingClientRect();
//         let leftStart = rectOrigin.left + 'px';
//         let topStart = rectOrigin.top + 'px';

//         if (imgItem) {
//             let imgClone = imgItem.cloneNode(true);
//             imgClone.classList.add('offset-img');
//             document.body.appendChild(imgClone);
//             imgItem.style.transform = 'rotateY(180deg)';

//             let rect = document
//                     .querySelector('#sidebarCollapse')
//                     .getBoundingClientRect();

//             let toLeft = rect.left - 50 + 'px';
//             let toTop = rect.top - 50 + 'px';
            
//             imgClone.animate(
//                     [
//                         {
//                             transform:
//                                 'translate3D(' +
//                                 leftStart +
//                                 ',' +
//                                 topStart +
//                                 ', 0)',
//                         },
//                         {
//                             transform:
//                                 'translate3D(' +
//                                 toLeft +
//                                 ',' +
//                                 toTop +
//                                 ',0) perspective(500px) scale3d(0.1, 0.1, 0.2)',
//                         },
//                     ],
//                     {
//                         duration: 2000,
//                     }
//                 )
//                 .onfinish = function() {
//                     imgClone.remove();
//                     imgItem.style.transform = 'rotateY(0deg)';
//                 };
//         }
//     });
// });

// ---------------------Step 5-------------------------------

// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener('click', function() {
//         el('.cart-items').append(
//             document.importNode(
//                 addProductToCart(content, this.closest('.card')),
//                 true
//             )
//         );

//         let imgItem = this.closest('.card').querySelector('img');
//         let rectOrigin = imgItem.getBoundingClientRect();
//         let leftStart = rectOrigin.left + 'px';
//         let topStart = rectOrigin.top + 'px';
//         let win = this.closest('.card').querySelector('.win');
//         if (imgItem) {
//             let imgClone = imgItem.cloneNode(true);
//             imgClone.classList.add('offset-img');
//             document.body.appendChild(imgClone);
//             imgItem.style.transform = 'rotateY(180deg)';
//             win.style.display = 'block';
//             let rect = document
//                     .querySelector('#sidebarCollapse')
//                     .getBoundingClientRect();

//             let toLeft = rect.left - 50 + 'px';
//             let toTop = rect.top - 50 + 'px';
            
//             imgClone.animate(
//                     [
//                         {
//                             transform:
//                                 'translate3D(' +
//                                 leftStart +
//                                 ',' +
//                                 topStart +
//                                 ', 0)',
//                         },
//                         {
//                             transform:
//                                 'translate3D(' +
//                                 toLeft +
//                                 ',' +
//                                 toTop +
//                                 ',0) perspective(500px) scale3d(0.1, 0.1, 0.2)',
//                         },
//                     ],
//                     {
//                         duration: 2000,
//                     }
//                 )
//                 .onfinish = function() {
//                     imgClone.remove();
//                     imgItem.style.transform = 'rotateY(0deg)';
//                     win.style.display = 'none';
//                 };
//         }
//     });
// });


// ---------------------Step 6-------------------------------

addToCarts.forEach(function(addToCart) {
    addToCart.addEventListener('click', function() {
        el('.cart-items').append(
            document.importNode(
                addProductToCart(content, this.closest('.card')),
                true
            )
        );

        let imgItem = this.closest('.card').querySelector('img');
        let win = this.closest('.card').querySelector('.win');

        if (imgItem) {
            let imgClone = imgItem.cloneNode(true);
            imgClone.classList.add('offset-img');

            document.body.appendChild(imgClone);

            imgItem.style.transform = 'rotateY(180deg)';
            win.style.display = 'block';

            imgClone.animate([{
                transform: _translate(imgItem)
                },
                {
                    transform: _translate(document.querySelector('#sidebarCollapse'), 50) + 'perspective(500px) scale3d(0.1, 0.1, 0.2)'
                },
            ], {
                duration: 2000,
            })
            .onfinish = function() {
                imgClone.remove();
                imgItem.style.transform = 'rotateY(0deg)';
                win.style.display = 'none';
            };
        }
    });
});
// ----------------------------------------------------
    const viewDetails = document.querySelectorAll('.view-detail');
    viewDetails.forEach(function(element) {
        element.addEventListener('click', function() {
            let dataId = this.closest('.col-md-4').getAttribute('productId');
            carousel(data[dataId]);
        });
    });
})();
//=====================================================
