const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    embeddedScreenshots: true,
    saveAllAttempts: false,
    videoOnFailOnly:true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      baseURL: '13.201.9.53'
    },
    specPattern: 'cypress/integration/*/*.js',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videoCompression: true,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 7000
  },
});
