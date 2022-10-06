import { LOGIN } from '../integration/constants';

class apiCall {

    calls = {
        commitToServer: () => cy.intercept('POST', '/api/commit').as('commit'),
        login: () => cy.intercept('POST', '/api/login').as('login'),
        listOfPresentations: () => cy.intercept('GET', '/api/presentations').as('presentations'),
        presentation: () => cy.intercept('GET', `/api/objects/fetchtree/${LOGIN.presentation}` ).as('presentation'),
    }

    checkCommit(/* statusCode */) {
        this.calls.commitToServer()
        
        cy
            .wait('@commit', { timeout: 20000 }) //Коммит происходит до 20 секунд после изменения
            .its('response.statusCode')
            .should('eq',200 /*<- statusCode, если ожидаем определенный статус, который можно прописать в кукумбер*/)
    }

    checkLogin() {
        this.calls.login()

        cy
            .wait('@login')
            .its('response.statusCode')
            .should('eq',200)
    }

    checkListOfPresentations() {
        this.calls.listOfPresentations()

        cy
            .wait('@presentations')
            .its('response.statusCode')
            .should('eq',200)
    }

    checkPresentation() {
        this.calls.presentation()

        cy
            .wait('@presentation')
            .its('response.statusCode')
            .should('eq',200)
    }
}

module.exports = new apiCall()