import { MAINTOOLS, LOGIN } from '../constants';

let site = {
    visit: () => cy.visit(LOGIN.site)
                .get(MAINTOOLS.textButton).contains(LOGIN.logIn).click()
                .get(LOGIN.listOfPresentations).contains(LOGIN.presentation).click()
    }

export { site }