class CheckoutPage{

    elements = {
        proceedToCheckoutButton : () => cy.get('[data-test="proceed-1"], [data-test="proceed-3"] '),      
        emailInput : () => cy.get('[data-test=email]'),    
        passwordInput : () => cy.get('[data-test=password]'),    
        loginButton : () => cy.get('[ data-test=login-submit]'),
        addressInput : () =>  cy.get('[ data-test=address]'),
        cityInput : () =>  cy.get('[ data-test=city]'),
        stateInput : () =>  cy.get('[ data-test=state]'),
        countryInput : () =>  cy.get('[ data-test=country]'),
        postcodeInput : () =>  cy.get('[ data-test=postcode]'),
        paymentMethodDropDown : () => cy.get('[ data-test=payment-method]'),
        creditCardNumberInput : () => cy.get('[ data-test=credit_card_number]'),
        expirationDateInput : () => cy.get('[ data-test=expiration_date]'),
        cvvInput : () => cy.get('[ data-test=cvv]'),
        cardHolderNameInput : () => cy.get('[ data-test=card_holder_name]'),
        confirmButton : () => cy.get('[ data-test=finish]'),
        paymentSuccessMessage : () => cy.get('.help-block'),
        deleteButton : () => cy.get('.fa.fa-remove')

    }

    clickProceedToCheckout(){
        this.elements.proceedToCheckoutButton().click({force: true , multiple: true})
    }

    enterEmail()
    {
        this.elements.emailInput().type('customer@practicesoftwaretesting.com')
    }

    enterPassword()
    {
        this.elements.passwordInput().type('welcome01')
    }

    clickLoginButton()
    {
        this.elements.loginButton().click()
    }

    login(){
        this.enterEmail()
        this.enterPassword()
        this.clickLoginButton()
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
    
    addressInput()
    {
        this.addAddress()
        this.addCity()
        this.addCountry()
        this.addState()
        this.addPostcode()
    }

    selectPaymentMethod(paymentMethod)
    {
        this.elements.paymentMethodDropDown().select(paymentMethod)
    }

    enterCreditCardNumber(){
        this.elements.creditCardNumberInput().type('3782-8224-6310-0052')
    }

    enterExpirationDate(){
        this.elements.expirationDateInput().type('03/2030')
    }

    enterCVV(){
        this.elements.cvvInput().type('373')
    }

    enterCardHolderName(){
        this.elements.cardHolderNameInput().type('example')
    }

    fllCreditCardDetails(){
        this.enterCreditCardNumber()
        this.enterExpirationDate()
        this.enterCVV()
        this.enterCardHolderName()
    }

    clickConfirm(){
        this.elements.confirmButton().click()
    }    

    // paymentSuccessMessage(){
    //     this.elements.paymentSuccessMessage.should('have.text', 'Payment was successful')
    // }

    deleteItem(){
        this.elements.deleteButton().click()

    }


  

}

export default CheckoutPage