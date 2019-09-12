import $ from "jquery";

import { data } from './data.js';


function makeProductItem($template, product) {
    $template.find('.product-name').text(product.name);
    $template
        .find('.card-img-top')
        .attr('src', 'images/' + product.picture[0]);
    $template.find('img').attr('alt', product.name);
    $template.find('.product-price').text(product.price);
    $template.find('.view-detail').attr('data-productId', product.id);
    return $template;
}


function slideItem(content, item, i) {
    content.find('.carousel-item__title').text(item.name);
    content.find('.carousel-item__subtitle').text(item.subtitle[i]);

    content.find('.carousel-item__description').text(item.description);

    content.find('.carousel-item__image').css('background-image',
        'url(images/' + item.picture[i] + ')');
    return content;
}

function addProductToCart(content, item){
    content.find('.item-title').text(item.find(".product-name").text());
    content.find('.item-price').text(item.find(".product-price").text());
    content.find('.item-price').attr('price', item.find(".product-price").text());
    content.find('.item-img').css('background-image', "url("+item.find("img").attr('src')+")");
    
    content.find(".remove-item").on('click', function() {
        $(this).parents('.cart-item').remove();
    });

    content.find(".minus").on('click', function() {
        let price = parseFloat($(this).parent().siblings().find('.item-price').attr('price'));
        var val = parseInt($(this).siblings('.quontity').text());
        if (val > 1) {
            $(this).siblings('.quontity').text(--val);
        }
        $(this).parent().siblings().find('.item-price').text(parseFloat(price*val).toFixed(2));
    });
    
    content.find(".plus").on('click', function() {
        let price = parseFloat($(this).parent().siblings().find('.item-price').attr('price'));
        var val = parseInt($(this).siblings('.quontity').text());
        $(this).siblings('.quontity').text(++val);
        $(this).parent().siblings().find('.item-price').text(parseFloat(price*val).toFixed(2));
    });

    return content;
}


$(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
    });

    var template = $($('#productItem').html());
    
    for (let el of data) {
        $('.showcase')
            .append(makeProductItem(template.clone(), el));
    };

    $(".view-detail").each(function (index, element) {
        $(element).on('click', function () {
            // console.log($(this).attr('data-productId'));
            let dataId = $(this).attr('data-productId');
            let dataItem = data[dataId];
            let carouselItem = $($('#carouselItem').html());

            let detailTemplate = $($('#productDetail').html());

            for (let i = 0; i < dataItem.picture.length; i++) {
                detailTemplate
                    .find('.carousel-detail')
                    .append(slideItem(carouselItem.clone(), dataItem, i)
                    );
            }
            
            $(".showcase").empty();
            $(".showcase").append(detailTemplate);
            $('.carousel-detail-item').eq(0).addClass('active-slide');

            var total = $('.carousel-detail-item').length;
            var current = 0;

            $('#moveRight').on('click', function () {
                var next = current;
                current = current + 1;
                setSlide(next, current);
            });

            $('#moveLeft').on('click', function () {
                var prev = current;
                current = current - 1;
                setSlide(prev, current);
            });

            function setSlide(prev, next) {
                var slide = current;
                if (next > total - 1) {
                    slide = 0;
                    current = 0;
                }
                if (next < 0) {
                    slide = total - 1;
                    current = total - 1;
                }
                $('.carousel-detail-item').eq(prev).removeClass('active-slide');
                $('.carousel-detail-item').eq(slide).addClass('active-slide');
            }
        });
    });
    const $template = $($('#cartItem').html());
    
    $(".add-to-cart").each(function(index, element){
        $(element).on('click', function () {

            var imgItem = $(this).parents('.card').find('img');
            
            console.log(imgItem.offset()); // возвращает координаты первого div-элемента с классом content, относительно начала страницы.

            console.log(imgItem.position()); // возвращает координаты первого div-элемента с классом content, относительно ближайшего родителя с заданным позиционированием.

            // устанавливает координаты относительно начала страницы, равные (100, 30) для элемента
            // imgItem.offset({top:250, left:100});  

            
            if (imgItem) {
                var imgClone = imgItem.clone()
                    .offset({
                        top: imgItem.offset().top,
                        left: imgItem.offset().left
                    })
                    .css({
                        'opacity': '0.5',
                        'position': 'absolute',
                        'height': '150px',
                        'width': '150px',
                        'z-index': '100'
                    })
                    .appendTo($('body'))
                    .animate({
                        'top': $('#sidebarCollapse').offset().top + 10,
                        'left': $('#sidebarCollapse').offset().left + 10,
                        'width': 75,
                        'height': 75
                    }, 1000);

                imgClone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach()
                });
            }
            imgItem.css('transform','rotateY(180deg)');
            
            // $(this).parents('.card').find('.win').toggle(1000);
            $(this).parents('.card').find('.win').fadeToggle(1000);
            let template = $template.clone();
            $(".cart-items").append(addProductToCart(template, $(this).parents(".card")));

            imgItem.delay(3000).queue(function () {
                $(this).css({
                    'transform': 'rotateY(0deg)'
                }).dequeue();
                $(this).parents('.card').find('.win').fadeOut(1000);
            });
        });
    });
     
});