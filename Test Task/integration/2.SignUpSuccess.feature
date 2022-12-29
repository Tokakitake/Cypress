Feature:1. Регистрация пользователя с валидными данными

    Background:Находимся на домашней странице http://localhost:5000/
        Given Заходим в приложение

    Scenario:Пользователь 1
        When Нажать на кнопку Sign Up
        Then Находимся на странице регистрации
        When Заполнить поля и подтвердить
            | email         | name         | password    |
            | Test@mail.com | Пользователь | CatLover111 |
        Then Находимся на странице авторизации
        And Возвращаемся на страницу регистрации

    Scenario:Пользователь 2
        When Нажать на кнопку Sign Up
        Then Находимся на странице регистрации
        When Заполнить поля и подтвердить
            | email           | name | password  |
            | Test12@mail.com | User | PumpItUp! |
        Then Находимся на странице авторизации
        And Возвращаемся на страницу регистрации

    Scenario:Пользователь 3
        When Нажать на кнопку Sign Up
        Then Находимся на странице регистрации
        When Заполнить поля и подтвердить
            | email            | name | password   |
            | My_test@mail.com |      | Beatmania! |
        Then Находимся на странице авторизации