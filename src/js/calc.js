(function(){
    const buttons = [
        [7, 8, 9, '+'], 
        [4, 5 ,6, '-'], 
        [1, 2, 3, '*'], 
        [0, '.', '=', '/']
    ];
    let calc = '<div class="viewer">0</div><button>&#8592;</button><button>C</button>';
    let b = '';

    buttons.forEach(function callback(button) {
        button.forEach(function callback(but) {
            b += `<button>${but}</button>` 
        });
    });

    calc += b; 
    document.querySelector('.calculator').innerHTML = calc;

    let display = document.querySelector('.viewer');
    let allButtons = document.querySelectorAll('button');
    // console.log(allButtons);
    
    let leftOperand, currentOperation;

    for (let i=0; i<allButtons.length; i++){
        let el = allButtons[i];
        el.addEventListener('click', function() {
            if (Number.isInteger(+this.innerText)||this.innerText === '.') {
                if (+display.innerText === 0) {
                    display.innerText = this.innerText;
                } else {
                    display.innerText = display.innerText + this.innerText;
                }
            }
            if (this.innerText.toLowerCase() === 'c') {
                display.innerText = 0;
            }
    
            // Remove a char from right
            if (this.innerText.charCodeAt(0) === 8592 ) {
                if (+display.innerText.length > 1) {
                    display.innerText = display.innerText.slice(0, display.innerText.length-1);
                } else {
                    display.innerText = 0;
                }
            }
            if (this.innerText === '+' ||
                this.innerText === '-' ||
                this.innerText === '*' ||
                this.innerText === '/') {
                 leftOperand = display.innerText;
                 currentOperation = this.innerText;
                 display.innerText = 0;
            }
    
            if (this.innerText === '=') {
                if (leftOperand) {
                    eval('var result = function(){return +leftOperand ' + currentOperation + ' +display.innerText }()');
                    display.innerText = result;
                    leftOperand = null;
                    currentOperation = null;
                }
            }
    
        });
    };

})();
