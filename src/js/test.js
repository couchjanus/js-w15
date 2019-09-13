'use strict';

function initStorage() {
  window.localStorage.getItem("basket") ?
    window.localStorage.getItem("basket") :
    window.localStorage.setItem("basket", '');
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
  if (window.sessionStorage && window.localStorage) {
    // объекты sessionStorage и localstorage поддерживаются
    console.log('объекты sessionStorage и localstorage поддерживаются');
  } else {
    // объекты sessionStorage и localstorage не поддерживаются
    console.log('объекты sessionStorage и localstorage не поддерживаются');
  }

  initStorage();
  
  if (localStorage) {
      console.log("It's basket storage");
      console.log('localStorage.length = ', localStorage.length);
      console.log('localStorage.basket.length = ', localStorage.basket.length);
      
      // LocalStorage имеет простой API - всего 5 метода.
      // Storage.key(Ключ)  // Получить имя n-ного ключа в Storage
      console.log('Получить имя n-ного ключа в Storage: ', localStorage.key(0));
      // Storage.getItem(Ключ)  // Получить значение ключа.
      console.log('Получить имя n-ного ключа в Storage: ', localStorage.getItem('basket'));
      // Storage.setItem(Ключ, Значение)  // Добавление  ключа в Storage или обновление его значение, если ключ уже существовал.
      localStorage.setItem('basket', 'true');
      console.log('Добавление  ключа в Storage или обновление его значение, если ключ уже существовал: ', localStorage.getItem('basket'));
      // Storage.removeItem(Ключ)   // Удалит этот ключ из Storage.
      localStorage.removeItem('basket');
      console.log('Удалит этот ключ из Storage: ', localStorage.getItem('basket'));
      // Storage.clear()   // При вызове, метод удалит все ключи из Storage.
      localStorage.clear();
      console.log('localStorage.length = ', localStorage.length);
  }

  let stringifyData = JSON.stringify(data);
  console.log(stringifyData);
    
  let parseData = JSON.parse(stringifyData);
  
  console.log( parseData[1] );
  
  console.log( parseData[1]['picture'] );
  
  console.log( parseData[1]['picture'][1] );
  
// ---------------------------------

// создадим объект

let product = {
  id: 1, 
  name: 'Cat', 
  price: 555, 
  picture:['cat1.jpg', 'cat2.jpg', 'cat3.jpg']
};

let serialProduct = JSON.stringify(product); // сериализуем product
console.log('serialProduct: ', serialProduct);

localStorage.setItem("basket", serialProduct); // запишем serialProduct в хранилище по ключу "basket"
console.log('localStorage.basket: ', localStorage.basket);

let returnProduct = JSON.parse(localStorage.getItem("basket")) // парсим basket обратно в объект
console.log('returnProduct: ', returnProduct);

  
  // let tmpProducts = new Product(id, name, price, picture, 1);
  
  // window.localStorage.setItem("basket",JSON.stringify(tmpProducts));
  // console.log('localStorage.basket: ', localStorage.basket);

  // ========================================

  // Базовый синтаксис
  (param1, param2, …, paramN) => { statements }
  (param1, param2, …, paramN) => expression
  // эквивалентно: (param1, param2, …, paramN) => { return expression; }
  
  // Круглые скобки не обязательны для единственного параметра:
  (singleParam) => { statements }
  singleParam => { statements }
  
  // Функция без параметров нуждается в круглых скобках:
  () => { statements }
  () => expression 
  // Эквивалентно: () => { return expression; }

  // Расширенный синтаксис
  // Когда возвращаете литеральное выражение объекта, заключите тело в скобки
  params => ({foo: bar})
  
  // Rest параметры и параметры по умолчанию поддерживаются
  (param1, param2, ...rest) => { statements }
  (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
  
  // Деструктуризация тоже поддерживается
  var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
  f();  // 6
  

  // В некоторых функциональных шаблонах приветствуются более короткие функции. Сравните:
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
elements.map(function(element) {
  return element.length;
}); // Это выражение вернет массив [8, 6, 7, 9]

// Функцию выше можно записать как стрелочную функцию:
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Если единственным оператором в выражении стрелочной функции является return,
// можно удалить return и окружающие фигурные скобки

elements.map(element => element.length); // [8, 6, 7, 9]

// В данном случае, поскольку нам нужно только свойство length, мы можем использовать деструктуризированный параметр:
// Обратите внимание, что строка `"length"` соответствует свойству, которое мы хотим получить,
// в то время как `lengthFooBArX` это просто имя переменной, которую можно назвать как вы хотите
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Это задание деструктуризированного параметра может быть записано, как показано ниже. Тем не менее, обратите внимание,
// что нет строки `"length"`, чтобы выбрать, какое свойство мы хотим получить. Вместо этого в качестве свойства,
// которое мы хотим извлечь из объекта, используется само литеральное имя переменной `length`
elements.map(({ length }) => length); // [8, 6, 7, 9]

// Лямбда-выражения присутствуют в большинстве современных языков программирования (Python, Ruby, Java ...). Это просто выражения, которые создают функции. Это действительно важно для языка программирования для поддержки функций первого класса, что в основном означает передачу функций в качестве аргументов другим функциям или присвоение их переменным.

// В пре-ES6 JavaScript у нас есть функциональные выражения, которые дают нам анонимную функцию (функцию без имени).

var anon = function (a, b) {return a + b};
// В ES6 у нас есть функции стрелок с более гибким синтаксисом, которые имеют некоторые бонусные функции и ошибки.

// мы могли бы написать приведенный выше пример как:
var anon = (a, b) => a + b;
// или же
var anon = (a, b) => {return a + b};
// если у нас есть только один параметр, мы можем потерять скобки
var anon = a => a;
// и без параметров
var () => {} // noop

// это выглядит довольно хорошо, когда вы меняете что-то вроде:
// [1,2,3,4] .filter (функция (значение) {возвращаемое значение% 2 === 0});
// к:
// [1,2,3,4] .filter (значение => значение% 2 === 0);
// Одним из основных преимуществ функций стрелок является то, что они не имеют своих собственных значений. Именно это лексически связано с огибающей. Это значит, что мы можем попрощаться с этим ужасным рисунком:

class Logger {
  dumpData(data) {
    var _this = this;

    // this dumps data to a file and get the name of the file via a callback
    dump(data, function (outputFile) {
      _this.latestLog = outputFile;
    });
  }
}
// using arrow functions
class Logger {
  dumpData(data) {
    dump(data, outputFile => this.latestLog = outputFile);
  }
}
// However there are some gotchas you should be aware of:

// This should be pretty obvious, but because this is lexically bound you can't change it; call() and apply() will not be able to provide another value for this.
// There is no arguments variable:
  (function () {console.log(arguments)})(1, 2); // will output [1, 2]
  (() => console.log(arguments))(1, 2); // will raise ReferenceError: arguments is not defined
// Be careful when returning object literals
  (() => {foo: 1})() // this will return undefined. 'foo: 1' is interpreted as a statement composed of a label and the literal 1
  // the correct way should be wrapping it with parenthesis
  (() => ({foo: 1}))() // returns Object {foo: 1}
// Remember this is all ES6 and not supported by all browsers but you can always use Babel.

// Однако есть некоторые ошибки, о которых вы должны знать:

// Это должно быть довольно очевидно, но поскольку это лексически связано, вы не можете его изменить; call () и apply () не смогут предоставить другое значение для этого.
// Переменная аргументов отсутствует:
  (function () {console.log (arguments)}) (1, 2); // выведем [1, 2]
  (() => console.log (arguments)) (1, 2); // вызовет ReferenceError: аргументы не определены
// Будьте осторожны при возврате литералов объекта
  (() => {foo: 1}) () // это вернет undefined. 'foo: 1' интерпретируется как утверждение, состоящее из метки и литерала 1
  // правильный путь должен заключаться в скобки
  (() => ({foo: 1})) () // возвращает объект {foo: 1}
// Помните, что это все ES6 и поддерживается не всеми браузерами, но вы всегда можете использовать Babel.

let index = e.target.closest('.cart-item').getAttribute('id');
// console.log('index= ', index);

// x => x.id === +(index))

// Пример: поиск простого числа в массиве
// Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает undefined, если в массиве нет простых чисел).

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5

// Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение (метод использует оператор ===, тройное равно).

let index = e.target.closest('.cart-item').getAttribute('id');
// console.log('index= ', index);

tmpProducts.splice(tmpProducts.indexOf(tmpProducts.find(x => x.id === +(index))), 1);

})();