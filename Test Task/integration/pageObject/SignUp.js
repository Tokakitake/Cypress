import { select, signUp, TEXT, TEXTBTN } from "../constants";

class SignUp {
    
    elements = {
        title: () => cy.get(select.title).contains(TEXT.signUp),
        email: () => cy.get(signUp.email),
        name: () => cy.get(signUp.name),
        password: () => cy.get(signUp.password),
        submit: () => cy.get(signUp.submit).contains(TEXTBTN.signUp),
        notif: () => cy.get(signUp.notif)
    }

    checkPage() {
        this
            .elements
            .title()
            .should('exist')
    }

    checkEmailExist() {
        this
            .elements
            .notif()
            .should('include.text', TEXT.emailExist)
    }

    typeEmail(email) {
        this
            .elements
            .email()
            .should('exist')
            .type(email)
    }

    typeName(name) {
        this
            .elements
            .name()
            .should('exist')
            .type(name)
    }

    typePassword(password) {
        this
            .elements
            .password()
            .should('exist')
            .type(password)
    }

    submit() {
        this
            .elements
            .submit()
            .should('exist')
            .click()
    }
}

module.exports = new SignUp()
