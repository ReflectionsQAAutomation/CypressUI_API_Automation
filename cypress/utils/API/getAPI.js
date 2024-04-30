
Cypress.Commands.add('getApiCall', (url) => {
    return cy.request({
      method: "GET",
      url: `${Cypress.env('apiUrl')}`+url,
      headers: {
        "accept": "application/json"
      },
    }).then((response) => {
      return response;
    });
  });