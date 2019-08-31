'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

console.log(jQuery('h1'));
        
// JQuery Получить DOM-элемент body
console.log($("body"));

// JQuery Получить все элементы div
console.log($('div'));

// JQuery Получить #touch-me

console.log($('#touch-me'));

// JQuery Получить все элементы span внутри div
console.log($($('div span')));
      
// JQuery Получить все элементы span внутри div
console.log($($($('div').find('span'))));
       
// JQuery Получить все элементы span внутри div
console.log($($('div > span')));

// Например, выбрать все элементы, имеющие класс btn:
console.log($(".btn"));
// также можно записать следующим образом:
console.log($("*.btn"));

$(".filter li:first").css("color", "green");

$(".filter li:contains('Item 3')").css("color", "yellow");


// JQuery Получить элемент перед .plus
console.log($('.plus').prev());

// JQuery Получить элемент после #banner
console.log($('.minus').next());

$(document).ready(
    function(){
        console.log('Bla, Bla, Bla...');
        // $('p').css('border', '3px solid blue');
        // // получим значение background у элемента a
        // var background = $('.nav li a').css('background-color');
        // console.log(background);     // выведем его в консоль

        // var cssProperties = $('p').css(['width','height']);
        // console.log(cssProperties);
        // $("a").css("color", "red");

        // $('div').css({
        //     'color':'green',
        //     'font-size':'16px'
        // });

        // var newCSS = {
        //     'color':'green',
        //     'font-size':'16px'
        // };
        
        // $('p').css(newCSS);

        // $('p').css({
        //     "padding-left": "+=10",
        //     "padding-right":"+=10", 
        //     "padding-top": "+=10"
        // });
            


    }
);

// $(document).ready(ready);

// function ready() {
//     $("p").text("Структура документа загружена и полностью сформирована!");
// }
    
// $().ready(ready);
 
// $(function() {
//     //DOM-дерево готово
//     $("p").text("Структура документа загружена и полностью сформирована!");
// });



function square(x) {
    return x * x;
}

let i = 2;

function setMessageText(msg) {
    $('.count').text(msg);
}

setMessageText("The Square of " + i + " is " + square(i));

$('.count').click(() => {
    i++;
    setMessageText("The Square of " + i + " is " + square(i));
})


//  Получить HTML
// Получить HTML Native
console.log(el.innerHTML);

// Получить HTML jQuery
console.log($('#el').html());

// Присвоить HTML
let htmlString = 'Hello Element';
// Присвоить HTML jQuery
$('#el').html(htmlString);

// Присвоить HTML Native
el.innerHTML = htmlString;

