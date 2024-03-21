class CheckoutPage{

    elements = {
        proceedToCheckoutButton : () => cy.get('.btn.btn-success').click({ force: true}),      
        emailInput : () => cy.get('[data-test=email]'),    
        passwordInput : () => cy.get('[data-test=password]'),    
        loginButton : () => cy.get('[ data-test=login-submit]'),
        addressInput : () =>  cy.get('[ data-test=address]'),
        cityInput : () =>  cy.get('[ data-test=city]'),
        stateInput : () =>  cy.get('[ data-test=state]'),
        countryInput : () =>  cy.get('[ data-test=country]'),
        postcodeInput : () =>  cy.get('[ data-test=postcode]'),
        paymentMethodDropDown : () => cy.get('[ data-test=payment-method]'),
        confirmButton : () => cy.get('[ data-test=finish]'),
        deleteButton : () => cy.get('.fa.fa-remove')

    }

    clickProceedToCheckout(){
        this.elements.proceedToCheckoutButton().click()
    }

    enterEmail()
    {
        this.elements.emailInput().type('customer@practicesoftwaretesting.com')
    }

    enterPassword()
    {
        this.elements.passwordInput().type('welcome01')
    }

    clickLogin()
    {
        this.elements.loginButton().click()
    }

    addAddress()
    {
        this.elements.addressInput().type('Test street 98')
    }
    addCity()
    {
        this.elements.cityInput().type('Vienna')
    }
    addState()
    {
        this.elements.stateInput().type('PULKAU')
    }

    addCountry()
    {
        this.elements.countryInput().type('Austria')
    }

    addPostcode()
    {
        this.elements.postcodeInput().type('3741')
    }

    selectPaymentMethod(paymentMethod)
    {
        this.elements.paymentMethodDropDown().select(paymentMethod)
    }

    clickConfirm(){
        this.elements.confirmButton().click()
    }    

    deleteItem(){
        this.elements.deleteButton().click()

    }


  

}

export default CheckoutPage