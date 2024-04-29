Cypress.Commands.add('inputField', (selector, inputText) => {
    return cy.get(selector).clear().type(inputText);
})