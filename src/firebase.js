import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth";
import { getFirestore } from "firebase/compat/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbiyQJw4mecg-_dLp9-HRpC97yWqwU3Mw",
  authDomain: "lixcel.firebaseapp.com",
  projectId: "lixcel",
  storageBucket: "lixcel.appspot.com",
  messagingSenderId: "956241942128",
  appId: "1:956241942128:web:c14c1f5ba8174b53fac6b5",
  measurementId: "G-YDRL1R8KJ9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;

// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBbiyQJw4mecg-_dLp9-HRpC97yWqwU3Mw",
//   authDomain: "lixcel.firebaseapp.com",
//   databaseURL: "https://lixcel.firebaseio.com"
//   projectId: "lixcel",
//   storageBucket: "lixcel.appspot.com",
//   messagingSenderId: "956241942128",
//   appId: "1:956241942128:web:c14c1f5ba8174b53fac6b5",
//   measurementId: "G-YDRL1R8KJ9",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };
