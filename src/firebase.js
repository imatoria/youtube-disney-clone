import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-OkH5qRLxW-l2CsTzaIDXG-E4_zNWMAs",
  authDomain: "disney-clone-43ba9.firebaseapp.com",
  projectId: "disney-clone-43ba9",
  storageBucket: "disney-clone-43ba9.appspot.com",
  messagingSenderId: "688711262494",
  appId: "1:688711262494:web:cf7f31bbf35af631cea90f",
  measurementId: "G-LS6P8GVVVT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
