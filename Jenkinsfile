pipeline {
  agent any

  stages {
    stage('Dependences'){
      steps {
        npm install
      }
    }

    stage('Build'){
      steps {
        npm run build
      }
    }
  }
}
