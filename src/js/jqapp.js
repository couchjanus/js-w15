// (function() {

// document.querySelector('#dismiss, .overlay').addEventListener('click', function(){
//     document.getElementById('sidebar').classList.remove('active');
//     document.querySelector('.overlay').classList.remove('active');
// })
//     document.getElementById('sidebarCollapse').addEventListener('click', function(){
//         document.getElementById('sidebar').classList.add('active');
//         document.querySelector('.overlay').classList.add('active');
//         document.querySelector('.collapse.in').classList.toggle('in');
//         document.querySelector('a[aria-expanded=true]').setAttribute('aria-expanded', 'false');
//     })
// })();
import $ from "jquery";

$(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.add-to-cart').on('click', function () {
        $('.product-name').css('color', 'green');
        $('.product-price').css('color', 'red');
     });

     $('.view-detail').on('click', function () {
        $('.product-name').css('color', 'green');
        $('.product-description').css('color', 'blue');
     });
     
     
});