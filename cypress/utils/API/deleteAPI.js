
Cypress.Commands.add('deleteApiCall', (url) => {
    return cy.request({
      method: "DELETE",
      url: `${Cypress.env('apiUrl')}`+url
    }).then((response) => {
      return response;
    });
  });