# cypress-demo
## Set up Cypress 
- Clone the project
- Run the command to install all dependences
`npm install`
- FYI, (no need to execute as npm install will solve dêpndencies):
    - `npm install cypress typescript --save-dev`
    - `npm install @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor --save-dev`

## important note before running the tests
Note that with Cypress Typescript, currently, `cypress-mochawesome-reporter` and `cypress-cucumber-preprocessor` are not compatible, so we need to disabled either one of them to run tests.

- For typescript normal tests: Use `cypress.config.ts_mochawesome_bk`
- For cucumber tests: Use `cypress.config.ts_cucumber_bk`

## Run Cypress
### Run Cypress on local
- Open cypress runner
    - `npx cypress open`

- Run with headless/non-headless mode with different browsers
    - `npx cypress run --headless`
    - `npx cypress run --headed`
    - `npx cypress run --headed --browser  firefox`
    - `npx cypress run --headed --browser  chrome`

- Run cypress typescript with specific test (*)
    - `npx cypress run --browser chrome --headed --spec cypress/integration/*/*.ts --env baseURL="https://13.201.9.53"`

### Run through scripts
- `npm run test-ts-examples`
- `npm run test-dashboard-samples`
- `npm run test-cucumber`

### Run Cypress and upload to Cypress Dashboard cloud
- Command
    - `npx cypress run  --browser chrome   --spec cypress/integration/*/*.ts  --env url="https://13.201.9.53" --headed --record --key {record-key}`

### Run Cypress Cucumber and Generate Cucumber reports
- Run cucumber tests
    - `npx cypress run  --browser chrome   --spec cypress/integration/BDD/features/shoppingTest.feature --headed`
    - `npx cypress run --browser chrome --env tags="@smoke"  --headed`
    
    Note that a results.json will be generated after executing tests

- Generate cucumber report (after running cucumber tests)
    From the root folder, execute the command: 
    - `node cucumber-html-reporter.js`