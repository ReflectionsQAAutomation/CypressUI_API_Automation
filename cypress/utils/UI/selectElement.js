Cypress.Commands.add('selectElement', (selector, selectText) => {
    cy.get(selector).select(selectText)
})