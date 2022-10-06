const MAINTOOLS = {
    textButton: '.Button__text',
    fileInput: '.TopPanel__fileInput',
    fileImage: '.Image',
    newSlideButton: '.icon-newSlide',
    undo: '.icon-undo',
    redo: '.icon-redo',
    workSpace: '.SelectionArea'
}


const OBJECTS = {
    text: '.Text',
    gif: '.Gif',
    audio: '.Audio',
    video: '.Video',
    image: '.Image',
    map: '.Map',
    browser: '.Browser',
    graph: '.Chart',
    desktop: '.ScreenCapture',
    videoCall: '.Stream',
    speakerLeft: '.Speaker--position_left',
    speakerCenter: '.Speaker--position_center',
    speakerRight: '.Speaker--position_right',
    noSpeaker: '.Speaker--position_nospeaker',
    group: '.ElementsGroup',
    selectedGroup: '.ElementsGroup--status_selected',
    element: '.SlideElement',
    activeGroup: '.ElementsGroup--status_active',
    active: '.PositionAvatar'
}

const TEXTTOOLBAR = {
    fontAndSizebtn: '.icon-arrowRight',

    colorbtn: '.TextToolbar__colorButton',

    increaseFontBtn: '.icon-textPlus',
    decreaseFontBtn: '.icon-textMinus',

    boldFontBtn: '.icon-bold',
    italicFontBtn: '.icon-italic',
    underlineBtn: '.icon-underline',
    strikeThroughBtn: '.icon-strikeThrough',

    superscriptBtn: '.icon-superscript',
    subscriptBtn: '.icon-subscript',

    leftAlignmentBtn: '.icon-leftAlignment',
    centerAlignmentBtn: '.icon-centerAlignment',
    rightAlignmentBtn: '.icon-rightAlignment',
    widthAlignmentBtn: '.icon-widthAlignment',

    bulletOrNumberOff: '.icon-minus',

    bulletsBtn: '.icon-bullets',
    square: '.icon-square',
    circleStroked: '.icon-circleStroked',
    circle: 'icon-circle',

    numbersBtn: '.icon-numbers',
    numbersArabic: '.icon-numbersArabic',
    numbersRoman: '.icon-numbersRoman',
    letters: '.icon-letters'
}

const COLORBTN = {
    black: '[style="background-color: rgb(17, 17, 17);"]',
    white: '[style="background-color: rgb(255, 255, 255);"]',
    grey: '[style="background-color: rgb(117, 117, 117);"]',
    red: '[style="background-color: rgb(224, 62, 26);"]',
    orange: '[style="background-color: rgb(247, 151, 34);"]',
    yellow: '[style="background-color: rgb(243, 193, 27);"]',
    green: '[style="background-color: rgb(25, 143, 81);"]',
    blue: '[style="background-color: rgb(12, 140, 233);"]',
    purple: '[style="background-color: rgb(138, 56, 245);"]'
}

const TEXTS = {
    text: 'Текст',
    files: 'Файлы',
    browser: 'Браузер',
    desktop: 'Рабочий стол',
    graph: '3D-график',
    videoCall: 'Видеосвязь',
    speakerLeft: 'Спикер слева',
    speakerCenter: 'Спикер в центре',
    speakerRight: 'Спикер справа',
    noSpeaker: 'Без спикера',
    cancelFormat: 'Отменить форматирование'
}

const ORDER = {
    slide: '.Preview__order',
    activeSlide: '.Preview--status_active',
    selectedSlide: '.Preview__contentContainer--status_selected',
    notSelectedSlide: '.Preview'
}

const LOGIN = {
    site: 'https://editor.staging.jalinga.cloud/',
    logIn: 'Войти',
    listOfPresentations: '.CommonContainer',
    presentation: 'e01f53c9-20e5-4d3c-a298-1b63726622b5'
}


export { MAINTOOLS, OBJECTS, TEXTS, LOGIN, TEXTTOOLBAR, COLORBTN, ORDER };