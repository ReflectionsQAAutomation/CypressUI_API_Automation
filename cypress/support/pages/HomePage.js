/// <reference types="cypress" />
class HomePage {
  // all the elements of the page are here
    constructor() {
      this.searchTextBox = '[data-test="search-query"]'
      this.submitButton = '[type="submit"]'
    }
   
    typeSearchButton(item) {
      return cy.get(this.searchTextBox).type(item)
    }
   
    getSubmitButton() {
      return cy.get(this.submitButton)
    }

   clickSubmittButton() {
        return cy.get(this.submitButton).click()
      }

    // common function for search a product
    searchProduct(product)
    {
      homePage.typeSearchButton(product)
      homePage.clickSubmittButton()
    }
   
  }
  export const homePage = new HomePage();