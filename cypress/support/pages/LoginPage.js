class LoginPage {

    elements = {
        signInButton : () => cy.get('[data-test=nav-sign-in]'),
        emailInput: () => cy.get('[data-test=email]'),
        passwordInput: () => cy.get('[data-test=password]'),
        loginButton: () => cy.get('[ data-test=login-submit]'),
    }

}
export default LoginPage