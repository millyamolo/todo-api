pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building the app...'
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        bat 'npm test'
      }
    }
    stage('Code Quality') {
  steps {
    echo 'Running JSHint for code quality analysis...'
    bat 'npm run lint'
  }
}
stage('Security') {
  steps {
    echo 'Running npm audit for security analysis...'
    bat 'npm run audit'
  }
}
stage('Deploy') {
  steps {
    echo 'Deploying Docker container...'
    bat 'docker rm -f todo-api-container || true'
    bat 'docker build -t todo-api .'
    bat 'docker run -d -p 3000:3000 --name todo-api-container todo-api'
  }
}

  }
}
