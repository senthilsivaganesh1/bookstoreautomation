class BookStorePage {
    getHeader() {
        return cy.get('.main-header');
    }
    getAddToCollectionButton() {
        return cy.contains('button', 'Add To Your Collection');
    }
    getProfileLink() {
        return cy.contains('span', 'Profile');
    }
}
export default BookStorePage
