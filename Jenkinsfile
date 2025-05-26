pipeline {
  agent any
  tools { nodejs 'node-18' }

  stages {
    stage('Install Dependencies') {
      steps { sh 'npm install' }
    }
   stage('Run Tests') {
  steps {
    echo 'Making mocha binary executable…'
    sh 'chmod +x node_modules/.bin/mocha'
    echo 'Running tests…'
    sh 'npm test'
  }
}
    stage('Code Quality') {
      steps { sh 'npm run lint' }
    }
    stage('Security') {
      steps { sh 'npm audit --audit-level=high' }
    }
    stage('Build & Deploy') {
      steps {
        // These will still work once Docker is on the host, 
        // but you can also remove them if you're not building containers here.
        sh 'docker rm -f todo-api-container || true'
        sh 'docker build -t todo-api .'
        sh 'docker run -d -p 3000:3000 --name todo-api todo-api'
      }
    }
  }
}
