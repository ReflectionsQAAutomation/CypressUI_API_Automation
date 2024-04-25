const axios = require("axios");
const fs = require("fs");
const path = require("path");
const util = require("util");
const dotenv = require("dotenv");
const FormData = require("form-data");

const createAutomationTask = async () => {
  
  const formData = new FormData();
  
    const xmlFile = path.join(
      __dirname,
      "../../",
      "/cypress/results/junit","report.xml"
    );

  // cypress/results/junit/report.xml

  const readFile = util.promisify(fs.readFile);
  await readFile(xmlFile)
    .then((fileContent) => {
      formData.append("file", fileContent,"report.xml");
    })
    .catch((err) => {
      console.log(err);
      console.log(xmlFile);
      console.log(
        "report is not found at /cypress/results/junit, it could be due to the previous test failed without generating the report."
      );
    });

  //formData.append('file', fs.readFileSync('./cypress/results/junit'), 'report.xml');

  try {
    
    const response = await axios.post(
      'https://prod-api.zephyr4jiracloud.com/v2/automations/executions/junit',
      formData,
      {
        params: {
          'projectKey': 'TES',
          'autoCreateTestCases': 'true'
        },
        headers: {
          ...formData.getHeaders(),
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250ZXh0Ijp7ImJhc2VVcmwiOiJodHRwczovL3ByYWN0aWNldGVzdGF1dG9tYXRpb24uYXRsYXNzaWFuLm5ldCIsInVzZXIiOnsiYWNjb3VudElkIjoiNzEyMDIwOmIwNzYwMzgwLTcwMWEtNGU3YS04M2FjLTg2MGZiN2U3MWM2OCJ9fSwiaXNzIjoiY29tLnRoZWQuemVwaHlyLmplIiwic3ViIjoiMTk4ODYzODctYWU4Yi0zZTEzLTk0ZDYtODFhNzZjY2E3NTZlIiwiZXhwIjoxNzQzMDcxNTkzLCJpYXQiOjE3MTE1MzU1OTN9.vPq2NFoFFGWI5RgNSc4HsMzuszYOvBjqPMWSfbr9hG0'
        }
      }
    );
    console.log(response.data);

  } catch (err) {
    // console.log(err);
    console.log(err);
  }

}


const callTasks = async () => {
  console.log("Creating automation task");
  await createAutomationTask();

};

callTasks();
