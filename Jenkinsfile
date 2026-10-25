pipeline{
    agent any

    stages{

        stage('Build'){
            steps{
                echo "Building the Project"
                bat "npm ci"
                bat "npx playwright install --with-deps "
            }
        }
        stage('Test'){
            steps{
                echo "Testing the Projecct"
                bat "npx playwright test"
            }
        }
    }
    post{
        always{
            echo "Build Execution Complete"
            //bat "allure generate allure-results --clean -o allure-reports" 
            allure([
                includeProperties: false,
                jdk:'',
                results:[[path:'allure-results']]
            ])
        }
        success{
            echo "Build Executed Successfully "
        }
        failure{
            echo "Build Failed"
        }
    }
}