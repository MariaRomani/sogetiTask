class HomePage {
    openHomePage() {
        cy.visit('https://www.sogeti.com/', { force: true });
    }

    acceptCookies() {
        cy.get('.consent_wrapper').should('be.visible');
        cy.get('.acceptCookie').click();
        cy.get('.consent_wrapper').should('not.be.visible');
    }


    hoverOverServicesLink() {
        cy.get('span:contains("Services")').first().trigger('mouseover');
    }

    clickAutomationLink() {
        cy.get('ul.level1 a').contains("Automation").first().click();
    }

    verifyServicesAndAutomationAreSelected() {
        cy.wait(3000)
        cy.get('li.selected.has-children.expanded.level2.focus-style span:contains("Services")')
            .should('exist');
    }




    constructor() {
        this.countryList = 'span[aria-label="Worldwide"]';
        this.countryItems = '#country-list-id ul li a';
    }


    openCountryMenu() {
        cy.wait(3000)
        cy.get(this.countryList).should('be.visible').click();
    }

    assertSubMenuVisible() {
        cy.get(this.countryItems).should('be.visible');
    }

    assertSubMenuContainsCountry(countryName) {
        cy.get(this.countryItems).contains(countryName).should('be.visible');
    }




    goBackToHomepage() {
        cy.visit('/');


    }








}
export default HomePage;

