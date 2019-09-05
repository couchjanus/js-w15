'use strict';

// Синтаксис для создания нового массива:
// var arr = new Array(); // Создали новый пустой массив []
// var arrs = []; // Тоже создали новый пустой массив []
// Создание элементов массива возможно несколькими способами:

// var earth = new Array(4); /* массив из 4-х элементов*/

// earth[0] = "Earth";
// earth[1] = "24 h";
// earth[2] = 6378;
// earth[3] = 365.25;

// var earth = new Array("Earth", "24 h", 6378, 365.25);

// var earth = new Array(); // пустой массив
// earth.xtype = "Solar";
// earth.xday = "24 h";
// earth.radius = 6378;
// earth.period = 365.25;

// var country = ["UK", "USA", "GB"];
// Если вы указываете числа или значения true или false при определении массива, то тип переменной будет числовой или булев тип, а не строковый.

// var arr1 = ['первый элемент', 'второй элемент'];
// console.log(arr1[0]);              // напечатает 'первый элемент'
// console.log(arr1[1]);              // напечатает 'второй элемент'

// Обращение или доступ к элементам массива в javaScript:

// var mas=new Array(1,25,'Hey');
// mas[0]='Bye';
// mas[1]=35;

// Свойство массивов length взаимосвязано с числом свойств.
// var fruits = [];
// fruits.push('банан', 'яблоко', 'персик');
// console.log(fruits.length); // 3

// Длина length – не количество элементов массива, а последний индекс + 1.
// var arr2 = [];
// arr2[1000] = true;
// console.log(arr2.length); // 1001

// При уменьшении length массив укорачивается.
// var arr3 = [1, 2, 3, 4, 5];
// arr3.length = 2; // укоротить до 2 элементов
// console.log(arr3[3] );
// arr3.length = 5; // вернуть length обратно, как было
// console.log(arr3[3]); // undefined: значения не вернулись

// ==============================================
// let addToCart = document.querySelector('.add-to-cart');

// console.dir(typeof(addToCart)); // object

// addToCart.addEventListener('click', function () {
//     let y = 180;
//     document.querySelector('.card-img-top').style.transform = 'rotateY(' + y + 'deg)';
// }); 
// ======================== NodeList ==========================
// let addToCarts = document.querySelectorAll('.add-to-cart'); 

// console.dir(addToCarts); // NodeList(2)
// console.log(addToCarts.length);

// перебор элементов массива addToCarts:

// for (let i = 0; i < addToCarts.length; i++) {
//     console.log(addToCarts.item(i));
//     console.log(addToCarts[i]); // Вызов myNodeList.item(i) необязателен в JavaScript
// }

// Обход DOM коллекций NodeList: 

// Оператор for...of работает только на платформах, где
// реализован NodeList.prototype[Symbol.iterator]

// let list = document.querySelectorAll('.add-to-cart');
// for (let item of list) {
//     console.log(item);
// }

// Метод NodeList.entries () возвращает итератор, позволяющий просмотреть все пары ключ / значение, содержащиеся в этом объекте. Значения являются объектами Node.

// Using for..of
// for(var entry of addToCarts.entries()) { 
//     console.log(entry);
// }

// Метод NodeList.keys () возвращает итератор, позволяющий просмотреть все ключи, содержащиеся в этом объекте. Ключи имеют целое число без знака.

// Using for..of 
// for(var key of addToCarts.keys()) { 
//     console.log(key); 
// }
// Метод NodeList.values () возвращает итератор, позволяющий просмотреть все значения, содержащиеся в этом объекте. Значения являются объектами Node.

// Using for..of 
// for(var value of addToCarts.values()) { 
//     console.log(value); 
// }

// forEach
// addToCarts.forEach( 
//     function(value, index) { 
//       console.log(value + ', ' + index); 
//     }
// );


// let list = document.querySelectorAll('.add-to-cart'); // returns NodeList

// let list_array = Array.prototype.slice.call(list); // преобразует NodeList в Array

// let forEach = Array.prototype.forEach;

// let list = document.querySelectorAll('.add-to-cart');

// forEach.call(list, function(iten){
//     console.log(item); 
// });


// addToCarts.forEach( 
//     function(value, index) { 
//       console.log(value + ', ' + index); 
//     }
// );


// let addToCarts = document.getElementsByClassName('add-to-cart'); // Это HTMLCollection

// console.log(addToCarts.item(0));     // Вы можете использовать метод item( ) для доступа к элементу
// console.log(addToCarts[1]);          // Однако, использование квадратных скобок намного проще и более распространено

// перебор элементов массива addToCarts:

// console.log(addToCarts.length);

// for (let i = 0; i < addToCarts.length; i++) {
//       console.log(addToCarts[i]);
// }

// for (let i=0; i<addToCarts.length; i++ ){
//    addToCarts[i].addEventListener('click', function (e) {
//        console.log(e);
//    });
// }

// for (let i=0; i<addToCarts.length; i++ ){
//     addToCarts[i].addEventListener('click', function (e) {
//         console.log(e.target);
//         // e.target.style.display = 'none';
//     });
// }

// for (let i=0; i<addToCarts.length; i++ ){
//     addToCarts[i].addEventListener('click', function (e) {
//         // ==========parentNode==============
//         // console.log(e.target.parentNode);
//         // console.log(e.target.parentNode.parentNode.parentNode.parentNode);
        
//         // =========childNodes==============
//         // console.log(e.target.parentNode.parentNode.parentNode.parentNode.childNodes);
        
//         // ===========childElementCount==========
//         // console.log(e.target.parentNode.parentNode.parentNode.parentNode.childElementCount);
        
//         // ===========children childElementCount=========
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.children);
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.childElementCount);
        
        // let y = 180;
        // e.target.parentNode.parentNode.parentNode.parentNode.children[0].style.transform = 'rotateY(' + y + 'deg)';

//         // =========firstChild lastChild==============
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstChild);
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.lastChild);
        
//         // =========nextSibling previousSibling=============
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstChild.nextSibling);
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.lastChild.previousSibling);
        
//         // ========firstElementChild lastElementChild==========
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild);

//         e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.style.transform = 'rotateY(' + y + 'deg)';

//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.lastElementChild);
        
//     });
// }




// ================ this =====================
// console.log(this.document === document); // true

// // В браузерах, объект window также является глобальным:
// console.log(this === window); // true

// this.a = 37;
// console.log(window.a); // 37

// function f() {
//     console.log(this === window); // true
// }
// f();

// (function () {
//     console.log(this === window); // true
// })();

// var globalObject = this;
// var foo = (() => this);
// console.log(foo() === globalObject); // true

// var o = {
//     prop: 37,
//     f: function() {
//       return this.prop;
//     }
//   };
// console.log(o.f()); // logs 37

// ============================================
// for (let i=0; i<addToCarts.length; i++ ){
//   addToCarts[i].addEventListener('click', function () {
//       console.log(this);
//       let y = 180;
//       console.log(this.parentNode.parentNode.parentNode.parentNode.firstElementChild);
//       this.parentNode.parentNode.parentNode.parentNode.firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//   });
// }


// for (let i=0; i<addToCarts.length; i++ ){
//   addToCarts[i].addEventListener('click', function () {
//       let y = 180;
//       // this.parentNode.parentNode.parentNode.parentNode.firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//       this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//   });
// }


// let addToCarts = document.querySelectorAll('.add-to-cart');

// addToCarts.forEach(function(addToCart){
//     addToCart.addEventListener('click', function() {
//         let y = 180;
//         this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//     });
// });


// let plus = document.querySelectorAll('.plus');
// plus.forEach(function(el){
//   el.addEventListener('click', function() {
//     let val = this.previousElementSibling.innerText;
//     // val = this.previousElementSibling.innerText = val+1;
//     val = this.previousElementSibling.innerText = +(val)+1;
//   });
// });

// let minus = document.querySelectorAll('.minus');

// minus.forEach(function(el){
//   el.addEventListener('click', function() {
//     let val = this.nextElementSibling.innerText;
//     if (val > 1) {
//     //   val = this.nextElementSibling.innerText = val-1;
//       val = this.nextElementSibling.innerText = +(val)-1;
//     }
//   });
// });
