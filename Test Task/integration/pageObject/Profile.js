import { select, TEXT, } from "../constants";

class Profile {

    elements = {
        title: () => cy.get(select.title),
    }

    checkPage() {
        this
            .elements
            .title()
            .should('include.text', TEXT.profile)
    }
}

module.exports = new Profile()