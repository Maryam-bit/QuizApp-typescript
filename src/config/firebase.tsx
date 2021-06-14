import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDv7Tk9g5Ydn2kMw-lE7QFINBRSAPoZOQY",
    authDomain: "quiz-app-96e0f.firebaseapp.com",
    projectId: "quiz-app-96e0f",
    storageBucket: "quiz-app-96e0f.appspot.com",
    messagingSenderId: "761445367381",
    appId: "1:761445367381:web:4d899d1f5d9bef5cb95edc",
    measurementId: "G-B0JHZJ3LND"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.database();

  export default firebase