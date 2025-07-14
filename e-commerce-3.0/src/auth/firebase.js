// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxqljOQs2AnXvwVU0Y2PVL_FbEmv5dFeA",
  authDomain: "prueba-auth-49974.firebaseapp.com",
  projectId: "prueba-auth-49974",
  storageBucket: "prueba-auth-49974.firebasestorage.app",
  messagingSenderId: "766268088962",
  appId: "1:766268088962:web:629cd0c76793e0f392ca9b",
  measurementId: "G-00LZGZ8BVS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export function crearUsuario(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("Credenciles: ", userCredential);
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
    console.log(error.code, error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
