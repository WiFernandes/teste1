const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', event => {
    if(event.target.matches('button')){
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        function calculate(n2, n1, operator){
            let result = '';
            if(operator === 'add'){
                result = parseFloat(n1) + parseFloat(n2);
            }else if(operator === 'subtract'){
                result = parseFloat(n1) - parseFloat(n2);
            }else if(operator === 'multiply'){
                result = parseFloat(n1) * parseFloat(n2);
            }else if(operator === 'divide'){
                result = parseFloat(n1) / parseFloat(n2);
            }
            return result;
        }
        if(action !== 'clear'){
            const clearButton = document.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';
        }
        if(!action){
            calculator.dataset.previousKeyType = 'number';
            if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'){
                display.textContent = keyContent;
            }else{
                display.textContent = displayedNum + keyContent;
            }
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
        }else if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            const secondValue = displayedNum;
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
            calculator.dataset.firstValue = displayedNum;
            if(firstValue && operator && secondValue && previousKeyType !== 'operator' && previousKeyType !== 'calculate'){
                const calcValue = calculate(secondValue, firstValue, operator);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
                display.textContent = calculate(secondValue, firstValue, operator);
            }else{
                calculator.dataset.firstValue = displayedNum;
            }
        }else if(action === 'decimal'){
            calculator.dataset.previousKeyType = 'decimal';
            if(!displayedNum.includes('.')){
                display.textContent = displayedNum + '.';
            }else if(previousKeyType === 'operator' || previousKeyType === 'calculate'){
                display.textContent = '0.';
            }
        }else if(action === 'clear'){
            display.textContent = 0;
            if(key.textContent === 'AC'){
                calculator.dataset.firstValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.modValue = '';
                calculator.dataset.previousKeyType = '';
                calculator.dataset.secondValue = '';
                console.log(calculator.dataset.firstValue,  calculator.dataset.operator, calculator.dataset.modValue,  calculator.dataset.previousKeyType,  calculator.dataset.secondValue)
            }else{
                key.textContent = 'AC'
            }
            calculator.dataset.previousKeyType = 'clear';
        }else if(action === 'calculate'){
            let secondValue = displayedNum;
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
           if(firstValue){
            if(previousKeyType === 'calculate'){
                firstValue = displayedNum;
                secondValue = calculator.dataset.modValue;
            }
            display.textContent = calculate(secondValue, firstValue, operator);
           }
           calculator.dataset.previousKeyType = 'calculate';
            calculator.dataset.modValue = secondValue;
        }
    }
})