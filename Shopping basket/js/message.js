/* message.js */

/*Мы хотим иметь конкретное сообщение для следующих сценариев:
1. Когда число меньше 0, мы показываем сообщение `Invalid number`
2. Когда число равно 0, показываем сообщение:`You don't have any items in your shopping list`
3. Когда число равно 1, показываем сообщение:`You have one item in your shopping list`
4. Когда число больше 1, показываем сообщение:`You have more than 1 item in your shopping list`*/

export function getMessage(value) {
    console.log(value)
    if (value < 0) {
        return `Invalid number`
    }
    if (value === 0) {
        return `You don't have any items in your shopping list`
    }
    if (value === 1) {
        return `You have one item in your shopping list`
    }
    if (value > 1) {
        return `You have more than 1 item in your shopping list`
    }
}