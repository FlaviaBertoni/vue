pipeline {
  agent any

  stages {
    stage('Dependences'){
      steps {
        echo "npm install"
        sh 'npm install'
      }
    }

    stage('Build'){
      steps {
        echo "npm run build"
        sh 'npm run build'
      }
    }
  }
}
