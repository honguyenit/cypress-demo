const { defineConfig } = require("cypress");
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on); // for mochawesome report, not compatable with cucumber-report

  // const bundler = createBundler({
  //   plugins: [createEsbuildPlugin(config)], // for cucumber tests, does not compatable with mochawesome-report
  // });

  // on('file:preprocessor', bundler);
  // await addCucumberPreprocessorPlugin(on, config); // for cucumber tests, does not compatable with mochawesome-report


  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern: '**/*.feature', // for cumcumber tests (with cucumber report))
    specPattern: 'cypress/integration/*/*.ts', // for typescript normal tests (with mochawesome report)
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
  projectId: "phxodt",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    embeddedScreenshots: true,
    saveAllAttempts: false,
    videoOnFailOnly:true,
  },
});
