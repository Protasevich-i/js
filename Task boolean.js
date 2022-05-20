/*Task. Можно голосовать
Завершите функцию canVote, чтобы она возвращала значение `true`,
когда пользователь может голосовать и `false`  в противном случае.
Возраст пользователя должен быть больше или равен 18.*/

function canVote(age) {
    console.log(age >= 18)
}

// Sample usage (do not modify)
canVote(10) // should return false
canVote(18) // should return true
canVote(25) // should return true

/*Task. Вам есть 18 лет?
Завершите функцию isEighteenYearsOld, чтобы она возвращала истину,
когда возраст пользователя равен 18 лет.*/

function isEighteenYearsOld(age) {
    console.log(age === 18)
}

// Sample usage (do not modify)
isEighteenYearsOld(10) // false
isEighteenYearsOld(18) // true
isEighteenYearsOld(25) // false

/*Task. Сообщение о голосовании.
Исправьте функцию, чтобы она отображала сообщение о голосовании только тогда,
когда пользователю разрешено голосовать (когда ему исполнилось 18 лет).*/

function getVotingMessage(age) {
    if (age >= 18) {
        return "You are allowed to vote"
    }
}

//Sample usage - do not modify
console.log(getVotingMessage(10)) // undefined
console.log(getVotingMessage(20)) // "You are allowed to vote""
console.log("---")

/*Task. Является ли число положительным?
Завершите функцию `isPositive`, которое возвращает true, если число положительное.
Число 0 считается положительным.*/

function isPositive(number) {
    if (number >= 0) {
        return true
    }
}

// Sample usage - do not modify
console.log(isPositive(5))
console.log(isPositive(-10))

