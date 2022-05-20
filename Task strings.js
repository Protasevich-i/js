/*Task. Средний балл.
Вам дан код, который вычисляет среднее значение оценок в школе.
Не изменяйте существующий код. Необходимо, чтобы вы увидели, каким будет значение `average`
после вычисления функции. Для этого выведите результат в консоль.*/

let grades = [10, 20, 9]
let sum = 0
grades.forEach(function(grade){
    sum = sum + grade
})
let average = sum / grades.length
console.log(average)

/*Task. Получить следующий век.
В функции getNextCentury запишите в консоль значение `year + 100`.
Год должен отображаться в консоли.*/

function getNextCentury(year) {
    console.log(year + 100)
}

// Sample usage - Do not modify
getNextCentury(2020) // 2120
getNextCentury(3000) // 3100

/*Task. Имя в верхнем регистре.
Завершите функцию getUpperCaseName, чтобы она возвращала имя, которое она
получает в качестве параметра, в верхнем регистре.*/

function getUpperCaseName(name){
    console.log(name.toUpperCase())
}

// Sample usage (do not modify)
getUpperCaseName("sam") // SAM
getUpperCaseName("alex") // ALEX
getUpperCaseName("Johnny") // JOHNNY

/*Task. Имя в нижнем регистре.
Завершите функцию getLowerCaseName, чтобы она возвращала имя, которое она
получает в качестве параметра, в нижнем регистре.*/

function getLowerCaseName(name) {
    console.log(name.toLowerCase())
}

// Sample usage (do not modify)
getLowerCaseName("SAM")
getLowerCaseName("ALEX")
getLowerCaseName("JoHNnY")