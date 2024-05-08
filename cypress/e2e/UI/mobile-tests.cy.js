/// <reference types="cypress" />
import HomePage from '../../support/pages/HomePage';
import mobiledevicedata from '../../fixtures/mobiledevices.json';
import purchaseItem from '../../fixtures/purchaseItems.json';

const homePage = new HomePage();


describe('Mobile Device Testing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', `${Cypress.env('apiUrl')}/products/search?*`).as('search')
  })

  for (let mobiledevicevalue in mobiledevicedata.mobileDevices) {
    it(`Testing ${mobiledevicedata.mobileDevices[mobiledevicevalue]}`, () => {     
      cy.viewport(mobiledevicedata.mobileDevices[mobiledevicevalue])
      homePage.clickOnFilter()
      homePage.searchProduct(purchaseItem.item1)
      cy.wait('@search')
    })
  }
})
