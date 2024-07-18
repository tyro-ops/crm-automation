# crm-automation Test Suite


This project is an automated test suite for the Orange hrm demo website using Playwright and the Page Object Model and Open source rest API reqres.

## Setup

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/tyro-ops/sauce-labs-test.git
   cd sauce-labs-test

2. **Install Dependencies**

   Navigate into the project directory and install dependencies using the following command:

   ```bash
   npm intall
   ```
3. **Run Tests**

   Navigate into the project directory and run tests using the following command:

   ```bash
   npx playwright test
   ```
4. ### Check Report

  To open last HTML report run:

   ```bash
   npx playwright show-report
   ```
 Serving HTML report at http://localhost:9323.
   

### Project Structure:

pages/: Contains Page Object Model classes.
tests/: Contains test cases.
playwright.config.ts: Playwright configuration.
tsconfig.json: TypeScript configuration.
README.md: Project documentation.


### Additional Resources or Dependencies
Node.js
Playwright
TypeScript


### Test Suite Explanation: 

This test suite automates the checkout flow of the Sauce Labs demo website and includes assertions to verify the correctness of the user's actions. It includes the following steps:

1. Login with Valid Credentials:

* The user navigates to the login page.
* The user enters valid credentials and logs in.
* Assertion: Verify that the login is successful by checking the visibility of the inventory list.

2. Add 3 Random Items to the Cart:

* The user selects 3 random items from the inventory.
* Assertion: After each item is added, verify that the cart badge updates to reflect the correct number of items.

3. Go to the Cart and Proceed to Checkout:

* The user navigates to the cart page.
* Assertion: Verify that the cart page is displayed correctly by checking the visibility of the cart list.

4. Fill in the Checkout Form and Complete the Checkout Process:

* The user fills in the checkout form with the required details.
* Assertion: Verify that the checkout overview page is displayed after submitting the form.

5. The user completes the checkout process.

* Assertion: Verify that the order completion page displays a "Thank You" message confirming the order.
