/* form.js */

/*project. Валидатор промо кода.
Предположим, у нас есть форма, которая принимает промокод. Промокод считается действительным только в том случае,
если его длина равна от 5 до 10 символов (включительно). Завершите функцию isPromoCodeValid,
чтобы она возвращала значение true, когда промокод действителен и false в противном случае.
Также необходимо удаление пробельных символов при вводе.*/

export function isPromoCodeValid(code) {
    console.log(code)
    if (code.trim().length < 5){
        return false
    } else if (code.trim().length > 10) {
        return false
    }
    return true
}