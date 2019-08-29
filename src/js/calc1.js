let display = document.getElementById('viewer');

let leftOperand, 
    operation,
    rightOperand;
    let sum = 0;

    let b2 = document.getElementById('b2');
    let b1 = document.getElementById('b1');
    let plus = document.getElementById('plus');
    let equal = document.getElementById('equal');

    b2.onclick = function(){
        leftOperand  = b2.textContent;
        console.log(leftOperand);
    }

    b1.onclick = function(){
        rightOperand  = b1.textContent;
        console.log(rightOperand);
    }
    
    plus.onclick = function(){
        operation = '+';
    }

    equal.onclick = function(){
        if (operation == '+') {
        sum = parseInt(leftOperand) + parseInt(rightOperand);
        console.log(sum);
        }
        display.textContent  = sum;
    }
