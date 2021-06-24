import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1zO-KV0pOKLInNMU7-OfbVqTSKaxG24Y",
  authDomain: "compress-storage.firebaseapp.com",
  projectId: "compress-storage",
  storageBucket: "compress-storage.appspot.com",
  messagingSenderId: "848614086274",
  appId: "1:848614086274:web:6b4c6da0e9a769a900469b"
};

firebase.initializeApp(firebaseConfig);
export default firebase;