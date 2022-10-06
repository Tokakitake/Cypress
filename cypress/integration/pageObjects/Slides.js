import { ORDER } from '../constants';

class slideArea {

    elements = {
        slide: () => cy.get(ORDER.slide),
        activeSlide: () => cy.get(ORDER.activeSlide),
        selectedSlide: () => cy.get(ORDER.selectedSlide),
        notSelectedSlide: () => cy.get(ORDER.notSelectedSlide)
    }

    selectSlide(num) {
        this
            .elements
            .slide()
            .contains(num)
            .should('exist')
            .click()
    }

    selectSeveralRandomSlides(num) {
        this
            .elements
            .notSelectedSlide()
            .not(ORDER.activeSlide)
            .not(ORDER.selectedSlide)
            .children(ORDER.slide)
            .should('exist')
            .each(($slide) => expect($slide))
            .then(function ($items) {
                return Cypress._.sampleSize($items.toArray(), num - 1)
            })
            .should('have.length', num - 1)
            .click({ multiple: true, ctrlKey: true })
    }

    selectSomeSlides(num, num2) {
        this
            .elements
            .slide()
            .should('exist')
            .contains(num)
            .click()

        this
            .elements
            .slide()
            .should('exist')
            .contains(num2)
            .click({ shiftKey: true })
    }

    deleteSlide(num) {
        this
            .elements
            .slide()
            .should('exist')
            .contains(num)
            .click()
            .type('{del}')
    }

    deleteSomeSlides(num, num2) {
        for (let n = num; n <= num2; n++) {
            this
                .elements
                .slide()
                .contains(n)
                .should('exist')
                .click()
                .type('{del}')
        }
    }

    deleteSlidesInOrder(num, num2) {
        for (let n = num2; n > 0; n--) {
            this
                .elements
                .slide()
                .contains(num)
                .should('exist')
                .click()
                .type('{del}')
        }
    }

    deleteSlidesInReverseOrder(num, num2) {
        for (let n = num; n >= num2; n--) {
            this
                .elements
                .slide()
                .contains(n)
                .should('exist')
                .click()
                .type('{del}')
        }
    }

    deleteRandomSlide() {
        this
            .elements
            .slide()
            .should('exist')
            .each(($slide) => expect($slide))
            .then(function ($items) {
                return Cypress._.sampleSize($items.toArray(), 1)
            })
            .should('have.length', 1)
            .type('{del}')
    }

    deleteSelectedSlides() {
        cy
            .get('body')
            .type('{del}');
    }

    deleteSomeRandomSlides(num) {
        for (let n = num; n > 0; n--) {
            this
                .elements
                .slide()
                .should('exist')
                .each(($slide) => expect($slide))
                .then(function ($items) {
                    return Cypress._.sampleSize($items.toArray(), 1)
                })
                .should('have.length', 1)
                .click({ multiple: true, ctrlKey: true })
                .type('{del}')
        }
    }

    deleteAllSlides() {
        this
            .elements
            .slide()
            .should('exist')
            .first()
            .click()

        this
            .elements
            .slide()
            .last()
            .click({ shiftKey: true })

        cy
            .get('body')
            .type('{del}')
    }

    checkAmountSlides(num) {
        this
            .elements
            .slide()
            .should('have.length', num)
    }

    checkAmountSelectedSlides(num) {
        this
            .elements
            .selectedSlide()
            .should('have.length', num)
    }
    checkSelectedSlide(num) {
        this
            .elements
            .activeSlide()
            .contains(num)
            .should('exist')
    }

}

module.exports = new slideArea();