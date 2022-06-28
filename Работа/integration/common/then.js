import { OBJECTS } from '../constants';

let object = {
    "Изображение": OBJECTS.image,
    "Текст": OBJECTS.text,
    "Браузер": OBJECTS.browser,
    "3D график": OBJECTS.graph,
    "Рабочий стол": OBJECTS.desktop,
    "Видеосвязь": OBJECTS.videoCall,
    "Видео": OBJECTS.video,
    "Аудио": OBJECTS.audio,
    "Гиф": OBJECTS.gif,
    "Карта": OBJECTS.map,
    "Спикер слева": OBJECTS.speakerLeft,
    "Спикер в центре": OBJECTS.speakerCenter,
    "Спикер справа": OBJECTS.speakerRight,
    "Без спикера": OBJECTS.noSpeaker,
}

Then('Проверяю, что объект {string} создался в активном слайде', (content) => {
    cy.get(object[content]).should('exist')
})

Then('Проверяю что кнопка {string} активна', (content) => {
    cy.get(object[content]).should('exist')
});