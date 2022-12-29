import { select, TEXT, } from "../constants";

class Home {

    elements = {
        title: () => cy.get(select.title).contains(TEXT.home),
    }

    checkPage() {
        this
            .elements
            .title()
            .should('exist')
    }
}

module.exports = new Home()