# cypress-demo
## Set up Cypress 
- Clone the project
- Run the command to install all dependences
```npm install```
- Install `cypress-iframe` to work with iframe (optional)
```npm install -D cypress-iframe```

## Run Cypress
### Run Cypress on local
- Open cypress runner
    - ```npx cypress open```

- Run with headless/non-headless mode
    - ```npx cypress run --headless```
    - ```npx cypress run --headed```

- Run with different browsers 
    - ```npx cypress run --headed --browser  firefox```
    - ```npx cypress run --headed --browser  chrome```

- Run cypress with specific test
    - ```npx cypress run --headed --spec cypress/integration/examples/sample.js```

- Run cypress with specific env, spec, browser, nonheadless mode
    - ```npx cypress run --browser chrome --headed --spec cypress/integration/advancedExamples/homepageTests.js --env baseURL="https://13.201.9.53"```
    - ```npx cypress run --browser chrome --headed --spec cypress/integration/examples/*.js --env url="https://13.201.9.53"```

### Run Cypress and upload to Cypress Dashboard cloud
- Command
    - ```npx cypress run  --browser chrome   --spec cypress/integration/examples/*.js  --env url="https://13.201.9.53" --headed --record --key {record-key}```