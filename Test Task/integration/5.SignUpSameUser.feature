Feature:7. Регистрация существующего пользователя

    Используем данные трех пользователей и делаем попарное тестирование

    Background:Находимся на странице регистрации
        Given Страница регистрации

    Scenario:Кейс 1
        When Заполнить поля и подтвердить
            | email         | name         | password    |
            | Test@mail.com | Пользователь | CatLover111 |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 2
        When Заполнить поля и подтвердить
            | email         | name | password  |
            | Test@mail.com | User | PumpItUp! |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 3
        When Заполнить поля и подтвердить
            | email         | name | password   |
            | Test@mail.com |      | Beatmania! |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 4
        When Заполнить поля и подтвердить
            | email           | name | password  |
            | Test12@mail.com |      | PumpItUp! |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 5
        When Заполнить поля и подтвердить
            | email           | name         | password   |
            | Test12@mail.com | Пользователь | Beatmania! |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 6
        When Заполнить поля и подтвердить
            | email           | name | password    |
            | Test12@mail.com | User | CatLover111 |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 7
        When Заполнить поля и подтвердить
            | email            | name | password   |
            | My_test@mail.com | User | Beatmania! |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 8
        When Заполнить поля и подтвердить
            | email            | name | password    |
            | My_test@mail.com |      | CatLover111 |
        Then Ошибка, что такой имейл существует

    Scenario:Кейс 9
        When Заполнить поля и подтвердить
            | email            | name         | password  |
            | My_test@mail.com | Пользователь | PumpItUp! |
        Then Ошибка, что такой имейл существует