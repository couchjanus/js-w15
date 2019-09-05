// 

(function(){
    
    const buttons = [
        [7, 8, 9, '+'], 
        [4, 5 ,6, '-'], 
        [1, 2, 3, '*'], 
        [0, '.', '=', '/']
    ];
    // console.log(buttons.length);
    let calc = '<div class="viewer">0</div><button>&#8592;</button><button>C</button>';
    let b = '';

    for (let i=0; i<buttons.length; i++) {
        for (let j=0; j<buttons[i].length; j++) {
            b += `<button>${buttons[i][j]}</button>` 
        }    
    }
    calc += b; 
    document.querySelector('.calculator').innerHTML = calc;

})();

// ====================for ... of==========================

// (function(){
//     const buttons = [
//         [7, 8, 9, '+'], 
//         [4, 5 ,6, '-'], 
//         [1, 2, 3, '*'], 
//         [0, '.', '=', '/']
//     ];
//     let calc = '<div class="viewer">0</div><button>&#8592;</button><button>C</button>';
//     let b = '';

//     for (let button of buttons) {
//         for (let but of button) {
//             b += `<button>${but}</button>` 
//         }    
//     }
//     calc += b; 
//     document.querySelector('.calculator').innerHTML = calc;
// })();

// =================== forEach ============================
//arr.forEach(function callback(currentValue, index, array) {
    //your iterator
// }[, thisArg]);

// (function(){
//     const buttons = [
//         [7, 8, 9, '+'], 
//         [4, 5 ,6, '-'], 
//         [1, 2, 3, '*'], 
//         [0, '.', '=', '/']
//     ];
//     let calc = '<div class="viewer">0</div><button>&#8592;</button><button>C</button>';
//     let b = '';

//     buttons.forEach(function callback(button) {
//         button.forEach(function callback(but) {
//             b += `<button>${but}</button>` 
//         });
//     });

//     calc += b; 
//     document.querySelector('.calculator').innerHTML = calc;
// })();
