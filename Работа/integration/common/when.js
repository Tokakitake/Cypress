import * as MainTools from "../pageObjects/MainTools";
import { TEXTS } from '../constants';

let file = {
    "Изображение": "#default.png",
    "Видео": "video.mp4",
    "Аудио": "clear.mp3",
    "Гиф": "gifUnder1mb.gif",
}

let button = {
    "Изображение": TEXTS.image,
    "Текст": TEXTS.text,
    "3D график": TEXTS.graph,
    "Рабочий стол": TEXTS.desktop,
    "Видеосвязь": TEXTS.videoCall,
    "Видео": TEXTS.video,
    "Аудио": TEXTS.audio,
    "Гиф": TEXTS.gif,
    "Карта": TEXTS.map,
    "Бразуер": TEXTS.browser,
    "Спикер слева": TEXTS.speakerLeft,
    "Спикер в центре": TEXTS.speakerCenter,
    "Спикер справа": TEXTS.speakerRight,
    "Без спикера": TEXTS.noSpeaker,
}

When('Я нажимаю на кнопку {string}', (content) => {
    MainTools.button.tools(button[content]).click()
})

When('Я нажимаю на кнопку Файлы и загружаю {string}', (content) => {
    MainTools.create.file(file[content])
})

When('Я нажимаю на кнопку Карта и загружаю {string}', (content) => {
    MainTools.create.map(file[content])
})