# Sogeti Task for UI Testing using Cypress.

## Description
This project contains end-to-end tests for https://www.sogeti.com/ , using Cypress.

## Prerequisites
Before running the tests, ensure you have the following installed on your machine:
- Node.js (recommended version)
- npm (Node Package Manager)
- Visual Studio Code (or any other code editor of your choice)

## Installation
1. Clone the repo --> https://github.com/MariaRomani/sogetiTask
2. Open the project directory in Visual Studio Code.
3. Open the integrated terminal in VSCode (View > Terminal).
4. Install project dependencies by running the following command:
npm install
5. Open Cypress Test Runner --> npx cypress open
6. click on E2E testing
7. click on Sogeti.cy.js




##About the Test Cases
Test Case 1
1. Navigate to the URL https://www.sogeti.com/
2. Hover over Services Link (see Image below) and then Click Automation link.
3. Verify that Automation Screen is displayed, and “Automation” text is visible in Page.
4. Hover again over Services Link. Verify that the Services and Automation are selected.

Test Case 2
1. Navigate to the URL https://www.sogeti.com/
2. Hover over Services Link and then Click Automation link.
3. On Automation Page, scroll down to the Contact us Form.
4. Fill the First Name, Last Name, Email, Phone and Message fields with Random Generated Data.
5. Check the I agree checkbox.
6. Then Click SUBMIT button.
7. After clicking SUBMIT button the form is submitted and Thank you message is displayed. Assert the Thank you message.
# Note:
Automate the Test till that Step and please explain in comments in why it is not possible to automate the Test Step? What are the possible workarounds to Test such Test Case?
Test Case 3
1. Navigate to the URL https://www.sogeti.com/
2. Click the Worldwide Dropdown link in Page Header.
3. A Country dropdown list is displayed. These are the Country specific Sogeti links.
4. Assert that all the Country specific Sogeti links are working.
   
## Happy Testing!

