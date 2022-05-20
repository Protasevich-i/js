/* form.js */

/*project. Валидация пароля.
Это базовая проверка пароля, которую вы часто видите при регистрации на веб-сайте.
Заполните функцию isPasswordValid, чтобы она возвращала true, когда пароль действителен и false в противном случае.
Пароль считается действительным, если его длина не менее 10 символов.*/

export function isPasswordValid(password) {
    console.log(password)
    if (password.length >= 10) {
        return true
    }
    else return false
}