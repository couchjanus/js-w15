'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;

$(".add-to-cart").each(function(index, element){
    $(element).on('click', function ()  {
        // $(this).parents('.card').find('.win').show(1000);
        // $(this).parents('.card').find('.win').show('fast');
        // $(this).parents('.card').find('.win').show(1000, 'linear');
        // $(this).parents('.card').find('.win').show('fast', ‘swing’);
        // $(this).parents('.card').find('.win').toggle(1000);
        // $(this).parents('.card').find('.win').fadeIn('fast', 'swing');
        // $(this).parents('.card').find('.win').fadeTo('slow', 'swing');
        $(this).parents('.card').find('.win').slideDown('slow', 'swing');
        $(this).parents('.card').find('.win').slideUp('slow', 'linear');
       
    })
});        
 
