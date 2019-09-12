'use strict';

function first(){
  console.log(1);
}
function second(){
  console.log(2);
}
first();
second();
// Как вы и ожидаете, функция first выполнится первой, а функция second после нее, и в консоли будет выведен следующий результат: 1 2

// Но что если функция first содержит некий код, который не может выполниться немедленно? К примеру, запрос к API, где мы отправляем запрос и должны ждать ответа. Чтобы смоделировать такую ситуацию, мы используем функцию setTimeout, которая вызывает функцию после заданного временного промежутка. Мы отсрочим выполнение функции на 500 миллисекунд, как будто бы это запрос к некому API. Теперь код будет выглядеть так:

function first(){
  // Как будто бы запрос к API
  setTimeout( function(){
    console.log(1);
  }, 500 );
}
function second(){
  console.log(2);
}
first();
second();
// Основная идея – теперь мы отложили исполнение команды console.log(1) на 500 миллисекунд.
// теперь наша программа выведет 2 1

// Хотя мы по-прежнему вызываем функцию first первой, ее вывод появился вторым, после вывода функции second. Но JavaScript не нарушает порядок вызова функций, он просто не дожидается ответа от функции first, а сразу двигается дальше – к функции second.

// нельзя просто вызывать функции в нужном порядке и надеяться, что они в любом случае выполнятся в том же порядке. callback-функции позволяют нам быть уверенными в том, что определенный код не начнет исполнение до того момента, пока другой код не завершит исполнение./ push

let img = document.querySelector('.album img');
let offset=-150;
let rect = img.getBoundingClientRect();

let elements = ['translate3D('];

// elements.push(rect.left - offset + 'px,');
// elements.push(rect.top - offset + 'px,0)');
// console.log(elements);
// Array(3)0: "translate3D("1: "876px,"2: "269px,0)"length: 3__proto__: Array(0)
// ===============================================
// elements.join('');
// console.log(elements.join('')); // translate3D(360px,269px,0)
// ===============================================
// А если нужно будет добавить новый элемент в конец массива, кроме push() можно использовать spread-оператор:
// console.log([...elements, rect.left - offset + 'px,'])
// console.log([...elements, rect.top - offset + 'px,0)'])

// elements = [...elements, rect.left - offset + 'px,', rect.top - offset + 'px,0)'];
// console.log(elements);
// console.log(elements.join('')); // translate3D(360px,269px,0)
elements = [...elements, rect.left - offset + 'px,', rect.top - offset + 'px,0)'].join('');
console.log(elements);
