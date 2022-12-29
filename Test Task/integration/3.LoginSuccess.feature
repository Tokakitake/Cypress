Feature:3. Авторизация пользователя валидными данными

    Background:Находимся на странице авторизации
        Given Страница авторизации

    Scenario:Пользователь 1
        When Заполнить поля и подтвердить
            | email         | name | password    |
            | Test@mail.com |      | CatLover111 |
        Then Находимся на странице профиля
        And Возвращаемся на страницу авторизации

    Scenario:Пользователь 2
        When Заполнить поля и подтвердить
            | email           | name | password  |
            | Test12@mail.com |      | PumpItUp! |
        Then Находимся на странице профиля
        And Возвращаемся на страницу авторизации

    Scenario:Пользователь 3
        When Заполнить поля и подтвердить
            | email            | name | password   |
            | My_test@mail.com |      | Beatmania! |
        Then Находимся на странице профиля