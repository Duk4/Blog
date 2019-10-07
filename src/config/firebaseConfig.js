import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6DqXftmQwA_wRLjoDeiN03W1DxgWCGZU",
    authDomain: "dusantanasic-blog.firebaseapp.com",
    databaseURL: "https://dusantanasic-blog.firebaseio.com",
    projectId: "dusantanasic-blog",
    storageBucket: "",
    messagingSenderId: "220137227372",
    appId: "1:220137227372:web:3eaafe4f2be1a51044c449"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;