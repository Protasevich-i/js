/*project. Варианты названий функций.
Вам нужно написать 3 функции:
getNumberOfChars, которая принимает один параметр и возвращает его длину.
getLower, которая принимает 1 параметр и возвращает его копию в нижнем регистре.
getUpper, которая принимает 1 параметр и возвращает его копию в верхнем регистре.*/

function getNumberOfChars(long) {
    return long.length
}
function getLower(lower) {
    return lower.toLowerCase()
}
function getUpper(up) {
    return up.toUpperCase()
}
// -------------
// code for project - do not change
// -------------
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(name.value);
    answer2.textContent = getLower(name.value);
    answer3.textContent = getUpper(name.value);
});