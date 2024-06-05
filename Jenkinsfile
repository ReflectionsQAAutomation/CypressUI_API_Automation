pipeline{

    agent any

    parameters{
        choice(name: 'SCRIPT', choices : ['jenkins:demo', 'jenkins:stage', 'cypress/e2e/UI/*.cy.js'], description : "Enter the script path that you want to run")
        choice(name: 'BROWSER', choices : ['chrome', 'edge', 'firefox'] , description : "Browser choice that you want to run")
    }
    stages{
        stage('Building'){
            steps{
            echo "Building the application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npm run %SCRIPT% --browser ${BROWSER}"
            }           
        }
        stage('Deploying'){
            steps{
            echo "Deploying the application"
            }
        }
    }

    post{
        always{
           // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'C:\\Users\\garikigp\\OneDrive - Reflections Info Systems PVT LTD\\Desktop\\BenchProj\\0406updated\\CypressUI_API_Automation', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

}