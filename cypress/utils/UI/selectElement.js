//Resusable method for performing 'SELECT' action from dropdown menu on the UI

Cypress.Commands.add('selectElement', (selector, selectText) => {
    cy.get(selector).select(selectText)
})