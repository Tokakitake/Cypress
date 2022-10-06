import { object } from '../converter';
import slideArea from '../pageObjects/Slides'
import objectOnSlide from '../pageObjects/ElementsOnSlide'
import apiCall from '../ApiCall'

//проверка объектов на слайде
Then('Проверяю, что объект {string} в активном слайде', (element) => {
    objectOnSlide.checkElementOnSlide(object[element])
})

Then('Проверяю, что объект {string} выбран', (element) => {
    objectOnSlide.checkobjectOnSlideelected(object[element])
})

Then('Проверяю, что объект {string} в активном слайде не существует', (element) => {
    objectOnSlide.checkElementNotExist(object[element])
})

Then('Проверяю что кнопка {string} активна', (element) => {
    cy
        .get(object[element])
        .should('exist')
});

//Проверка слайдов
Then('Проверяю, что {string} слайдов в списке', (num) => {
    slideArea.checkAmountSlides(num)
})

Then('Проверяю, что {string} слайдов выделенно', (num) => {
    slideArea.checkAmountSelectedSlides(num)
})

Then('Проверяю, что слайд под номером {string} выбран', (num) => {
    slideArea.checkSelectedSlide(num)

})

//Проверка групп элементов
Then('Проверяю, что {string} объектов находится в группе', (num) => {
    objectOnSlide.checkSeveralElementInGroup(num)
})

Then('Проверяю, что объект {string} есть в группе', (element) => {
    objectOnSlide.checkTypeElementInGroup(object[element])
})

//Проверка коммита на сервер
Then('Проверяю, что изменения сохранились', () => {
    apiCall.checkCommit()
})