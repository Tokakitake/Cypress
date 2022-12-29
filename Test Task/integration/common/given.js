Given('Заходим в приложение', () => {
    cy.visit("http://localhost:5000/")
});

Given('Страница регистрации', () => {
    cy.visit("http://localhost:5000/signup")
});

Given('Страница авторизации', () => {
    cy.visit("http://localhost:5000/login")
});