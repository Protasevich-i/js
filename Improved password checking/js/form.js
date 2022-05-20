/* form.js */

/*project. Улучшенная проверка пароля.
Это базовая проверка пароля, которую вы часто видите при регистрации на веб-сайте.
Заполните функцию isPasswordValid, чтобы она возвращала true, когда пароль действителен,
и false в противном случае. Пароль считается действительным, если его длина не менее 10 символов,
начальные и конечные символы не должны учитываться.*/

export function isPasswordValid(password) {
    let res = password
        res = res.trim()
    console.log(res)
    if (password.length >= 10) {
        return res
    }
    return false
}