import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh8881qycsAOiMb-j0R1riDIRUDGZqtIE",
  authDomain: "erininabox-98bc9.firebaseapp.com",
  projectId: "erininabox-98bc9",
  storageBucket: "erininabox-98bc9.appspot.com",
  messagingSenderId: "616370587206",
  appId: "1:616370587206:web:c255980eecf297827bec47",
  measurementId: "G-XSJY5E09BS"
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();

const provider = newfirebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const auth = firebase.auth();
export default firebase;

// User Registration
export const userRegistration = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    } catch (err) {
      alert(err.message);
    }
  };

// Sign-in with Email/Password
export const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

// Google Sign-in
export const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(provider);
      const user = res.user;
      const userRef = collection(db, "users");
      const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
      if (result.empty) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } 
    catch (err) {
      alert(err.message);
    }
  };

// Reset Password
export const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (err) {
      alert(err.message);
    }
  };