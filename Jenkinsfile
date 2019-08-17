pipeline {
  agent any

  stages {
    stage('Dependences'){
      steps {
        echo "npm install"
        sh 'npm config ls'
      }
    }

    stage('Build'){
      steps {
        echo "npm run build"
      }
    }
  }
}
