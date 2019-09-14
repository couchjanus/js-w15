'use strict';

// function initStorage() {
//   window.localStorage.getItem("basket") ?
//     window.localStorage.getItem("basket") :
//     window.localStorage.setItem("basket", '');
// }

function initStorage() {
  window.localStorage.getItem("basket") ?
    window.localStorage.getItem("basket") :
    window.localStorage.setItem("basket", JSON.stringify([]));
}

const data = [{
  id: 0,
  name: "Cool Cat",
  price: 77,
  picture: ["cat1.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg", "cat7.jpg"],
  subtitle: ["Mama mia!", "Je t'adore", "Beach cat", "Tropical cat", "White building cat"],
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
  id: 1,
  name: "Black Cat",
  price: 66,
  picture: ["cat2.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg", "cat7.jpg"],
  subtitle: ["Tropical cat", "Mama mia!", "Je t'adore", "Beach cat", "White building cat"],
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},];

class Product {
  constructor(id, name, price, picture, amount){
        this.id = id;
        this.name = name;
        this.price = price;
        this.picture = picture;
        this.amount = amount;
  }
}

(function() {

  // Проверить, поддерживает ли браузер API sessionStorage и localStorage можно с помощью следующей строки:
  // if (window.sessionStorage && window.localStorage) {
  //   // объекты sessionStorage и localstorage поддерживаются
  //   console.log('объекты sessionStorage и localstorage поддерживаются');
  // } else {
  //   // объекты sessionStorage и localstorage не поддерживаются
  //   console.log('объекты sessionStorage и localstorage не поддерживаются');
  // }

  initStorage();
  
  // if (localStorage) {
  //     console.log("It's basket storage");
  //     console.log('localStorage.length = ', localStorage.length);
  //     console.log('localStorage.basket.length = ', localStorage.basket.length);
      
  //     // LocalStorage имеет простой API - всего 5 метода.
  //     // Storage.key(Ключ)  // Получить имя n-ного ключа в Storage
  //     console.log('Получить имя n-ного ключа в Storage: ', localStorage.key(0));
  //     // Storage.getItem(Ключ)  // Получить значение ключа.
  //     console.log('Получить имя n-ного ключа в Storage: ', localStorage.getItem('basket'));
  //     // Storage.setItem(Ключ, Значение)  // Добавление  ключа в Storage или обновление его значение, если ключ уже существовал.
  //     localStorage.setItem('basket', 'true');
  //     console.log('Добавление  ключа в Storage или обновление его значение, если ключ уже существовал: ', localStorage.getItem('basket'));
  //     // Storage.removeItem(Ключ)   // Удалит этот ключ из Storage.
  //     localStorage.removeItem('basket');
  //     console.log('Удалит этот ключ из Storage: ', localStorage.getItem('basket'));
  //     // Storage.clear()   // При вызове, метод удалит все ключи из Storage.
  //     localStorage.clear();
  //     console.log('localStorage.length = ', localStorage.length);
  // }

  // let stringifyData = JSON.stringify(data);
  
  // console.log(stringifyData);
    
  // let parseData = JSON.parse(stringifyData);
  
  // console.log(parseData[1] );
  
  // console.log(parseData[1]['picture'] );
  
  // console.log(parseData[1]['picture'][1] );
  
// ---------------------------------

// создадим объект

// let product = {
//   id: 1, 
//   name: 'Cat', 
//   price: 555, 
//   picture:['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
//   amount: 1
// };

// let serialProduct = JSON.stringify(product); // сериализуем product
// console.log('serialProduct: ', serialProduct);

// localStorage.setItem("basket", serialProduct); // запишем serialProduct в хранилище по ключу "basket"
// console.log('localStorage.basket: ', localStorage.basket);

// let returnProduct = JSON.parse(localStorage.getItem("basket")) // парсим basket обратно в объект
// console.log('returnProduct: ', returnProduct);

  
// let tmpProducts = new Product(id, name, price, picture, 1);
  
// window.localStorage.setItem("basket",JSON.stringify(tmpProducts));
// console.log('localStorage.basket: ', localStorage.basket);



// =============== Стрелочные функции =========================

  // Базовый синтаксис
  // (param1, param2, …, paramN) => { statements }
  // (param1, param2, …, paramN) => expression
  // эквивалентно: (param1, param2, …, paramN) => { return expression; }
  
  // Круглые скобки не обязательны для единственного параметра:
  // (singleParam) => { statements }
  // singleParam => { statements }
  
  // Функция без параметров нуждается в круглых скобках:
  // () => { statements }
  // () => expression 
  // Эквивалентно: () => { return expression; }

  // Расширенный синтаксис
  // Когда возвращаете литеральное выражение объекта, заключите тело в скобки
  // params => ({foo: bar})
  
  // Rest параметры и параметры по умолчанию поддерживаются
  // (param1, param2, ...rest) => { statements }
  // (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
  
  // Деструктуризация тоже поддерживается
  // var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
  // f();  // 6



// ================== Метод some ===========================

// localStorage.clear();
// initStorage();

// let products = [];

// // создадим объект

// let prod = {
//   id: 1, 
//   name: 'Nice Cat', 
//   price: 555, 
//   picture:['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
//   amount: 1
// };

// products.push(new Product(prod.id,prod.name,prod.price,prod.picture,prod.amount));

// // tmpProducts.push(new Product(prod.id,prod.name,prod.price,prod.picture,1));

// window.localStorage.setItem("basket",JSON.stringify(products));

// function getProducts() {
//   return JSON.parse(window.localStorage.getItem("basket"));
// }

// let tmpProducts = getProducts();

// console.log('tmpProducts: ', tmpProducts);

// Метод some() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдет такой, для которого callback вернет истинное значение (значение, становящееся равным true при приведении его к типу Boolean). 

// Проверка значений элементов массива - существует ли в массиве какой-нибудь элемент с elem.id = id.

// let id = 1;

// let exist = tmpProducts.some(elem => {
//   return elem.id === id;
// });

// Если такой элемент найден, метод some() немедленно вернёт true. В противном случае, если callback вернёт false для всех элементов массива, метод some() вернёт false. 

// console.log(exist);

// Функция callback вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

// if(tmpProducts.length > 0){
//   let exist = tmpProducts.some(elem => {
//     return elem.id === prod.id;
//   });
// }

// Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

// Метод some() не изменяет массив, для которого он был вызван.
// console.log(tmpProducts);

// Диапазон элементов, обрабатываемых методом some(), устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода some(), не будут посещены функцией callback. Если существующие элементы массива изменятся, значения, переданные в функцию callback, будут значениями на тот момент времени, когда метод some() посетит их; удалённые элементы посещены не будут.

// Пример: проверка значений элементов массива

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

// Стрелочные функции предоставляют более краткий синтаксис для подобных проверок.
[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true


// if(tmpProducts.length > 0){
//   let exist = tmpProducts.some(elem => {
//     return elem.id === prod.id;
//   });
//   if(exist){
//     tmpProducts.forEach(elem => {
//         if(elem.id === prod.id){
//           elem.amount += 1;
//         }
//     })
//   } else {
//     tmpProducts.push(new Product(prod.id,prod.name,prod.price,prod.picture,1));
//   }
// }
// else{
//   tmpProducts.push(new Product(prod.id,prod.name,prod.price,prod.picture,1));
// }
// window.localStorage.setItem("basket",JSON.stringify(tmpProducts));

// ====================Лямбда-выражения==========================

// Лямбда-выражения присутствуют в большинстве современных языков программирования (Python, Ruby, Java ...). Это просто выражения, которые создают функции. Это действительно важно для языка программирования для поддержки функций первого класса, что в основном означает передачу функций в качестве аргументов другим функциям или присвоение их переменным.

// В JavaScript у есть функциональные выражения, которые дают нам анонимную функцию

// var anon = function (a, b) {return a + b};

// // В ES6 есть стрелочные функции

// // Можно написать приведенный выше пример как:
// var anon = (a, b) => a + b;
// // или 
// var anon = (a, b) => {return a + b};
// // если у нас есть только один параметр, мы можем опускать скобки
// var anon = a => a;
// // и без параметров
// var () => {} // noop

// let index = e.target.closest('.cart-item').getAttribute('id');
// console.log('index= ', index);

// x => x.id === +(index))


// ================== Метод find ===========================

// Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.


// Пример: поиск простого числа в массиве
// Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает undefined, если в массиве нет простых чисел).

// function isPrime(element, index, array) {
//   var start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
// console.log([4, 5, 8, 12].find(isPrime)); // 5

// Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение (метод использует оператор ===, тройное равно).

// let index = e.target.closest('.cart-item').getAttribute('id');
// console.log('index= ', index);

// tmpProducts.splice(tmpProducts.indexOf(tmpProducts.find(x => x.id === +(index))), 1);

})();