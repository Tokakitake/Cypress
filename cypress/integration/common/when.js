import slideArea from '../pageObjects/Slides'
import mainTools from "../pageObjects/MainTools"
import { OBJECTS, ORDER } from '../constants'
import objectOnSlide from '../pageObjects/ElementsOnSlide'
import { file, button, pointOFObject, pointOFSlide, object } from '../converter'

When('Я нажимаю на кнопку {string}', (content) => {
    mainTools.btnTool(button[content]).click()
})

When('Я нажимаю на кнопку Файлы и загружаю {string}', (content) => {
    mainTools.crateFile(file[content])
})

When('Я нажимаю на кнопку Карта и загружаю {string}', (content) => {
    mainTools.createMap(file[content])
})

When('Я убираю выделение', () => {
    mainTools.deselect()
})
//undo redo действие
When('Я {string} действие', (btn) => {
    mainTools.undoAndRedo(button[btn])
})

//Манипуляции со слайдами

//не работает
When('Перемещаю слайд', () => {
    cy
        .get(ORDER.slide)
        .first()
        .trigger('pointerdown', { pointerId: 1 })
        .trigger('pointermove', { pointerId: 1, clientX: 100, clientY: 500 })
        .trigger('pointerup', { pointerId: 1, clientX: 100, clientY: 500 });
})

When('Я выбираю {string} слайд', (num) => {
    slideArea.selectSlide(num)
})

When('Я выделяю {string} разных слайда', (num) => {
    slideArea.selectSeveralRandomSlides(num)
})

When('Я удаляю {string} слайд', (num) => {
    slideArea.deleteSlide(num)
})

When('Начиная с {string} слайда я удаляю {string} последовательно слайдов', (num, num2) => {
    slideArea.deleteSlidesInOrder(num, num2)
})

When('Я удаляю c {string} по {string} слайд', (num, num2) => {
    slideArea.deleteSomeSlides(num, num2)
})

When('Я удаляю c {string} по {string} слайд по убыванию', (num, num2) => {
    slideArea.deleteSlidesInReverseOrder(num, num2)
})

When('Я удаляю выделенные слайды', () => {
    slideArea.deleteSelectedSlides()
})

When('Я удаляю случайный слайд', () => {
    slideArea.deleteRandomSlide()
})

When('Я удаляю {string} случайных слайда', (num) => {
    slideArea.deleteSomeRandomSlides(num)
})

When('Я выделяю с {string} по {string} слайд', (num, num2) => {
    slideArea.selectSomeSlides(num, num2)
})

When('Я удаляю все слайды', () => {
    slideArea.deleteAllSlides()
})

//Манимпуляция объектов на слайде

When('Перетаскиваем активный элемент в {string}', (point) => {
    objectOnSlide.moveElement(pointOFSlide[point])
});

//не работает
When('Увеличиваю объект с {string} на {string} {string}', (point, x, y) => {
    cy
        .get(OBJECTS.active)
        .trigger('pointerdown', pointOFObject[point], { pointerId: 1 })
        .trigger('pointermove', { pointerId: 1, clientX: x, clientY: y })
        .trigger('pointerup', { pointerId: 1, clientX: x, clientY: y });
});


When('Я выбираю единичный {string} объект', (num) => {
    objectOnSlide.selectSingleElement(num)
})

When('Я выбираю {string} объект', (num) => {
    objectOnSlide.selectByOrderElement(num)
})

When('Я выбираю единичный {string} объект {string}', (num, element) => {
    objectOnSlide.selectSingleElementByOrderAndType(num, object[element])
})

When('Я выбираю {string} объект {string}', (num, element) => {
    objectOnSlide.selectByorderAndTypeElement(num, object[element])
})

//Группировка и разгруппировка

When('Я группирую выбранные объекты вместе', () => {
    mainTools.btnTool('Сгруппировать').click()
})