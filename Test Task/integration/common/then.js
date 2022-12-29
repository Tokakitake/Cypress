import Home from '../pageObject/Home'
import Login from '../pageObject/Login'
import Profile from '../pageObject/Profile'
import SignUp from '../pageObject/SignUp'

/*
Так же можно сделать конвертер для стрингов, чтобы не писать под каждую проверку.

конвертер
let title = {
    "авторизации": 'Login',

кукумбер
Then('Находимся на странице {string}', (page) => {
    title.checkPage(title[page])
})

Then Находимся на странице "авторизации"
*/

/*
var errors = 0

Cypress.on('fail', (e) => {       Эксперимент сделать софт ассерт и в конце фейлить тест
    console.error(e)              если были ошибки (expect(errors).to.equal(0)). Тест 
    errors++                      в итоге завершается на самой первой ошибке как успешный.
  })
*/

Then('Находимся на странице авторизации', () => {
    Login.checkPage()
})

Then('Находимся на странице регистрации', () => {
    SignUp.checkPage()
})

Then('Находимся на домашней странице', () => {
    Home.checkPage()
})

Then('Находимся на странице профиля', () => {
    Profile.checkPage()
})

Then('Ошибка, что такой имейл существует', () => {
    SignUp.checkEmailExist()
})

Then('Ошибка авторизации', () => {
    Login.checkLoginFail()
})