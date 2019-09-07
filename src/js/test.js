'use strict';

// let example = document.querySelector('.example');
// let div = document.createElement("div");
// let divText = document.createTextNode("Hello Element!");

// div.appendChild(divText);

// // appendChild Добавляет элемент в конец списка дочерних элементов родителя. 

// example.appendChild(div);

// ===============================================
// Вставляемый узел становится последним в списке дочерних узлов элемента.
// let aOne = document.createElement('a');
// aOne.href = "http://google.com";
// aOne.innerText = "Goodling!";
// example.appendChild(aOne);

// ===============================================
// let element = document.createElement("article");
// element.innerHTML = "<h2>Hello Article!</h2><div>Вставка в самое начало родителя, то есть перед первым узлом</div>";

// let parent = document.querySelector('.example');

// // Вставка в самое начало родителя, то есть перед первым узлом
// parent.insertBefore(element, parent.firstChild);

// ===============================================
// Вставка после конкретного элемента parent.nextElementSibling
// здесь происходит вставка перед тем узлом, который находится сразу за узлом parent.nextElementSibling

// let element_next = document.createElement("article");
// element_next.innerHTML = "<h2>Hello Sibling!</h2><div class='footer-example'>Вставка перед тем узлом, который находится сразу за узлом parent.nextElementSibling</div>";

// parent.insertBefore(element_next, parent.nextElementSibling);
// ===============================================
// // Создаем новый пустой элемент
// let sp1 = document.createElement("span");
// // Присваиваем ему id 'newSpan'
// sp1.setAttribute("id", "newSpan");
// // Создаем строку.
// let sp1_content = document.createTextNode("New replacement span element.");

// // Добавляем контент в созданный нами узел
// sp1.appendChild(sp1_content);

// // создаем ссылку на элемент который будем заменять
// let sp2 = document.querySelector('.footer-example');
// let parentDiv = sp2.parentNode;

// // заменяем существующий элемент sp2 на созданный нами sp1
// parentDiv.replaceChild(sp1, sp2);

// ===============================================
// let list = document.querySelector('.example');

// /* добавляем новый элемент */
// list.insertAdjacentHTML('beforeend', '<a href="#"><i class="fab fa-github"></i></a>');

// ===============================================
// let templateSource = document.getElementById("template-item").innerHTML;       

// let article = document.createElement("article");
// article.innerHTML = document.getElementById("template-item").innerHTML;
// document.querySelector('.example').appendChild(article);


// let addToCarts = document.querySelectorAll('.add-to-cart');

// addToCarts.forEach(function(addToCart){
//     addToCart.addEventListener('click', function() {
//         let y = 180;
//         this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';

//         let content = document.getElementById("cartItem").content;
//         document.querySelector('.cart-items').appendChild(content);
//     });
// });


// addToCarts.forEach(function(addToCart){
//   addToCart.addEventListener('click', function() {
//       let y = 180;
//       this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';

//       let content = document.getElementById("cartItem").content;
//       document.querySelector('.cart-items').append(document.importNode(content, true));
//   });
// });


// function addProductToCart(content){
//   content.querySelector('.item-name').textContent = "Red Cat";
//   content.querySelector('.quontity').textContent = 2;
//   content.querySelector('.item-price').textContent = 12.34;
 
//   content.querySelector('.item-img').style.backgroundImage = "url(02.cafa12f0.jpg)";
  
//   document.querySelector('.cart-items').append(document.importNode(content, true));
// }

// addToCarts.forEach(function(addToCart){
//   addToCart.addEventListener('click', function() {
//       let y = 180;
//       this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//       let content = document.getElementById("cartItem").content;
//       addProductToCart(content);
//   });
// });


// ==================================================

  // function addProductToCart(content, item) {
  //   content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
    
  //   content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
    
  //   content.querySelector('.item-img').style.backgroundImage = "url("+item.querySelector("img").getAttribute('src')+")";
  //   ;
  //   document.querySelector('.cart-items').append(document.importNode(content, true));
  // }
    

  //   addToCarts.forEach(function(addToCart){
  //     addToCart.addEventListener('click', function() {
  //         let y = 180;
  //         this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
  //         let content = document.getElementById("cartItem").content;
  //         addProductToCart(content, this.closest(".card"));
  //     });
  //   });
        
  // ==========================================

//   function addProductToCart(content, item){
//     content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
//     content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
//     content.querySelector('.item-img').style.backgroundImage = "url("+item.querySelector("img").getAttribute('src')+")";
//     ;
//     return content;
// }

// addToCarts.forEach(function(addToCart){
//   addToCart.addEventListener('click', function() {
//       let y = 180;
//       this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//       let content = document.getElementById("cartItem").content;
//       document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, this.closest(".card")), true));
//   });
// });

  // ===============================================

//   function addProductToCart(content, item){
//     content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
//     content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
//     content.querySelector('.item-img').style.backgroundImage = "url("+item.querySelector("img").getAttribute('src')+")";
//     ;
//     return content;
// }

// const content = document.getElementById("cartItem").content;

// addToCarts.forEach(function(addToCart){
//   addToCart.addEventListener('click', function() {
//       let y = 180;
//       this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//       // let content = document.getElementById("cartItem").content;
//       document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, this.closest(".card")), true));
      
//   });
// });

// ===============================================
