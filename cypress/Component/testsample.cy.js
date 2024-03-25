/// <reference types="cypress" />
import { homePage } from "../../support/pages/HomePage.js"

describe('product purchase', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/')
  })

  it('Search', () => {
    homePage.searchProduct('Combination Pliers')
  })

 })
