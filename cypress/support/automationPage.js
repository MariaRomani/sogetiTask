

class AutomationPage {
    AssertionOnAutomationScreen() {
        cy.url().should('include', '/services/automation')

    }

    verifyAutomationTextIsVisible() {
        cy.get('h1 > span').should('contain', 'Automation')
    }

    scrollDownToContactUsForm() {

        cy.get("h2.Form__Title:contains('Contact us:')").scrollIntoView();



    }


    fillContactUsForm() {


        const getRandomString = () => Math.random().toString(36).substring(2); 
        const getRandomEmail = () => `test${Math.floor(Math.random() * 10000)}@example.com`; 
        const getRandomPhoneNumber = () => `555-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`; 
        const getRandomCompany = () => Math.random().toString(36).substring(2) + " " + "Company"; 
        const getRandomMessage = () => Math.random().toString(36).substring(2) + " " + "thank you"; 

        cy.get("div.textboxelementblock > div > div > label:contains('First Name')").type(getRandomString())
        cy.get("div.textboxelementblock > div > div > label:contains('Last Name')").type(getRandomString())
        cy.get("div.textboxelementblock > div > div > label:contains('Email')").type(getRandomEmail())
        cy.get("div.textboxelementblock > div > div > label:contains('Phone')").type(getRandomPhoneNumber())
        cy.get("div.textboxelementblock > div > div > label:contains('Company')").type(getRandomCompany())


        cy.get("div.selectwrapper select").children().then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length);
            cy.get("div.selectwrapper select").select($elements.eq(randomOption).text());
        })


        cy.get("div> div > div > label:contains('Message')").type(getRandomMessage())
    }


    checkIagreeCheckbox() {
        cy.get("input[type='checkbox']").check({ force: true })

    }

    clickSubmitButton() {
        cy.get('button[name="submit"]').click();
    }

    verifyThankYouMessage() {
        cy.get("p:contains('Thank you for contacting us')").should('have.text', 'Thank you for contacting us');
    }

    assertThatTheOnlyErrorAvailableIsReCAPTCHA() {
        cy.get('span.Form__Element__ValidationError:contains("Invalid captcha value")').should('contain', 'Invalid captcha value');
        cy.get('span.Form__Element__ValidationError:contains("This field is required")').should('have.length', 0);

    }




}







export default AutomationPage;