/// <reference types="cypress" />
import HomePage from '../../support/pages/HomePage';
import CheckoutPage from '../../support/pages/CheckoutPage';

const csv = require('neat-csv')

const homePage = new HomePage();
const checkoutPage = new CheckoutPage();

let regData;
let testdata;


describe('product purchase', () => {
  before(() => {
    cy.fixture("products.csv")
      .then(csv)
      .then((data) => {
        regData = data
      })

    cy.fixture('testdata').then((data1) =>{
      testdata = data1
    })
  })

  beforeEach(() => {
    cy.visit('/')
    cy.intercept('POST', `${Cypress.env('apiUrl')}/users/login`).as('login')
    cy.intercept('GET', `${Cypress.env('apiUrl')}/products/search?*`).as('search')
  })


  it('Product Puchase - Happy Path', () => {
    for (let i = 0; i < regData.length; i++) {
      cy.inputField(homePage.elements.searchBox, regData[i]['Products'])
      cy.clickElement(homePage.elements.searchButton)
      cy.wait('@search')
      cy.wait(5000)
      cy.clickElement(homePage.elements.item)
      cy.clickElement(homePage.elements.addToCartButton)
      cy.clickElement(homePage.elements.cartButton)
      cy.clickElement(checkoutPage.elements.proceedToCheckoutButton)
      if (i == 0) {
        cy.login(testdata.username, testdata.password)
        cy.wait('@login')
      }
      cy.clickElement(checkoutPage.elements.proceedToCheckoutButton)
      cy.clickElement(checkoutPage.elements.proceedToCheckoutButton)
      cy.selectElement(checkoutPage.elements.paymentMethodDropDown, regData[i]['Payment Method'])
      cy.clickElement(checkoutPage.elements.confirmButton)
      cy.clickElement(homePage.elements.homeButton)
    }
  })


})
