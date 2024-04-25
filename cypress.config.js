const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = defineConfig({
  e2e: {
    projectId: "sbywkh",
    "reporter": "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    experimentalStudio: false,

    specPattern: ["cypress/Component/**/**/*.js", "cypress/e2e/**/**/*.js"],
    setupNodeEvents(on, config) {
      on("task", {
        downloadFile,
      });
    },
    hideXHRInCommandLog: true,
    video: true,
    videoCompression: false,
  },
});
