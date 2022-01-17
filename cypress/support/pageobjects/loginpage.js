class LoginPage {
    getUserName() {
        return cy.get('#userName');
    }
    getPassword() {
        return cy.get('#password');
    }
    getLoginButton() {
        return cy.get('#login');
    }
}
export default LoginPage
