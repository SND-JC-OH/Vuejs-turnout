  // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// https://firebase.google.com/docs/web/learn-more

// https://firebase.google.com/docs/auth/web/start
// Initialize Firebase Authentication and get a reference to the service



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCULoUxo3J00S_6Cm7UYVwhwo0H592U6-E",
    authDomain: "turnout-efc2b.firebaseapp.com",
    projectId: "turnout-efc2b",
    storageBucket: "turnout-efc2b.appspot.com",
    messagingSenderId: "390414266503",
    appId: "1:390414266503:web:8563490b77068b7b28c822"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)