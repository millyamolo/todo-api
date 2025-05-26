pipeline {
    agent any

    tools {
        nodejs 'node-18'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the app...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        // Additional stages like Code Quality, Security, Deploy
    }
}
