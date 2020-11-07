import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlB7KmtcCbaL7KHUAaifXkmUR3HcBxIho",
    authDomain: "friendbook-50ea7.firebaseapp.com",
    databaseURL: "https://friendbook-50ea7.firebaseio.com",
    projectId: "friendbook-50ea7",
    storageBucket: "friendbook-50ea7.appspot.com",
    messagingSenderId: "795450168245",
    appId: "1:795450168245:web:00750b99829d751df53ffc",
    measurementId: "G-97J988XH47"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;