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
   git clone https://github.com/tyro-ops/crm-automation.git
   cd crm-automation

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

crm-automation
│
├── .github
│   └── workflows
│       └── ci.yml
├── docker
│   └── Dockerfile
├── src
│   ├── api
│   │   ├── apiClient.ts
│   │   └── apiTests.spec.ts
│   ├── ui
│   │   ├── data
│   │   │   └── apiTestData.json
│   │   │   └── uiTestData.json
│   │   ├── locators
│   │   │   └── locators.json
│   │   ├── pages
│   │   │   ├── basePage.ts
│   │   │   ├── loginPage.ts
│   │   │   ├── registrationPage.ts
│   │   │   └── dashboardPage.ts
│   │   ├── tests
│   │   │   └── uiTests.spec.ts
│   │   ├── utils
│   │   │   ├── testUtils.ts
│   │   │   ├── dataUtils.ts
│   │   │   └── assertions.ts
│   └── config
│       └── config.ts
├── reports
│   └── report.html
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json

### Detailed Explanation

#### 1. `.github/workflows/ci.yml`
This directory contain the configuration file for Continuous Integration (CI) services:
- **`.github/workflows/ci.yml`**: Configuration for GitHub Actions.

These files ensure that your tests are automatically run whenever you push changes to your repository.

#### 2. `docker/Dockerfile`
The Dockerfile defines the environment in which your tests will run. This can help ensure consistency across different machines and CI services. It includes instructions for setting up the necessary software and dependencies for running the tests.

#### 3. `src`
This is the main source directory containing all your test scripts, utilities, and configurations.

##### a. `src/api`
- **`apiClient.ts`**: This file contains the `ApiClient` class, which handles HTTP requests to the API using the Axios library.
- **`apiTests.spec.ts`**: This is the test suite for API tests. It uses the `ApiClient` class to send requests and validate responses.

##### b. `src/ui`
This directory is specifically for UI tests.

###### i. `src/ui/data`
- **`apiTestData.json`**: Contains test data for API tests.
- **`uiTestData.json`**: Contains test data for UI tests.

###### ii. `src/ui/locators`
- **`locators.json`**: Stores all the locators used in your page objects. This helps in managing selectors centrally, making it easier to maintain.

###### iii. `src/ui/pages`
This directory contains page object classes. Each class corresponds to a page or a significant part of a page in the application.

- **`basePage.ts`**: A base class that other page classes extend from. It contains common methods and properties.
- **`loginPage.ts`**: Contains methods specific to the login page.
- **`registrationPage.ts`**: Contains methods specific to the registration page.
- **`dashboardPage.ts`**: Contains methods specific to the dashboard page.

###### iv. `src/ui/tests`
- **`uiTests.spec.ts`**: The test suite for UI tests. It contains test cases that interact with the web application using the page object classes.

###### v. `src/ui/utils`
This directory contains utility functions and helpers.

- **`testUtils.ts`**: Contains general utilities for tests.
- **`dataUtils.ts`**: Contains functions for reading and handling test data.
- **`assertions.ts`**: Contains custom assertion functions.

##### c. `src/config`
- **`config.ts`**: Configuration file for your tests, such as environment variables, URLs, and other settings.

#### 4. `reports`
- **`report.html`**: This is the directory where test reports are generated. The `report.html` file is an example of a generated test report that you can view to see the results of your tests.

#### 5. Root Configuration Files
- **`.gitignore`**: Specifies which files and directories should be ignored by Git.
- **`package.json`**: The Node.js package manifest. It lists dependencies and scripts for running your tests.
- **`playwright.config.ts`**: Configuration file for Playwright. It sets up global settings like the base URL, browser options, test directories, and more.
- **`tsconfig.json`**: TypeScript configuration file. It defines how TypeScript should compile your code.



### Additional Resources or Dependencies
Node.js
Playwright
TypeScript


### Test Suite Explanation: 

This test suite automates the User add flow in PIM & Assign user as ESS role flowof the Orange HRM demo website and includes assertions to verify the correctness of the user's actions.
ANother Test Suite automates the Res API Automation 


### Approach to Design and Technical Considerations

#### Design Approach
1. **Modular Architecture**: The framework is designed with a clear separation of concerns, utilizing a modular architecture to keep the codebase organized and maintainable.
   - **Page Object Model (POM)**: Each page in the application has a corresponding class in the `src/ui/pages` directory. This encapsulates page-specific actions and locators, promoting reusability and readability.
   - **Data-Driven Testing**: Test data is separated from the test scripts and stored in JSON files within the `src/ui/data` directory. This allows for easy updates and modifications to test data without altering the test scripts.
   - **Centralized Locators**: All locators are stored in a single JSON file (`locators.json`) within the `src/ui/locators` directory, enabling easy maintenance and updates to element selectors.

2. **Configuration Management**: Using the `playwright.config.ts` file for centralized configuration management ensures that global settings such as base URLs, timeouts, and browser configurations are easily adjustable.

3. **Continuous Integration (CI)**: Configuration file GitHub Actions enable automated test runs on every code push, ensuring continuous feedback and integration. The Dockerfile ensures a consistent testing environment across different platforms.

#### Technical Considerations
1. **Scalability**: The framework is designed to handle the addition of new test cases and pages with minimal effort. The modular structure allows for easy expansion.
2. **Error Handling and Assertions**: Custom assertions and comprehensive error handling are implemented to ensure that tests fail gracefully and provide meaningful feedback.
3. **Parallel Execution**: Tests are configured to run in parallel to optimize execution time, especially important for CI pipelines.
4. **Advanced Features**: Utilization of Playwright’s advanced features such as device emulation, trace capturing, and detailed reporting enhances the robustness and capability of the test suite.

### Challenges Faced and Overcoming Them

1. **Async Handling and Timing Issues**: One of the primary challenges was dealing with asynchronous operations and timing issues (e.g., waiting for elements to appear). 
   - **Solution**: Implemented robust waiting mechanisms and increased timeouts where necessary to ensure the stability of test executions.

2. **Dynamic Elements and Selectors**: Handling dynamic elements whose selectors could change or be generated dynamically posed a challenge.
   - **Solution**: Utilized more resilient selector strategies such as relative positioning and text-based selectors. Centralized locators in JSON allowed for quick updates and maintenance.

3. **Data Management**: Ensuring data consistency across tests, especially for data-driven tests, required careful management.
   - **Solution**: Employed utility functions to read and manipulate test data dynamically. Ensured unique data generation where necessary to avoid conflicts.

4. **Cross-Browser Testing**: Ensuring tests run consistently across different browsers and devices.
   - **Solution**: Utilized Playwright’s built-in capabilities to test across multiple browsers and implemented device emulation for mobile testing.

5. **CI Integration**: Setting up CI pipelines to work seamlessly with the framework.
   - **Solution**: Created detailed configuration file GitHub Actions, ensuring that environment variables and dependencies were correctly managed.

### Assumptions Made and Justifications

1. **Stable Application State**: Assumed that the web application under test is in a stable state with consistent element locators and page flows.
   - **Justification**: This assumption allows focusing on creating robust tests without frequently changing selectors and test logic due to application instability.

2. **Unique User Data**: Assumed that user-related operations (like registration) require unique data for each test run to avoid conflicts.
   - **Justification**: Using unique data ensures that tests do not interfere with each other and can run independently in parallel.

3. **Consistent API Responses**: Assumed that the API endpoints provide consistent responses as per the documentation.
   - **Justification**: Consistent API responses are crucial for validating data and status codes reliably in API tests.

4. **CI Environment Configuration**: Assumed that the CI environment is correctly configured with necessary dependencies and access to the application under test.
   - **Justification**: Ensuring that the CI environment is properly set up is fundamental for successful automated test execution and continuous integration.
