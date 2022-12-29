Feature:8. Авторизация пользователя с неверным имейлом или паролем

    Background:Находимся на странице авторизации
        Given Страница авторизации

    Scenario:Кейс 1
        When Заполнить поля и подтвердить
            | email         | name | password  |
            | Test@mail.com |      | PumpItUp! |
        Then Ошибка авторизации

    Scenario:Кейс 2
        When Заполнить поля и подтвердить
            | email         | name | password  |
            | Test@mail.com |      | Beatmania |
        Then Ошибка авторизации

    Scenario:Кейс 3
        When Заполнить поля и подтвердить
            | email           | name | password  |
            | Test12@mail.com |      | Beatmania |
        Then Ошибка авторизации

    Scenario:Кейс 4
        When Заполнить поля и подтвердить
            | email           | name | password    |
            | Test12@mail.com |      | CatLover111 |
        Then Ошибка авторизации

    Scenario:Кейс 5
        When Заполнить поля и подтвердить
            | email            | name | password    |
            | My_test@mail.com |      | CatLover111 |
        Then Ошибка авторизации

    Scenario:Кейс 6
        When Заполнить поля и подтвердить
            | email            | name | password  |
            | My_test@mail.com |      | PumpItUp! |
        Then Ошибка авторизации