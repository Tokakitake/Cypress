Given('Открыта страница google', () => {
    cy.visit(domain.google)
});

Then('Вписываю Byndyusoft в поисковую строку', () => {
    cy.get(selectors.search).type('byndyusoft{enter}')
});

And('Открываю первую ссылку', () => {
    cy.get(selectors.byndyusoft).invoke('removeAttr', 'target').contains(domain.byndyusoft).click()
});

And('Нажимаю на Заказать презентацию и проверяю контактные данные', () => {
    cy.origin(domain.byndyusoft, () =>
    cy.get(selectors.knowMoreBtn).click(),
    cy.get(selectors.contacts).should('contain', '8 800 775-15-21'),
    cy.get(selectors.contacts).should('contain', 'sales@byndyusoft.com'))
});

const domain = {
    google: 'https://www.google.ru/',
    byndyusoft: 'https://byndyusoft.com',
}

const selectors = {
    search: '.gLFyf',
    byndyusoft: '[href="https://byndyusoft.com/"]',
    knowMoreBtn: '.know-more__container > .btn',
    contacts: '.popup-callback__footer-contacts'
}