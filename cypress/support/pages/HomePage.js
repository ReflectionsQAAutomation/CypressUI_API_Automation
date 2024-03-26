class HomePage{

    elements = {
        searchBox : () => cy.get('[data-test=search-query]'),      
        searchButton : () => cy.get('[data-test=search-submit]'),    
        item : () => cy.get('.card-img-top'),
        addToCartButton : () => cy.get('[ data-test=add-to-cart]'),
        cartButton : () =>  cy.get('[ data-test=nav-cart]'),
        homeButton : () => cy.get('[ data-test=nav-home]'),
    }

    searchItem(item){
        this.elements.searchBox().clear().type(item)
    }

    clickSearchButton(){
        this.elements.searchButton().click()
    }

    searchProduct(item){
        this.searchItem(item)
        this.clickSearchButton()
    }

    clickItem(){
        this.elements.item().click()
    }

    clickAddToCart(){
        this.elements.addToCartButton().click()
       
    }

    clickOnCart(){
        this.elements.cartButton().click()
    }

    clickOnHome(){
        this.elements.homeButton().click()
    }


    

    
    
}
export default HomePage;