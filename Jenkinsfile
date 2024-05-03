pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description : "Enter the script path that you want to run")
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
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }           
        }
        stage('Deploying'){
            steps{
            echo "Deploying the application"
            }
        }
    }

}