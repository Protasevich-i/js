/*Task. Получить электронную почту.
Завершите функцию getEmail, чтобы она возвращала электронное письмо,
но без начальных и конечных пробелов.*/

function getEmail(email) {
    return email.trim()
}

// Sample usage - do not modify
console.log(getEmail("  alex@gmail.com  "))
console.log(getEmail("  alex@gmail.com"))
console.log(getEmail("bron@gmail.com   "))

/*Task. Получение имени
Завершите функцию getName, чтобы она преобразовывала полученное имя в
верхний регистр и удаляла начальные и конечные пробелы.*/

function getName(name) {
    let cleaned = name;
    cleaned = cleaned.toUpperCase()
    cleaned = cleaned.trim()
    return cleaned
}

// Sample usage - do not modify
console.log(getName(" sam"))
console.log(getName(" alex  "))

/*Task. Возможность голосования.
Завершите функцию, чтобы она возвращала true, когда возраст пользователя составляет не менее 18 лет,
 и false в противном случае.*/

function canVote(age) {
    return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(25))
console.log(canVote(13))

/*Task. Инверсия булевого типа.
Завершите функцию invertBoolean, чтобы она возвращала противоположное значение.*/

/**
 * @param {boolean} value
 */
function invertBoolean(value) {
    return !value
}

// Sample usage - do not modify
console.log(invertBoolean(true)) // false
console.log(invertBoolean(false)) // true
console.log(invertBoolean(15 > 10)) // false

/*Task. Готовность еды.
Вы пишете функцию, которая помогает пользователю в приготовлении блюда. Завершите функцию,
которая возвращает true, если температура приготовления  находится в промежутке
 от 10 до 15 градусов включительно, и false во всех остальных случаях.*/

/**
 * @param {number} temperature
 */
function isReady(temperature) {
    return temperature >= 10 && temperature <= 15;
}

// Sample usage - do not modify
console.log(isReady(5)) // false
console.log(isReady(13)) // true
console.log(isReady(20)) // false

/*Task. Получение цены билета.
Завершите функцию getTicketPrice, чтобы она возвращала стоимость поездки на поезде в центах.
Стоимость проезда на поезде равна 20 долларам США (2000 центов). Однако пользователи моложе 18 и
старше 60 лет получают скидку в 50%.*/

/**
 * @param {number} age
 */
function getTicketPrice(age) {
    if (age < 18 || age > 60) {
    return 1000
    } return 2000
}

// Sample usage - do not modify
console.log(getTicketPrice(15)) // 1000
console.log(getTicketPrice(30)) // 2000
console.log(getTicketPrice(45)) // 2000
console.log(getTicketPrice(75)) // 1000

/*Task. Просмотр блога.
Вы пишете функцию как часть блога, где пользователи могут публиковать статьи.
Завершите функцию canPreviewArticle, чтобы она возвращала:
1. true когда тип пользователя "admin" или когда установлен флажок isAuthor (пользователь является автором статьи,
поэтому должен иметь возможность предварительного просмотра).
2. false во всех остальных случаях.*/

/**
 * @param {string} type
 * @param {boolean} isAuthor
 */
function canPreviewArticle(type, isAuthor) {
    return type === "admin" || isAuthor === true;
}

// Sample usage - do not modify
console.log(canPreviewArticle("admin", false)) // true
console.log(canPreviewArticle("admin", true)) // true
console.log(canPreviewArticle("user", true)) // true
console.log(canPreviewArticle("user", false)) // false

/*Task. Пользовательский план.
Завершите функцию getUserPlan, чтобы:
1. она возвращала строку Pro, когда пользователь оплатил и выполнил не менее 10 заданий (включительно)
2. она возвращала строку Trial во всех остальных случаях.*/

/**
 * @param {boolean} hasPaid
 * @param {number} completedChallenges
 */
function getUserPlan(hasPaid, completedChallenges) {
    if (hasPaid === true && completedChallenges >= 10) {
        return "Pro"
    } return "Trial"
}

// Sample usage - do not modify
console.log(getUserPlan(true, 5)) // "Trial"
console.log(getUserPlan(true, 20)) // "Pro"
console.log(getUserPlan(false, 5)) // "Trial"
console.log(getUserPlan(false, 20)) // "Trial"

