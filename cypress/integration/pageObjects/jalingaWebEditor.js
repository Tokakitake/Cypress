import { MAINTOOLS, LOGIN } from '../constants';
import apiCall from '../ApiCall'

class webEditor {
    elements = {
        login: () => cy.get(MAINTOOLS.textButton).contains(LOGIN.logIn),
        presentation: () => cy.get(LOGIN.listOfPresentations).contains(LOGIN.presentation)
    }
    
    visit () {
        cy.visit(LOGIN.site)
        this.elements.login().click()
        //apiCall.checkLogin() появляется в момент клика, нужно найти другой способ
        apiCall.checkListOfPresentations()
        this.elements.presentation().click()
        //apiCall.checkPresentation() появляется в момент клика, нужно найти другой способ
    }
}

module.exports = new webEditor()
