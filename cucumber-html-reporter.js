const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports/",
  reportPath: "./cypress/cucumberReports/cucumber-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "MacOS",
      version: "14.1.1",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Demo" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: 'Execution Start Time', value: new Date().toLocaleString() }, // Modify this line
      { label: 'Execution End Time', value: new Date().toLocaleString() },   // Modify this line
    ],
  },
});