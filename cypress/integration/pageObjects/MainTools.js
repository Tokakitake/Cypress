import { MAINTOOLS } from '../constants';

class mainTools {

    elements = {
        btnTool: () => cy.get(MAINTOOLS.textButton),
        btnNewSlide: () => cy.get(MAINTOOLS.newSlideButton),
        hidenBtnFile: () => cy.get(MAINTOOLS.fileInput).first(),
        hidenBtnMap: () => cy.get(MAINTOOLS.fileInput).last(),
    }
    
    btnTool(text) {
        return this
            .elements
            .btnTool()
            .contains(text)
    }

    newSlide() {
        this
            .elements
            .btnNewSlide()
            .click()
    }

    crateFile(file) {
        this
            .elements
            .hidenBtnFile()
            .attachFile(file)
    }

    createMap(file) {
        this
            .elements
            .hidenBtnMap()
            .attachFile(file)
    }

    deselect() {
        cy
            .get('.App__slide')
            .click('top')
    }

    undoAndRedo(btn) {
        cy
            .get(btn)
            .click()
    }

}
module.exports = new mainTools()