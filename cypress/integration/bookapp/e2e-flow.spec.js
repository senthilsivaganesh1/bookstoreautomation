import BookStorePage from '../../support/pageobjects/bookstorepage';
import LandingPage from '../../support/pageobjects/landingpage'
import ProfilePage from '../../support/pageobjects/profilePage';

describe('e2e flow book store application', function () {

    beforeEach(function () {
        // Test data retrieved from fixtures
        cy.fixture("bookstore").then(function (data) {
            this.data = data;
            // cy.login is a custom command created inside support/command.js
            cy.login(this.data.username, this.data.password);
        })

    })
    it('login to book store', function () {
        // using pageObject pattern to retrieve the locators
        const landingPage = new LandingPage();
        const bookStorePage = new BookStorePage();
        const profilePage = new ProfilePage();

        landingPage.getGoToStore().click();
        landingPage.getsearchBox().type(this.data.bookname);
        landingPage.getbookNameColumn().should('have.text', this.data.bookname);
        cy.screenshot('book name successfully found');
        landingPage.getbookNameColumn().click();
        bookStorePage.getHeader().should('have.text', this.data.bookstorepageheader);

        bookStorePage.getAddToCollectionButton().click()
        cy.on("window:alert", (message) => {
            expect(message).to.contains(this.data.alertmessage);
        })
        bookStorePage.getProfileLink().click();

        profilePage.getHeader().should('have.text', this.data.profilepageheader);
        profilePage.getbookNameColumn().each(($element, index) => {
            const text = $element.text();
            if (text.includes(this.data.bookname)) {
                profilePage.getbookNameColumn().eq(index)
                    .should('have.text', this.data.bookname);
                return false;
            }
        })
    })
})