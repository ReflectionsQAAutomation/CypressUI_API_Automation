/// <reference types="cypress" />


describe('product purchase', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/#/')
  })

  it('Search', () => {
    cy.get('[data-test="search-query"]').type('Combination Pliers')
    cy.get('[type="submit"]').click()
  })

 })
