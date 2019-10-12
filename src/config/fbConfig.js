import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Most of these thing you will copy from firebase, but settings, imports and exports you'll have to add on your own...

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "",
    messagingSenderId: "messagingSenderId",
    appId: "appId"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;