const display = document.getElementById('operation-result');

//seleciona todas as teclas de numeros
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=operator]');

const cleanDisplay = document.getElementById('cleanDisplay');
const cleanDigit = document.getElementById('cleanDigit');

const result = document.getElementById('equal');

result.addEventListener("click", clickOperator);

function clickOperator(){
    if(display.innerHTML) {
            display.innerHTML = eval(display.innerHTML)
    }
}

//limpa digito
cleanDigit.addEventListener('click', () => {    
    let valueResult = display.textContent;
    display.textContent = valueResult.substring(0, valueResult.length -1);
    //console.log("funcao remove: " + display.textContent);
})

//limpa display
cleanDisplay.addEventListener('click', () => display.textContent = "");

//atualiza o display com o valor capturado do click
const updateDisplay = (text) => {
        display.textContent += text;
}

//captura o valor do click
const insertClick = (event) => updateDisplay(event.target.textContent);

//adiciona um evento de click para toda tecla de numero
numbers.forEach (number => number.addEventListener('click', insertClick));
operators.forEach (operator => operator.addEventListener('click', insertClick))
