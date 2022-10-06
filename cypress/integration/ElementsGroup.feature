Feature: ElementsGroup

    Background: Открыто веб-приложение
        Given Открыт лендинг интерактивной доски
        Given Проверяем, что сайт защищен
        Given Удаляю все слайды если их больше одного или имеются объекты
        Then Проверяю, что "1" слайдов в списке
@focus 
        Scenario: Выбираем 2 объекта в группу
            When Я нажимаю на кнопку "Текст"
            Then Проверяю, что объект "Текст" в активном слайде
            When Я убираю выделение
            When Я выбираю единичный "1" объект "Текст"
            Then Проверяю, что объект "Текст" выбран
            When Перетаскиваем активный элемент в "центр"
            When Я нажимаю на кнопку "Рабочий стол"
            Then Проверяю, что объект "Рабочий стол" в активном слайде
            When Я убираю выделение
            When Я выбираю единичный "2" объект
            Then Проверяю, что объект "Рабочий стол" выбран
            When Я убираю выделение
            When Я выбираю "1" объект
            Then Проверяю, что объект "Текст" выбран
            When Я выбираю "2" объект
            Then Проверяю, что объект "Рабочий стол" есть в группе
            Then Проверяю, что объект "Текст" есть в группе
            When Я группирую выбранные объекты вместе
            Then Проверяю, что "2" объектов находится в группе

        Scenario: Изменяем размер объекту
            When Я нажимаю на кнопку "Текст"
            Then Проверяю, что объект "Текст" в активном слайде
            When Я убираю выделение
            When Я выбираю единичный "1" объект "Текст"
            Then Проверяю, что объект "Текст" активный
            When Увеличиваю объект с "правого нижнего угла" на "1000" "600"

        Scenario: Перетаскиваем элемент
            When Я нажимаю на кнопку "Текст"
            Then Проверяю, что объект "Текст" в активном слайде
            When Я убираю выделение
            When Я выбираю единичный "1" объект "Текст"
            Then Проверяю, что объект "Текст" активный
            When Перетаскиваем активный элемент в "право"
            When Перетаскиваем активный элемент в "правый верхний угол"
            When Перетаскиваем активный элемент в "правый нижний угол"
            When Перетаскиваем активный элемент в "верх"
            When Перетаскиваем активный элемент в "низ"
            When Перетаскиваем активный элемент в "лево"
            When Перетаскиваем активный элемент в "левый нижний угол"
            When Перетаскиваем активный элемент в "левый верхний угол"