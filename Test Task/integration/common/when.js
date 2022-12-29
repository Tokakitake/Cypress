import navBar from '../pageObject/NavBar'
import SignUp from '../pageObject/SignUp'
import { page } from '../constants'

//Сделать можно тоже самое, что и описывал в then
When('Нажать на кнопку Home', () => {
    navBar.jumpToHome()
})

When('Нажать на кнопку Login', () => {
    navBar.jumpToLogin()
})

When('Нажать на кнопку Sign Up', () => {
    navBar.jumpToSignUp()
})

When('Нажать на кнопку Profile', () => {
    navBar.jumpToProfile()
})

When('Нажать на кнопку Logout', () => {
    navBar.logout()
})

When('Прямой доступ к профилю', () => {
    cy.visit(page.profile)
})

When('Прямой доступ к авторизации', () => {
    cy.visit(page.login)
})

When('Прямой доступ к регистрации', () => {
    cy.visit(page.signup)
})

When('Заполнить поля и подтвердить', (datatable) => {
    datatable.hashes().forEach(element => {
        if (element.email === "") {
            SignUp.submit()
        } else if (element.name === "") {
            //cy.get('.title').invoke('text').as('text')
            SignUp.typeEmail(element.email)
            SignUp.elements.email().should('have.value', element.email)
            SignUp.typePassword(element.password)
            SignUp.elements.password().should('have.value', element.password)
            cy.get('.button').should('exist').click()
        } else if (element.password === "😍😍😍") {
            SignUp.typeEmail(element.email)
            SignUp.elements.email().should('have.value', element.email)
            SignUp.typePassword('\u{1F60D}\u{1F60D}\u{1F60D}')
            SignUp.elements.password().should('have.value', '\u{1F60D}\u{1F60D}\u{1F60D}')
            SignUp.submit()
            //} else if (Login.checkPage()) {
            //    SignUp.typeEmail(element.email)
            //    SignUp.elements.email().should('have.value', element.email)
            //    SignUp.typePassword(element.password)
            //    SignUp.elements.password().should('have.value', element.password)
            //    Login.submit()
        } else {
            SignUp.typeEmail(element.email)
            SignUp.elements.email().should('have.value', element.email)
            SignUp.typeName(element.name)
            SignUp.elements.name().should('have.value', element.name)
            SignUp.typePassword(element.password)
            SignUp.elements.password().should('have.value', element.password)
            SignUp.submit()
        }
    })
})