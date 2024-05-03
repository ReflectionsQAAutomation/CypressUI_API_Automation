import LoginPage from '../../support/pages/LoginPage.js'

const loginPage = new LoginPage()

Cypress.Commands.add('login', (userName,password ) => {
    loginPage.elements.signInButton().click();
    loginPage.elements.emailInput().type(userName);
    loginPage.elements.passwordInput().type(password);
    loginPage.elements.loginButton().click();
})