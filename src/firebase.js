import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDXPOofRa2-pFtA-xM-NeZOorLDgKI4ORM",
  authDomain: "disneyplus-clone-c6db4.firebaseapp.com",
  projectId: "disneyplus-clone-c6db4",
  storageBucket: "disneyplus-clone-c6db4.appspot.com",
  messagingSenderId: "878641988665",
  appId: "1:878641988665:web:7a7793e6e89c4b630139e8",
  measurementId: "G-1K9NC5JEJ6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
