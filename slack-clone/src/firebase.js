import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZXG1dc3JzxnVQYAke1mY0xNmmWE6HUyo",
    authDomain: "slack-clone-5b593.firebaseapp.com",
    projectId: "slack-clone-5b593",
    storageBucket: "slack-clone-5b593.appspot.com",
    messagingSenderId: "29482674920",
    appId: "1:29482674920:web:f528a2bce690a19d78775d",
    measurementId: "G-6SWCBTJ442"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;