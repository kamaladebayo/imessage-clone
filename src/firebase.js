import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBByGePqnwhBxCNi1NX-7Vqidxg0bpBUzg",
    authDomain: "imessage-clone-b258f.firebaseapp.com",
    projectId: "imessage-clone-b258f",
    storageBucket: "imessage-clone-b258f.appspot.com",
    messagingSenderId: "201923045010",
    appId: "1:201923045010:web:929e941937e9ee16a7a84b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

