pipeline{

    agent any

    parameters{
        choice(name: 'SCRIPT', choices : ['jenkins:demo', 'jenkins:stage'], description : "Enter the script path that you want to run")
        choice(name: 'BROWSER', choices : ['chrome', 'edge', 'firefox'] , description : "Browser choice that you want to run")
    }

    options{
        ansiColor('xterm')
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

}