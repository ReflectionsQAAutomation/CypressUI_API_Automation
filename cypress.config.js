const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    experimentalStudio: false,

    specPattern: ["cypress/Component/**/**/*.js", "cypress/e2e/**/**/*.js"],
    setupNodeEvents(on, config) {
     // set up the events
    },
    hideXHRInCommandLog: true,
    video: true,
    videoCompression: false,
  },
});
