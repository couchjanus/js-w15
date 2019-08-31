// test.js
'use strict';

// document object
// console.dir(document);

// Доступ к свойствам осуществляется по имени свойства (по ключу).
// document object property

// console.log(document.domain); // localhost
// console.log(document.URL); // http://localhost:1234/
// console.log(document.title); // Shopping cart
// console.log(document.body); // BODY

// console.log(document.doctype); // <!DOCTYPE html>

// ================nodeType==========================
// console.log("тип узла: " + document.nodeType);
// тип узла: 9

// ================nodeName==========================
// console.log("Имя узла: " + document.nodeName);
// Имя узла: #document

// ================nodeValue==========================
// console.log("значение узла: " + document.nodeValue);
// значение узла: null

// Любой доступ и изменения DOM происходит через объект document.
// ================Доступ к элементам==========================
// console.log("Document Element: " + document.documentElement);
// Document Element: [object HTMLHtmlElement]

// console.log(document.head); // head

// В случае корректной HTML-страницы, это будет <html>.
// console.log("Body Element: " + document.body);
// Body Element: [object HTMLBodyElement], если есть в документе (обязан быть).

// Все дочерние элементы, включая текстовые находятся в массиве childNodes.
// console.log('Все дочерние элементы ', document.body.childNodes);

// Атрибут tagName есть у элементов и содержит имя тага в верхнем регистре, только для чтения.
// имя тага
// console.log(document.body.tagName); // BODY

// Можно поменять цвет BODY: -->
// document.body.style.backgroundColor = 'red';

// Можно поменять цвет текста:
// document.body.style.color = 'white';

// Можно вернуть обратно:
// document.body.style.backgroundColor = '';
// document.body.style.color = '';

// Пример задания элементу нескольких стилей:

var elem = document.getElementById('elem');
// elem.style.cssText = 'color: red; font-size: 20px;';

// Чтобы предыдущие стили не перезаписывались, можно сделать так:
elem.style.cssText += 'color: red; font-size: 24px;';

console.log(elem.style.cssText);

// document.body.style.cssText = "color: #072a38; font: 300 18px/1.6 'Source Sans Pro',sans-serif; margin: 0; padding: 5em 0 2em; text-align: center;";

let h1 = document.querySelector('h1');
let style = window.getComputedStyle(h1);

// свойства paddingLeft/paddingTop
console.log(style.paddingLeft); 

// getComputedStyle(elem).padding = пустая строка, или сгенерированное значение из известных внутренних отступов Стандарта для этого нет.
console.log(style.padding); 

// Некоторые браузеры (Chrome) отображают margin = 10px, а некоторые (Firefox) – нет:
let sty = getComputedStyle(document.body);
console.log('margin= ', sty.margin); // пустая строка в Firefox


// CSSStyleDeclaration.cssText: string
// property (ambient)
// (property) CSSStyleDeclaration.cssText: string

console.log(style.cssText);
console.log(style);

// CSSStyleDeclaration.length: number
// property (ambient)
// (property) CSSStyleDeclaration.length: number
console.log(style.length);

console.log(style.item(100)); // item(index: number): string

// CSSStyleDeclaration.getPropertyValue(propertyName: string): string
// method (ambient)
// (method) CSSStyleDeclaration.getPropertyValue(propertyName: string): string
console.log(style.getPropertyValue('color'));

// innerHTML
// Свойство innerHTML – позволяет получать и изменять полностью всё содержимое, лежащее между открывающим и закрывающим тегами объекта.
// Свойство innerHTML применяется, в основном, для динамического изменения содержания страницы, например:
// document.body.innerHTML = '<h1 id="bye">Bye! See ya!</h1>';

// getElementById
// document.getElementById("bye").style.color ="yellow";


// document.getElementById("main").innerHTML = '<h1 id="bye" class="see">Bye! See ya!</h1><div id="content-holder"><div id="content">Элемент</div></div>';
// document.getElementById("bye").style.color ="red";

// document.getElementById('content').innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero tempore necessitatibus obcaecati accusamus ullam autem ut iste, vel suscipit adipisci officiis doloribus dolores quasi minus pariatur ex omnis modi neque?';
// document.getElementById('content-holder').style.color ="blue";

// getElementsByTagName
// document.body.getElementsByTagName('h1')[0].innerHTML="Hello world";

// Свойство textContent используется для получения и установки текста узла.

// document.getElementsByTagName('h1')[0].textContent = 'Hello Text Content!';

// querySelectorAll
// document.querySelectorAll('h1')[0].textContent = 'Hello querySelectorAll Text Content!';

// querySelector
// document.querySelector('h1').textContent = 'Hello JavaScript!';

// Метод getElementsByClassName находит массив объектов определенного класса.
// getElementsByClassName
// document.getElementsByClassName('see')[0].innerHTML = 'Hello JavaScript ClassName!';



function messageShow() {
    alert('Документ и все ресурсы загружены!');
  }

// window.onload = function() {
//     messageShow();
// };


// (function(){
//     console.log('Документ и все ресурсы загружены!');
// })();


// window.onbeforeunload = function() {
//     return "Точно перейти? И куда же ты собрался?";
// };

// Добавляет слушателя событий DOMContentLoaded
// document.addEventListener("DOMContentLoaded", ready);

function ready() {
 hello.innerHTML = "Я готова!";
}

// var button = document.getElementById('button')
// .addEventListener('click', buttonClick);

function buttonClick(e) {
     console.log('Button clicked');
}

function buttonClick1(e) {
    document.getElementById('hell').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f';
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
}

function buttonClick2(e){
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
}
  
// (function(){
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("sidebarCollapse").addEventListener('click', function () {
//             document.querySelector(".sidebar").classList.add('active');
//         }
//     );
// })();
 

// (function () {
//     document.getElementById("sidebarCollapse").addEventListener('click', function () {
//         if (document.querySelector(".sidebar").classList.contains("active")) {
//             document.querySelector(".sidebar").classList.remove('active');
//         } else {
//             document.querySelector(".sidebar").classList.add('active');
//         }
//     });
// })();
 


// function el(selector) {
//     return document.querySelector(selector);
// }


// (function () {
//     el("#sidebarCollapse").addEventListener('click', function () {
//         el(".sidebar").classList.add("active");
//         el(".overlay").classList.add("active")
//     });
// })();


// добавление элементу класса "pink"
// elem.classList.add("pink");

// можно добавить нескольких классов через запятую
// elem.classList.add( "pink, container", "bg-big" );

// удаление класса "pink"
// elem.classList.remove("pink");

//можно удалить несколько классов
// elem.classList.remove("pink", "bordered", "clearfix");

// переключение класса "pink"
// elem.classList.toggle("pink");

//свойство,которое возвращает количество классов, назначенных элементу
// elem.classList.length

// проверка, есть ли у элемента класс "pink".
// Если есть - метод возвращает true, если класса нет, то false
// console.log( elem.classList.contains("pink") );
