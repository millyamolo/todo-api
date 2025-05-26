pipeline {
  agent any

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
