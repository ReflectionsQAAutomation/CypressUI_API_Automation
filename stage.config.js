//This is the config for STAGE environment. i.e., all the url and properties related to STAGE are placed here.

const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = defineConfig({
  video:true,
  e2e: {
    projectId: "sbywkh",
    "reporter": "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    baseUrl : "https://practicesoftwaretesting.com"    
    },  
    
    env : {
      apiUrl : "https://api.practicesoftwaretesting.com"
    }
});
