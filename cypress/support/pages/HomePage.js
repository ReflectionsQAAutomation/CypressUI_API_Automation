//This Class contains elements and functions performed related to HomePage of the UI

class HomePage {

    elements = {
        searchBox: '[data-test=search-query]',
        searchButton: '[data-test=search-submit]',
        item: '.card-img-top',
        addToCartButton: ' [ data-test=add-to-cart]',
        cartButton: '[ data-test=nav-cart]',
        homeButton: '[ data-test=nav-home]',
        filterButton: '[ data-test=filters]'
    }

    searchProduct(product) {
        cy.inputField(this.elements.searchBox, product)
        cy.clickElement(this.elements.searchButton)
    }

    addItemToCart() {
        cy.clickElement(this.elements.item)
        cy.clickElement(this.elements.addToCartButton)
    }

    goToCart(){
        cy.clickElement(this.elements.cartButton)
    }

    goToHomePage(){
        cy.clickElement(this.elements.homeButton)
    }

    clickOnFilter(){
        cy.clickElement(this.elements.filterButton)
    }

   
}
export default HomePage;