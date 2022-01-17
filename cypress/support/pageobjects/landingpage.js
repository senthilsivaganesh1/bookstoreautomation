class LandingPage {
    getGoToStore() {
        return cy.get('#gotoStore');
    }
    getsearchBox() {
        return cy.get('#searchBox');
    }
    getbookNameColumn() {
        return cy.get('.rt-table').find('.rt-tr').find('.rt-td:nth-child(2) a');
    }
    getUserNameValue() {
        return cy.get('#userName-value');
    }
}
export default LandingPage
