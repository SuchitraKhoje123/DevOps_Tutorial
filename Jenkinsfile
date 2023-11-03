pipeline {
    agent {
        docker {
            image '11ce7fe9bddc' 
            args '-p 7000:7000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}