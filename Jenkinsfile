pipeline {
  agent {
    docker {
      image 'node:18'        // Node.js 18.x LTS image
      args  '-u root:root'   // run as root so npm can write node_modules
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Running tests...'
        sh 'npm test'
      }
    }

    stage('Code Quality') {
      steps {
        echo 'Running JSHint for code quality analysis...'
        sh 'npm run lint'
      }
    }

    stage('Security') {
      steps {
        echo 'Running npm audit for security analysis...'
        sh 'npm run audit'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying Docker container...'
        sh 'docker rm -f todo-api-container || true'
        sh 'docker build -t todo-api .'
        sh 'docker run -d -p 3000:3000 --name todo-api-container todo-api'
      }
    }
  }
}
