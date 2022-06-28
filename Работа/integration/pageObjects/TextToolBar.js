import { TEXTTOOLBAR, MAINTOOLS, TEXTS, COLORBTN } from '../constants';

let button = {
    font: () => cy.get(TEXTTOOLBAR.font).first(),

    fontSize: () => cy.get(TEXTTOOLBAR.font).last(),

    textColor: () => cy.get(TEXTTOOLBAR.textcolorbtn).first(),

    textBackground: () => cy.get(TEXTTOOLBAR.textcolorbtn).last(),
    //Отмена форматирования
    cancelFormat: () => cy.get(MAINTOOLS.textButton).contains(TEXTS.cancelFormat),
    //Изменение  размера шрифта
    increaseSize: () => cy.get(TEXTTOOLBAR.increaseFontBtn),

    decreaseSize: () => cy.get(TEXTTOOLBAR.decreaseFontBtn),
    //Создание листов
    bulletList: () => cy.get(TEXTTOOLBAR.bulletsBtn),

    listOff: () => button.bulletList().click().get(TEXTTOOLBAR.bulletOrNumberOff),

    squareList: () => button.bulletList().click().get(TEXTTOOLBAR.square),

    circleStrokedList: () => button.bulletList().click().get(TEXTTOOLBAR.circleStroked),

    circleList: () => button.bulletList().click().get(TEXTTOOLBAR.circle),

    numberList: () => cy.get(TEXTTOOLBAR.numbersBtn),

    numbersArabicList: () => button.numberList().click().get(TEXTTOOLBAR.numbersArabic),

    numbersRomanList: () => button.numberList().click().get(TEXTTOOLBAR.numbersRoman),

    lettersList: () => button.numberList().click().get(TEXTTOOLBAR.letters),
    //Выровнять
    alignmentleft: () => cy.get(TEXTTOOLBAR.leftAlignmentBtn),

    alignmentCenter: () => cy.get(TEXTTOOLBAR.centerAlignmentBtn),

    alignmentRight: () => cy.get(TEXTTOOLBAR.rightAlignmentBtn),

    alignmentWidth: () => cy.get(TEXTTOOLBAR.widthAlignmentBtn),
    //Цвет текста и задника
    textColor: () => cy.get(TEXTTOOLBAR.colorbtn).first(),

    whiteText: () => button.textColor().click().get(COLORBTN.white),

    blackText: () => button.textColor().click().get(COLORBTN.black),

    greyText: () => button.textColor().click().get(COLORBTN.grey),

    redText: () => button.textColor().click().get(COLORBTN.red),

    orangeText: () => button.textColor().click().get(COLORBTN.orange),

    yellowText: () => button.textColor().click().get(COLORBTN.yellow),

    greenText: () => button.textColor().click().get(COLORBTN.green),

    blueText: () => button.textColor().click().get(COLORBTN.blue),

    purpleText: () => button.textColor().click().get(COLORBTN.purple),

    backgroundColor: () => cy.get(TEXTTOOLBAR.colorbtn).last(),

    whiteBackground: () => button.backgroundColor().click().get(COLORBTN.white),

    blackBackground: () => button.backgroundColor().click().get(COLORBTN.black),

    greyBackground: () => button.backgroundColor().click().get(COLORBTN.grey),

    redBackground: () => button.backgroundColor().click().get(COLORBTN.red),

    orangeBackground: () => button.backgroundColor().click().get(COLORBTN.orange),

    yellowBackground: () => button.backgroundColor().click().get(COLORBTN.yellow),

    greenBackground: () => button.backgroundColor().click().get(COLORBTN.green),

    blueBackground: () => button.backgroundColor().click().get(COLORBTN.blue),

    purpleBackground: () => button.backgroundColor().click().get(COLORBTN.purple),
}

let changeListTo = {
    Off: () => button.listOff().click(),

    square: () => button.squareList().click(),

    circleStroked: () => button.circleStrokedList().click(),

    circle: () => button.circleList().click(),

    numbersArabic: () => button.numbersArabicList().click(),

    numbersRoman: () => button.numbersRomanList().click(),

    letters: () => button.lettersList().click(),
}

let changeAlignmentTo = {
    left: () => button.alignmentleft().click(),

    center: () => button.alignmentCenter().click(),

    right: () => button.alignmentRight().click(),

    widht: () => button.alignmentWidth().click(),
}

let changeTextColorTo = {
    white: () => button.whiteText().click(),

    black: () => button.blackText().click(),

    grey: () => button.greyText().click(),

    red: () => button.redText().click(),

    orange: () => button.orangeText().click(),

    yellow: () => button.yellowText().click(),

    green: () => button.greenText().click(),

    blue: () => button.blueText().click(),

    purple: () => button.purpleText().click(),
}

let changeBackgroundColorTo = {
    white: () => button.whiteBackground().click(),

    black: () => button.blackBackground().click(),

    grey: () => button.greyBackground().click(),

    red: () => button.redBackground().click(),

    orange: () => button.orangeBackground().click(),

    yellow: () => button.yellowBackground().click(),

    green: () => button.greenBackground().click(),

    blue: () => button.blueBackground().click(),

    purple: () => button.purpleBackground().click(),
}

export { button, changeListTo, changeAlignmentTo, changeTextColorTo, changeBackgroundColorTo }