import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5YSwOyjcoflmhSrLlj6vaAlMMbRLzf30",
  authDomain: "whatsup-bharath.firebaseapp.com",
  databaseURL: "https://whatsup-bharath.firebaseio.com",
  projectId: "whatsup-bharath",
  storageBucket: "whatsup-bharath.appspot.com",
  messagingSenderId: "501312634672",
  appId: "1:501312634672:web:fd6092d1740ec76d44d2f5",
  measurementId: "G-RE1LSVW1RT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
