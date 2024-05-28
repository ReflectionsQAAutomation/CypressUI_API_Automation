//This Class contains elements and functions performed related to Checkout page of the UI

import HomePage from '../../support/pages/HomePage';
const homePage = new HomePage();

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

    checkoutCart(PaymentMethod){
        cy.clickElement(homePage.elements.cartButton)
        cy.clickElement(this.elements.proceedToCheckoutButton)
        cy.clickElement(this.elements.proceedToCheckoutButton)
        cy.clickElement(this.elements.proceedToCheckoutButton)
        cy.selectElement(this.elements.paymentMethodDropDown, PaymentMethod)
        cy.clickElement(this.elements.confirmButton)
    }  

    deleteProduct(){
        cy.clickElement(this.elements.deleteButton)
    }


}

export default CheckoutPage