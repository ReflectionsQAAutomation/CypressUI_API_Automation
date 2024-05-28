//Resusable method for performing 'CLICK' action on any element on the UI

Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).click({force: true , multiple: true});
})