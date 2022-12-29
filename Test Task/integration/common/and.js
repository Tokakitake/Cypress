import SignUp from '../pageObject/SignUp'
import { page } from '../constants'

And('Очищаем поля', () => {
    SignUp.elements.email().clear().should('have.value', '')
    SignUp.elements.name().clear().should('have.value', '')
    SignUp.elements.password().clear().should('have.value', '')
})

And('Возвращаемся на страницу регистрации', () => {
    cy.clearCookie('session').should('be.null')
    cy.visit(page.signup)
})

And('Возвращаемся на страницу авторизации', () => {
    cy.clearCookie('session').should('be.null')
    cy.visit(page.login)
})