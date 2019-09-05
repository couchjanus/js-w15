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

    $(".add-to-cart").each(function(index, element){
        $(element).on('click', function (e) {
            let y = 180;
            $(e.target).parents('.card').find('img').css('transform','rotateY(' + y + 'deg)');
        });
    });
    
    $(".minus").click(function() {
        var val = parseInt($(this).siblings('.quontity').text());
        if (val > 1) {
            val = $(this).next().text(val-1);
        }
    });
    
    $(".plus").click(function() {
        var val = parseInt($(this).siblings('.quontity').text());
        $(this).prev().text(val+1);
    });


    $('.view-detail').on('click', function () {
        $('.product-name').css('color', 'green');
        $('.product-description').css('color', 'blue');
    });
     
});