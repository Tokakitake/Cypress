import { select, login, TEXT, TEXTBTN } from "../constants";

class Login {
    
    elements = {
        title: () => cy.get(select.title).contains(TEXT.login),
        email: () => cy.get(login.email),
        password: () => cy.get(login.password),
        checkBox: () => cy.get(login.checkbox).contains(TEXT.rememberMe),
        submit: () => cy.get(login.submit).contains(TEXTBTN.login),
        notif: () => cy.get(login.notif)
    }

    checkPage() {
        this
            .elements
            .title()
            .should('exist')
    }

    checkLoginFail() {
        this
            .elements
            .notif()
            .should('include.text', TEXT.loginFail)
    }

    typeEmail(email) {
        this
            .elements
            .email()
            .should('exist')
            .type(email)
    }

    typePassword(password) {
        this
            .elements
            .password()
            .should('exist')
            .type(password)
    }

    checkRememberMe() {
        this
            .elements
            .checkBox()
            .should('exist')
            .check()
            .should('be.checked')
    }

    submit() {
        this
            .elements
            .submit()
            .should('exist')
            .click()
    }
}

module.exports = new Login()