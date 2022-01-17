class ProfilePage {
    getHeader() {
        return cy.get('.main-header');
    }
    getbookNameColumn() {
        return cy.get('.rt-table').find('.rt-tr').find('.rt-td:nth-child(2) a');
    }
    getLogoutButton() {
        return cy.contains('button', 'Log out');
    }
}
export default ProfilePage
