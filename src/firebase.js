import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDxmBQBt0wgnEuGdRcqx1qIfBR5lzhhKBE",
  authDomain: "slack-clone-7d71a.firebaseapp.com",
  projectId: "slack-clone-7d71a",
  storageBucket: "slack-clone-7d71a.appspot.com",
  messagingSenderId: "313060024962",
  appId: "1:313060024962:web:9029951099ae8ec4120a9b",
  measurementId: "G-HBGLBJVKV7"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export {auth,provider,db}