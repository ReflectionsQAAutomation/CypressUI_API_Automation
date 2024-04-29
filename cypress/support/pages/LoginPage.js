class LoginPage {

    elements = {
        emailInput: () => cy.get('[data-test=email]'),
        passwordInput: () => cy.get('[data-test=password]'),
        loginButton: () => cy.get('[ data-test=login-submit]'),
    }

}
export default LoginPage