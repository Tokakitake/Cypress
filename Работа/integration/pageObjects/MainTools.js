import { TEXTS, MAINTOOLS } from '../constants';

let button = {
    //Основные тулы для работы на слайде
    tools: (text) => cy.get(MAINTOOLS.textButton).contains(text),

    file: () => cy.get(MAINTOOLS.textButton).contains(TEXTS.files),

    map: () => cy.get(MAINTOOLS.textButton).contains(TEXTS.map),
    //undo/redo и создание нового слайда
    newSlide: () => cy.get(MAINTOOLS.newSlideButton),
    
    undo: () => cy.get(MAINTOOLS.undo),

    redo: () => cy.get(MAINTOOLS.redo),
    //Скрытые кнопки для загрузки файлов и карты под автотестами
    hidenBtnFile: () => cy.get(MAINTOOLS.fileInput).first(),

    hidenBtnMap: () => cy.get(MAINTOOLS.fileInput).last(),
    //Спикер
    speaker: (text) => cy.get(MAINTOOLS.textButton).contains(text),
}

let create = {
    file: (file) => button.hidenBtnFile().attachFile(file),

    map: (file) => button.hidenBtnMap().attachFile(file),
}

let step = {
    undo: () => button.undo().click(),

    redo: () => button.redo().click()
}

let dragObjectTo = {
    top: (object) => cy.get(MAINTOOLS.workSpace).click('bottomRight')
      .get(object)
      //.click() //нажали на объект
      .trigger("mousedown", { button: 0 }, { force: true }) //зажали его
      .wait(500) //дебаг
      .trigger("mousemove", 400, 400, { force: true }) //переместили
      .get(MAINTOOLS.workSpace) //отпустили
      .click({force: true})
}

export { step, create, button, dragObjectTo }