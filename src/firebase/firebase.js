// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNeez9ULsZL_NBZlf1lSgPcpQSmwF8scI",
    authDomain: "gridkoda.firebaseapp.com",
    projectId: "gridkoda",
    storageBucket: "gridkoda.appspot.com",
    messagingSenderId: "617156484840",
    appId: "1:617156484840:web:fc1ae6ea2375621c49735d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
