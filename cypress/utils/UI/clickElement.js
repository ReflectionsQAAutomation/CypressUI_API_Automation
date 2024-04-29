Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).click({force: true , multiple: true});
})