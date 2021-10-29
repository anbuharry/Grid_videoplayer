import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB-ntZXQIpTwyhkZrmJtXrCvZIibuSx8rQ",
    authDomain: "fraction-analytics-5bdcc.firebaseapp.com",
    databaseURL: "https://fraction-analytics-5bdcc-default-rtdb.firebaseio.com",
    projectId: "fraction-analytics-5bdcc",
    storageBucket: "fraction-analytics-5bdcc.appspot.com",
    messagingSenderId: "724096407392",
    appId: "1:724096407392:web:763337c3cb803dd1623005",
    measurementId: "G-7SSNYYEMXK"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;

