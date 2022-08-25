let count = [];
let saveAction;

const MAX_VISOR_CHAR = 10;

const displayResult = document.getElementById("operation-result");
const displayAccumulator = document.getElementById("operation-accumulator");

function addNumber(num) {
    displayResult.removeAttribute("hidden")
    if (displayResult.innerHTML.length < MAX_VISOR_CHAR) {
        displayResult.innerHTML += num;
    }

}

function cleanCurrentEntry() {
    displayResult.innerHTML = "";
}

function cleanDigit() {
    let valueResult = displayResult.innerHTML;
    displayResult.innerHTML = valueResult.substring(0, valueResult.length -1);
}

function cleanAll() {
    displayResult.innerHTML = ""
    displayAccumulator.innerHTML = ""
    count = []
}

function processAction(num1, num2, action) {
    switch (action) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return num1 / num2
    }
}

function addComma() {
    var currentNumber = display.innerHTML

    if (currentNumber == ''){
        displayResult.removeAttribute("hidden")
        displayResult.innerHTML = "0."
    }
    else if (!currentNumber.includes(".")) {
        displayResult.innerHTML += "."
    }

}

function calcAction(action) {
    var currentNumber = displayResult.innerHTML

    if (currentNumber.length === 0) { return }

    count.push(Number(displayResult.innerHTML))

    if (currentNumber.split('')[currentNumber.length - 1] == '.'){
        displayAccumulator.removeAttribute("hidden")
        displayAccumulator.innerHTML += ` ${displayResult.innerHTML}0 ${action}`
    }
    else{
        displayAccumulator.removeAttribute("hidden")
        displayAccumulator.innerHTML += ` ${displayResult.innerHTML} ${action}`
    }

    displayResult.innerHTML = ""

    count.push(action)
}

function result() {
    currentAccum = displayAccumulator.innerHTML
    currentNumber = displayResult.innerHTML

    if (currentAccum[currentAccum.length - 1] === "=" && currentNumber.length > 0) {
        displayResult.innerHTML = processAction(Number(currentNumber), Number(currentNumber), saveAction).toString().substring(0, MAX_VISOR_CHAR)
    }

    if (count.length === 0) { return }

    count.push(Number(displayResult.innerHTML))
    displayAccumulator.innerHTML += ` ${displayResult.innerHTML} =`
    proccessResult()
}

function proccessResult() {
    let action = null
    let current = null

    let total = 0;

    if (isNaN(count[count.length - 1])) {
        count.pop()
    }

    count.forEach(n => {
        if (!isNaN(n)) {
            if (current == null) {
                current = n
            } else {
                total += processAction(current, n, action)
                current = null
            }
        } else {
            action = n
            saveAction = n
        }
    })

    if (current != null) {
        total = processAction(total, current, action)
    }

    displayResult.innerHTML = total.toString().substring(0, MAX_VISOR_CHAR)
    count = []

}