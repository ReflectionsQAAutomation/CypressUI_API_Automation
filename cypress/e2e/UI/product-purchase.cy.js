/// <reference types="cypress" />
import HomePage from '../../support/pages/HomePage';
import CheckoutPage from '../../support/pages/CheckoutPage';

const csv = require('neat-csv')

const homePage = new HomePage();
const checkoutPage = new CheckoutPage();

let regData;

const paymentMethod = [
  {
    paymentMethod: "Cash on Delivery",
    paymentMethod: "Credit Card"
  }

]

describe('product purchase', () => {
  before(() => {
    cy.intercept('POST', 'https://api.practicesoftwaretesting.com/users/login').as('login')
    cy.intercept('GET', 'https://api.practicesoftwaretesting.com/products/search?*').as('search')
    cy.fixture("products.csv")
      .then(csv)
      .then((data) => {
        regData = data
      })
  })

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com')
  })


  it('Product Puchase using Cash On Delievery - Happy Path', () => {
    for (let i = 0; i < regData.length; i++) {
      homePage.searchProduct(regData[i]['Products'])
      cy.wait('@search')
      homePage.clickItem()
      homePage.clickAddToCart()
      homePage.clickOnCart()
      checkoutPage.clickProceedToCheckout()
      if (i == 0) {
        checkoutPage.login()
        cy.wait('@login')
      }
      checkoutPage.clickProceedToCheckout()
      checkoutPage.clickProceedToCheckout()
      checkoutPage.selectPaymentMethod(regData[i]['Payment Method'])
      if (regData[i]['Payment Method'] === "Credit Card") {
        checkoutPage.fllCreditCardDetails()
      }
      checkoutPage.clickConfirm()
      homePage.clickOnHome()
    }
  })


  it('Delete an Item from Cart', () => {
    cy.fixture('purchaseItems').then((purchaseItems) => {
      homePage.searchProduct(purchaseItems.item1)
      cy.wait('@search')
      homePage.clickItem()
      homePage.clickAddToCart()
      homePage.clickOnHome()
      homePage.searchProduct(purchaseItems.item2)
      cy.wait('@search')
      homePage.clickItem()
      homePage.clickAddToCart()
      homePage.clickOnCart()
      checkoutPage.deleteItem()
    })
  })

})
