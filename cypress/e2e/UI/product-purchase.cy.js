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
    cy.login(testdata.username, testdata.password)
    cy.intercept('POST', `${Cypress.env('apiUrl')}/users/login`).as('login')
    cy.wait('@login')    
    cy.intercept('GET', `${Cypress.env('apiUrl')}/products/search?*`).as('search')
  })


  it('Product Puchase - Happy Path', () => {
    for (let i = 0; i < regData.length; i++) {
      homePage.goToHomePage()
      homePage.searchProduct(regData[i]['Products'])
      cy.wait('@search')      
      homePage.addItemToCart()
      checkoutPage.checkoutCart(regData[i]['Payment Method'])
      homePage.goToHomePage()
    }
  })

  it('Delete Product from Cart', () => {
    cy.fixture('purchaseItems').then((purchaseItems) => {
      homePage.goToHomePage()
      homePage.searchProduct(purchaseItems.item1)
      cy.wait('@search')
      homePage.addItemToCart()
      homePage.goToHomePage()
      homePage.searchProduct(purchaseItems.item2)
      cy.wait('@search')
      homePage.addItemToCart()
      homePage.goToCart()
      checkoutPage.deleteProduct()
    })
  })


})
