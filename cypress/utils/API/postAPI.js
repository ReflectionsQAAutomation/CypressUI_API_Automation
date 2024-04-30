
Cypress.Commands.add('postApiCall', (url, data) => {
    return cy.request({
      method: "POST",
      url: `${Cypress.env('apiUrl')}`+url,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: data
    }).then((response) => {
      return response;
    });
  });