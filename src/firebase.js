import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDqZxtvYzQL-IyL_wN55V84NxL_uH3tK60",
  authDomain: "test-project-109db.firebaseapp.com",
  databaseURL: "https://test-project-109db.firebaseio.com",
  projectId: "test-project-109db",
  storageBucket: "test-project-109db.appspot.com",
  messagingSenderId: "413685624544"
}

firebase.initializeApp(config)

export default firebase;
