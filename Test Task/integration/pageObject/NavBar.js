import { select, TEXTBTN, } from "../constants";

class NavBar {

    elements = {
        home: () => cy.get(select.navBar).contains(TEXTBTN.home),
        login: () => cy.get(select.navBar).contains(TEXTBTN.login),
        signUp: () => cy.get(select.navBar).contains(TEXTBTN.signUp),
        profile: () => cy.get(select.navBar).contains(TEXTBTN.profile),
        logout: () => cy.get(select.navBar).contains(TEXTBTN.logout),
    }

    jumpToHome() {
        this
            .elements
            .home()
            .should('exist')
            .click()
    }

    jumpToLogin() {
        this
            .elements
            .login()
            .should('exist')
            .click()
    }

    jumpToSignUp() {
        this
            .elements
            .signUp()
            .should('exist')
            .click()
    }

    jumpToProfile() {
        this
            .elements
            .profile()
            .should('exist')
            .click()
    }

    logout() {
        this
            .elements
            .logout()
            .should('exist')
            .click()
    }
}

module.exports = new NavBar()