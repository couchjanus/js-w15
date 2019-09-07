import $ from "jquery";

$(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
    });

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
    

    const $template = $($('#cartItem').html());
    
    $(".add-to-cart").each(function(index, element){
        $(element).on('click', function (e) {
            $(e.target).parents('.card').find('img').css('transform','rotateY(180deg)');
            let template = $template.clone();
            $(".cart-items").append(addProductToCart(template, $(this).parents(".card")));
        });
    });

    $('.view-detail').on('click', function () {
        $('.product-name').css('color', 'green');
        $('.product-description').css('color', 'blue');
    });
     
});



// 



import { data } from './data.js';


$(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
    });

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
    

    const $template = $($('#cartItem').html());
    
    $(".add-to-cart").each(function(index, element){
        $(element).on('click', function (e) {
            $(e.target).parents('.card').find('img').css('transform','rotateY(180deg)');
            let template = $template.clone();
            $(".cart-items").append(addProductToCart(template, $(this).parents(".card")));
        });
    });


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

    
    var template = $($('#productItem').html());
    
    for (let el of data) {
        $('.showcase')
            .append(makeProductItem(template.clone(), el));
    };


    function slideItem(content, item, i) {
        content.find('.carousel-item__title').text(item.name);
        content.find('.carousel-item__subtitle').text(item.subtitle[i]);

        content.find('.carousel-item__description').text(item.description);

        content.find('.carousel-item__image').css('background-image',
            'url(images/' + item.picture[i] + ')');
        return content;
    }


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


    // $('.view-detail').on('click', function () {
    //     $('.product-name').css('color', 'green');
    //     $('.product-description').css('color', 'blue');
    // });
     
});