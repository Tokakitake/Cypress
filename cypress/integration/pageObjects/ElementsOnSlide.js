import { OBJECTS } from '../constants';

class objectOnSlide {

    elements = {
        element: () => cy.get(OBJECTS.element),
        activeElement: () => cy.get(OBJECTS.active),
        group: () => cy.get(OBJECTS.group),
        activeGroup: () => cy.get(OBJECTS.activeGroup),
        selectedGroup: () => cy.get(OBJECTS.selectedGroup)
    }

    selectByorderAndTypeElement(num, element) {
        cy
            .get(element)
            .eq(num - 1)
            .click({ shiftKey: true })
    }
    
    selectByOrderElement(num) {
        this
            .elements
            .element()
            .eq(num - 1)
            .click({ shiftKey: true })
    }

    selectSingleElement(num) {
        this
            .elements
            .element()
            .eq(num - 1)
            .click()
    }

    selectSingleElementByOrderAndType(num, element) {
        cy
            .get(element)
            .eq(num - 1)
            .click()
    }

    moveElement(point) {
        this
            .elements
            .activeElement()
            .trigger('pointerdown', { pointerId: 1 })
            .trigger('pointermove', point)
            .trigger('pointerup', point);
    }

    checkElementOnSlide(element) {
        cy
            .get(element)
            .should('exist')
    }

    checkElementSelected(element) {
        this
            .elements
            .activeGroup()
            .children(OBJECTS.element)
            .children(element)
            .should('exist')
    }

    checkElementNotExist(element) {
        cy
            .get(element)
            .should('not.exist')
    }

    checkSeveralElementInGroup(num) {
        this
            .elements
            .group()
            .children(OBJECTS.element)
            .should('have.length', num)
    }

    checkTypeElementInGroup(element) {
        this
            .elements
            .selectedGroup()
            .children(OBJECTS.element)
            .children(element)
            .should('exist')
    }
    
}

module.exports = new objectOnSlide()