const calculator = document.querySelector('.calculator');
const calculatorDisplay = document.querySelector('.calculator__display');
const keys = document.querySelector('.calculator__keys');

function calculate (n1, operator, n2){
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if(operator === 'add') return firstNum + secondNum;
    if(operator === 'multiply') return firstNum * secondNum;
    if(operator === 'subtract') return firstNum - secondNum;
    if(operator === 'divide') return firstNum / secondNum;
}

keys.addEventListener('click', event => {
    if(event.target.matches('button')){
        const key = event.target;
        const keyContent = key.textContent;
        const action = key.dataset.action;
        const display = calculatorDisplay;
        const displayedNum = display.textContent;
        const previousKeytype = calculator.dataset.previousKey;
        Array.from(key.parentNode.children).forEach(event => event.classList.remove('is-depressed'));
        if(!action){
            document.querySelector('[data-action = clear]').textContent = 'CE';
            if(display.textContent === '0' || previousKeytype === 'operator'){
                display.textContent =keyContent;
                calculator.dataset.previousKey = '';
            }else{
                display.textContent = displayedNum + keyContent;
            }
        }
        if(action === 'decimal' && !displayedNum.includes('.')){
            if(display === '0'){
                display.textContent = '0.';
            }else{
                display.textContent = displayedNum + '.';
            }
            calculator.dataset.previousKey = 'decimal';
        }
        if(action === 'add' || action === 'divide' || action === 'multiply' || action === 'subtract'){
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            if(firstValue && operator && previousKeytype !== 'operator'){
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.firstValue = display.textContent;
            calculator.dataset.operator = action;
            calculator.dataset.previousKey = 'operator';
            key.classList.add('is-depressed');
            
        }
        if(action === 'clear'){
            calculator.dataset.firstValue = '';
            calculator.dataset.operator = '';
            display.textContent = '0';
            key.textContent = 'AC';
            calculator.dataset.previousKey = 'clear';
        }
        if(action === 'calculate'){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            if(firstValue && previousKeytype !== 'calculate'){
                display.textContent = calculate(firstValue, operator, secondValue);
                calculator.dataset.previousKey = 'calculate';
            }
        }
    }
});