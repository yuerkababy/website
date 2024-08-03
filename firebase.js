// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* npm install -g firebase-tools
    firebase login
    firebase init
    firebase deploy (put everying in public folder)
*/
const firebaseConfig = {
    apiKey: "AIzaSyCLyb0Y9ZZ-i1JSlm4h98hJxfFjuH0B6us",
    authDomain: "landing-page-a93d7.firebaseapp.com",
    projectId: "landing-page-a93d7",
    storageBucket: "landing-page-a93d7.appspot.com",
    messagingSenderId: "630014986083",
    appId: "1:630014986083:web:b5e0cef15fd1c16de8f556",
    measurementId: "G-7CPQJQ2SE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFireStore(app);

export { firestore };