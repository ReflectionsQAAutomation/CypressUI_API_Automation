class CheckoutPage{

    elements = {
        proceedToCheckoutButton : '[data-test="proceed-1"], [data-test="proceed-3"] ',      
        emailInput : '[data-test=email]',    
        passwordInput : '[data-test=password]',    
        loginButton : '[ data-test=login-submit]',
        addressInput : '[ data-test=address]',
        cityInput : '[ data-test=city]',
        stateInput : '[ data-test=state]',
        countryInput : '[ data-test=country]',
        postcodeInput : '[ data-test=postcode]',
        paymentMethodDropDown : '[ data-test=payment-method]',
        creditCardNumberInput : '[ data-test=credit_card_number]',
        expirationDateInput : '[ data-test=expiration_date]',
        cvvInput : '[ data-test=cvv]',
        cardHolderNameInput : '[ data-test=card_holder_name]',
        confirmButton : '[ data-test=finish]',
        paymentSuccessMessage : '.help-block',
        deleteButton : '.fa.fa-remove'

    }    

}

export default CheckoutPage