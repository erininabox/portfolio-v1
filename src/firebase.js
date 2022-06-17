// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp ({
  apiKey: "AIzaSyAh8881qycsAOiMb-j0R1riDIRUDGZqtIE",
  authDomain: "erininabox-98bc9.firebaseapp.com",
  projectId: "erininabox-98bc9",
  storageBucket: "erininabox-98bc9.appspot.com",
  messagingSenderId: "616370587206",
  appId: "1:616370587206:web:c255980eecf297827bec47",
  measurementId: "G-XSJY5E09BS"
});

export const auth = app.auth();
export default app;
const analytics = getAnalytics(app);