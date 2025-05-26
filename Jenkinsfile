pipeline {
    agent {
        docker {
            image 'node:18' // or node:20 or latest LTS
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx mocha'
            }
        }
    }
}
