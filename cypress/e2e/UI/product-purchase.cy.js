/// <reference types="cypress" />
import HomePage from '../../support/pages/HomePage';
import CheckoutPage from '../../support/pages/CheckoutPage';

const homePage = new HomePage();
const checkoutPage = new CheckoutPage();

describe('product purchase', () => {


  before(function () {
    cy.fixture('purchaseItems').then(function (data) {
      this.data = data;
    })
    cy.intercept('POST', 'https://api.practicesoftwaretesting.com/users/login').as('login')
  })

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/')
  })


  it.only('Product Puchase Happy Path', () => {
    homePage.searchItem('Combination Pliers')
    homePage.clickSearchButton()
    cy.wait(3000)
    homePage.clickItem()
    homePage.clickAddToCart()
    homePage.clickOnCart()
    checkoutPage.clickProceedToCheckout()
    checkoutPage.enterEmail()
    checkoutPage.enterPassword()
    checkoutPage.clickLogin()
    cy.wait('@login')
    checkoutPage.clickProceedToCheckout()
    checkoutPage.addAddress()
    checkoutPage.addCity()
    checkoutPage.addState()
    checkoutPage.addCountry()
    checkoutPage.addPostcode()
    checkoutPage.clickProceedToCheckout()
    checkoutPage.selectPaymentMethod('Cash on Delivery')
    checkoutPage.clickConfirm()
  })


  it('Delete an Item from Cart', () => {
    homePage.searchItem('Combination Pliers')
    homePage.clickSearchButton()
    cy.wait(3000)
    homePage.clickItem()
    homePage.clickAddToCart()
    homePage.clickOnHome()
    homePage.searchItem('Bolt Cutters')
    homePage.clickSearchButton()
    cy.wait(3000)
    homePage.clickItem()
    homePage.clickAddToCart()
    homePage.clickOnCart()
    checkoutPage.deleteItem()
    
  })

})
