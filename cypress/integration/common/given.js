import webEditor from "../pageObjects/jalingaWebEditor";
import mainTools from "../pageObjects/MainTools"
import { ORDER, OBJECTS } from '../constants';
import apiCall from '../ApiCall'

Given('Открыт лендинг интерактивной доски', () => {
    webEditor.visit()
});

Given('Создаем {string} слайдов', (num) => {
    for (let n = num; n > 0; n--) {
        mainTools.newSlide()
    }
})

Given('Проверяем, что сайт защищен', () => {
    cy
        .location('protocol')
        .should('eq', 'https:')
})

Given('Удаляю все слайды если их больше одного или имеются объекты', () => {
    cy
        .get(ORDER.slide)
        .should('exist')

    cy
        .get("body")
        .then($body => {
            if ($body.find(ORDER.slide).length > 1) {
                cy
                    .get(ORDER.slide)
                    .should('exist')
                    .first()
                    .click()

                cy
                    .get(ORDER.slide)
                    .last()
                    .click({ shiftKey: true })

                cy
                    .get('body')
                    .type('{del}')

                apiCall.checkCommit()
            }})

    cy
        .get("body")
        .then($body => {
            if ($body.find(OBJECTS.element).length > 0) {
                cy
                    .get(ORDER.slide)
                    .should('exist')
                    .first()
                    .click()
    
                cy
                    .get(ORDER.slide)
                    .last()
                    .click({ shiftKey: true })
    
                cy
                    .get('body')
                    .type('{del}')
    
                apiCall.checkCommit()
                }
        })
})