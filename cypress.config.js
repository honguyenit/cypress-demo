const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*/*.js',
    screenshotsFolder: 'cypress/screenshots-test',
    defaultCommandTimeout: 7000
  },
});
