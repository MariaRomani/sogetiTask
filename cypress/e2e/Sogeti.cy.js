
import AutomationPage from "../support/automationPage";
import HomePage from "../support/homePage";
import Chance from 'chance';


describe('Sogeti website test', () => {

  const homePage = new HomePage();
  const automationPage = new AutomationPage();
  const chance = new Chance();



  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.sogeti.com/', { force: true });
    homePage.acceptCookies();

  });

  afterEach(() => {
    cy.log('Closing the browser.');
  })

  it('should navigate to Automation screen', () => {

    homePage.hoverOverServicesLink();
    homePage.clickAutomationLink();
    automationPage.AssertionOnAutomationScreen();
    automationPage.verifyAutomationTextIsVisible();
    homePage.hoverOverServicesLink();
    homePage.verifyServicesAndAutomationAreSelected();

  });


  // while the reCAPTCHA cannot be automated so either run the automation with Environment that has the reCAPTCHA disabled
// or run the automation till the step before the reCAPTCHA and document it to be manually tested.
// generally if something cannot be automated, document it clearly in test plan that it will be handled manually with the reasons and how to handled all the edge and corner cases of that part
  // regarding the Test case we have, i created a scenario in case we have an environment with reCAPTCHA and another scenario with skipping the reCAPTCHA to be done manually

  // the following TC should be performed on environment with the reCAPTCHA disabled
  it.skip('should submit the contact form with random generated data', () => {
    const name = chance.name();
    const email = chance.email();
    const phone = chance.phone();
    const message = chance.paragraph();


    homePage.hoverOverServicesLink();
    homePage.clickAutomationLink();
    automationPage.AssertionOnAutomationScreen();
    automationPage.verifyAutomationTextIsVisible();
    cy.wait(5000);
    automationPage.scrollDownToContactUsForm();
    automationPage.fillContactUsForm();
    automationPage.checkIagreeCheckbox();
    automationPage.clickSubmitButton();
    automationPage.verifyThankYouMessage();


  });

  // in case the the reCAPTCHA couldn't be disabled 
  // we gonna skip the reCAPTCHA submittion, but validation on the rest of fileds are filled smoothly without submittion

  it('should submit the contact form with random generated data', () => {
    const name = chance.name();
    const email = chance.email();
    const phone = chance.phone();
    const message = chance.paragraph();


    homePage.hoverOverServicesLink();
    homePage.clickAutomationLink();
    automationPage.AssertionOnAutomationScreen();
    automationPage.verifyAutomationTextIsVisible();
    automationPage.scrollDownToContactUsForm();
    automationPage.fillContactUsForm();
    automationPage.checkIagreeCheckbox();
    automationPage.clickSubmitButton();
    automationPage.assertThatTheOnlyErrorAvailableIsReCAPTCHA();


  });



  it('should display the Worldwide dropdown and navigate to the country-specific Sogeti links', () => {

    const errors = [];
    homePage.openCountryMenu();

      homePage.assertSubMenuVisible();
      
    cy.get(homePage.countryItems).each(($countryItem) => {
      const countryName = $countryItem.text();
      
     try {
      cy.wrap($countryItem).click({ force: true });
    } catch (error) {
      errors.push(`**Failed to click on** ${countryName} link: ${error.message}`);
    }
  }).then(() => {
    if (errors.length === 0) {
      cy.log('***All the countries links are working correctly***');
    } else {
      throw new Error(errors.join('\n'));
    }
       
    });

  });


});
