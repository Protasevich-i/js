/*project. Калькулятор функций.
Вам нужно написать следующие 4 функции:
1. sum, которая принимает 2 параметра и возвращает результат их суммы.
2. subtract, которая принимает 2 параметра и возвращает результат их разницы.
3. multiply, которая принимает 2 параметра и возвращает результат их произведения.
4. divide, которая принимает 2 параметра и возвращает результат их деления.*/

function sum(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
// -------------
// code for project - do not change
// -------------
let output = document.querySelector("#output")

let firstNumber = 0
let operation = null
let resetAfterOperation = false

document.querySelectorAll("#calculator .number").forEach(button => {
    button.addEventListener("click", event => {
        let value = event.currentTarget.textContent
        if (resetAfterOperation){
            output.value = value
            resetAfterOperation = false
        } else {
            output.value += value
        }
    })
})

document.querySelectorAll("#calculator .operation").forEach(button => {
    button.addEventListener("click", event => {
        firstNumber = Number.parseInt(output.value)
        operation = event.currentTarget.dataset.action
        resetAfterOperation = true
    })
})

const equal = document.querySelector("#calculator .equal")
equal.addEventListener("click", () => {
    if (!operation){
        return
    }
    resetAfterOperation = true
    let secondNumber = Number.parseInt(output.value, 10)

    if (operation === "sum") {
        output.value = sum(firstNumber, secondNumber)
    } else if (operation === "subtract") {
        output.value = subtract(firstNumber, secondNumber)
    } else if (operation === "multiply") {
        output.value = multiply(firstNumber, secondNumber)
    } else if (operation === "divide") {
        output.value = divide(firstNumber, secondNumber)
    }
    //reset operation
    operation = null
})