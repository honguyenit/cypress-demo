const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {preprocessor} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
}
module.exports = defineConfig({
  projectId: "phxodt",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    embeddedScreenshots: true,
    saveAllAttempts: false,
    videoOnFailOnly:true,
  },
  e2e: {
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on);
    //   await addCucumberPreprocessorPlugin(on, config);
    //   on("file:preprocessor", preprocessor(config));
    // },
    setupNodeEvents,
    specPattern: ['**/*.feature', 'cypress/integration/*/*.js'],
    env: {
      baseURL: '13.201.9.53'
    },
    retries: {
      runMode: 1, // Configure retry attempts for `cypress run`
      openMode: 2, // Configure retry attempts for `cypress open`
      },
    // specPattern: 'cypress/integration/*/*.js',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videoCompression: true,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 7000
  },
});
