import { TEXTS, MAINTOOLS, OBJECTS } from '../integration/constants';

let object = {
    "Изображение": OBJECTS.image,
    "Текст": OBJECTS.text,
    "Браузер": OBJECTS.browser,
    "3D-график": OBJECTS.graph,
    "Рабочий стол": OBJECTS.desktop,
    "Видеосвязь": OBJECTS.videoCall,
    "Видео": OBJECTS.video,
    "Аудио": OBJECTS.audio,
    "Гиф": OBJECTS.gif,
    "Карта": OBJECTS.map,
    "Спикер слева": OBJECTS.speakerLeft,
    "Спикер в центре": OBJECTS.speakerCenter,
    "Спикер справа": OBJECTS.speakerRight,
    "Без спикера": OBJECTS.noSpeaker
}

let file = {
    "Изображение": "#default.png",
    "Видео": "video.mp4",
    "Аудио": "clear.mp3",
    "Гиф": "gifUnder1mb.gif",
}

let button = {
    "Изображение": TEXTS.image,
    "Текст": TEXTS.text,
    "3D-график": TEXTS.graph,
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
    "отменяю": MAINTOOLS.undo,
    "повторяю": MAINTOOLS.redo
}

let pointOFSlide = {
    "право": { pointerId: 1, clientX: 1500, clientY: 550 },
    "правый верхний угол": { pointerId: 1, clientX: 1500, clientY: 900 },
    "правый нижний угол": { pointerId: 1, clientX: 1500, clientY: 900 },
    "центр": { pointerId: 1, clientX: 960, clientY: 550 },
    "верх": { pointerId: 1, clientX: 960, clientY: 200 },
    "низ": { pointerId: 1, clientX: 960, clientY: 900 },
    "лево": { pointerId: 1, clientX: 200, clientY: 550 },
    "левый нижний угол": { pointerId: 1, clientX: 200, clientY: 900 },
    "левый верхний угол": { pointerId: 1, clientX: 200, clientY: 200 }
}

let pointOFObject = {
    "права": 'right',
    "правого верхнего угла": 'topRight',
    "правого нижнего угла": 'bottomRight',
    "верха": 'top',
    "низу": 'bottom',
    "лева": 'left',
    "левого нижнего угла": 'bottomLeft',
    "левого верхнего угла": 'bottomRight'
}

export { button, pointOFObject, pointOFSlide, file, object }