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
    
     post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/results/json',
                reportFiles: 'mochawesome-report.html',
                reportName: 'HTML Report'
            ])
        }
    
     stage('Merge HTML Reports') {
            steps {
               npx mochawesome-merge ./cypress/results/json/mochawesome*.json > ./cypress/results/json/output.json
            }
        }
    }
}
        // always {
        //     echo("Generating allure report")
        //     allure includeProperties: false, jdk: '', results: [[path: './allure-results']]
        //    // emailext body: '''${SCRIPT, template="allure-report.groovy"}''', compressLog: true, replyTo: 'gariki.pavani@reflectionsinfos.com', subject: "Jenkins Test Execution Summary '${env.JOB_NAME} [${env.BUILD_NUMBER}]'", to: 'gariki.pavani@reflectionsinfos.com'
        // }
    

