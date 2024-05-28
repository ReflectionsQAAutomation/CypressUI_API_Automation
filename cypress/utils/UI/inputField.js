//Resusable method for providing 'INPUT TEXT' to any text box on the UI

Cypress.Commands.add('inputField', (selector, inputText) => {
    return cy.get(selector).clear().type(inputText);
})