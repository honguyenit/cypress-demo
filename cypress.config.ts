const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {preprocessor} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on); // for mochawesome report
  // await addCucumberPreprocessorPlugin(on, config); // for cucumber
  // on("file:preprocessor", preprocessor(config)); // for cucumber
  return config;
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
    setupNodeEvents,
    // specPattern: '**/*.feature', // for cumcumber tests
    // specPattern: 'cypress/integration/*/*.js', // for normal tests
    // specPattern: ['**/*.feature','cypress/integration/*/*.js'], // for both normal and Cucumber tests
    // specPattern: 'cypress/integration/*/*.ts', // for tyscript normal tests
    specPattern: ['**/*.feature','cypress/integration/*/*.ts'], // for both normal and Cucumber tests
    env: {
      baseURL: '13.201.9.53'
    },
    retries: {
      runMode: 1, // Configure retry attempts for `cypress run`
      openMode: 1, // Configure retry attempts for `cypress open`
      },
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videoCompression: true,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 7000
  },
});
