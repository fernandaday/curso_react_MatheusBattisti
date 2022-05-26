import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCawGstAGBNhZ7fDp5qhxKNq9HmsjOAws",
  authDomain: "miniblog-f5f51.firebaseapp.com",
  projectId: "miniblog-f5f51",
  storageBucket: "miniblog-f5f51.appspot.com",
  messagingSenderId: "113429599147",
  appId: "1:113429599147:web:379b6e22b0f54ff74eb8ee"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };