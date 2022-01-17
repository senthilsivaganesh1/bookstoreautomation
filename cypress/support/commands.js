import LoginPage from '../support/pageobjects/loginpage'
import LandingPage from '../support/pageobjects/landingpage'

const loginpage = new LoginPage();
const landingPage = new LandingPage();
const url = Cypress.env("url");
Cypress.Commands.add('login', (username, password) => {
  cy.visit(url);
  loginpage.getUserName().type(username);
  loginpage.getPassword().type(password);
  loginpage.getLoginButton().click();
  landingPage.getUserNameValue().should('have.text', username);
})

